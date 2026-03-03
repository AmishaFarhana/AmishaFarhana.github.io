/**
 * Particle Constellation Animation
 * A canvas-based particle system for the hero section of a portfolio website.
 * Particles drift gently like stars, form constellation-like connections,
 * and react subtly to mouse movement.
 */

class ParticleSystem {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      console.warn(`ParticleSystem: canvas element "#${canvasId}" not found.`);
      return;
    }

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null };
    this.animationId = null;
    this.isRunning = false;
    this.resizeTimeout = null;

    // Connection thresholds
    this.connectionDistance = 120;
    this.mouseRepulsionDistance = 150;
    this.mouseConnectionDistance = 150;

    // Theme colors — start with current theme
    this.currentColors = this._getThemeColors();
    this.targetColors = { ...this.currentColors };
    this.colorTransitionProgress = 1; // 1 = fully transitioned

    this.init();
  }

  /**
   * Set up canvas dimensions, event listeners, observers, and kick off animation.
   */
  init() {
    this._resizeCanvas();
    this.createParticles();

    // --- Event listeners ---
    this._boundHandleMouseMove = (e) => this.handleMouseMove(e);
    this._boundHandleMouseLeave = () => { this.mouse.x = null; this.mouse.y = null; };
    this._boundHandleResize = () => this.handleResize();

    this.canvas.addEventListener('mousemove', this._boundHandleMouseMove);
    this.canvas.addEventListener('mouseleave', this._boundHandleMouseLeave);
    window.addEventListener('resize', this._boundHandleResize);

    // --- IntersectionObserver: pause when hero is off-screen ---
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.resume();
          } else {
            this.pause();
          }
        });
      },
      { threshold: 0 }
    );

    const heroSection = this.canvas.closest('#hero') || this.canvas.parentElement;
    if (heroSection) {
      this.observer.observe(heroSection);
    }

    // --- MutationObserver: react to theme changes on <html> ---
    this.themeObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          this.updateColors();
        }
      }
    });

    this.themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    // Start
    this.resume();
  }

  /**
   * Determine how many particles to spawn based on screen area,
   * then populate the particles array.
   */
  createParticles() {
    this.particles = [];

    const area = this.canvas.width * this.canvas.height;
    const baseCount = 100;
    const mobileThreshold = 600 * 400;
    const desktopThreshold = 1920 * 1080;

    // Scale between 80 (small screens) and 100 (large screens)
    let count;
    if (area <= mobileThreshold) {
      count = 80;
    } else if (area >= desktopThreshold) {
      count = baseCount;
    } else {
      const ratio = (area - mobileThreshold) / (desktopThreshold - mobileThreshold);
      count = Math.round(80 + ratio * (baseCount - 80));
    }

    for (let i = 0; i < count; i++) {
      this.particles.push(this._createParticle());
    }
  }

  /**
   * Core animation loop: clear, update, draw, request next frame.
   */
  animate() {
    if (!this.isRunning) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Smoothly transition colors if theme changed
    if (this.colorTransitionProgress < 1) {
      this.colorTransitionProgress = Math.min(1, this.colorTransitionProgress + 0.02);
      this._lerpColors();
    }

    // Update particle positions
    for (const particle of this.particles) {
      this._updateParticle(particle);
    }

    // Draw connections first (behind particles)
    this.drawConnections();

    // Draw particles on top
    for (const particle of this.particles) {
      this.drawParticle(particle);
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  /**
   * Render a single particle as a filled circle.
   */
  drawParticle(particle) {
    const { r, g, b } = this.currentColors.particle;
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.opacity})`;
    this.ctx.fill();
  }

  /**
   * Draw thin lines between nearby particles, and between particles and the mouse.
   * Line opacity decreases with distance.
   */
  drawConnections() {
    const { r, g, b } = this.currentColors.connection;
    const baseOpacity = this.currentColors.connectionOpacity;
    const maxDist = this.connectionDistance;
    const maxDistSq = maxDist * maxDist;

    const len = this.particles.length;

    // Particle-to-particle connections
    for (let i = 0; i < len; i++) {
      const a = this.particles[i];

      for (let j = i + 1; j < len; j++) {
        const b_particle = this.particles[j];
        const dx = a.x - b_particle.x;
        const dy = a.y - b_particle.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < maxDistSq) {
          const dist = Math.sqrt(distSq);
          const opacity = baseOpacity * (1 - dist / maxDist);

          this.ctx.beginPath();
          this.ctx.moveTo(a.x, a.y);
          this.ctx.lineTo(b_particle.x, b_particle.y);
          this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          this.ctx.lineWidth = 0.6;
          this.ctx.stroke();
        }
      }

      // Particle-to-mouse connections
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const mdx = a.x - this.mouse.x;
        const mdy = a.y - this.mouse.y;
        const mDistSq = mdx * mdx + mdy * mdy;
        const mouseMaxDistSq = this.mouseConnectionDistance * this.mouseConnectionDistance;

        if (mDistSq < mouseMaxDistSq) {
          const mDist = Math.sqrt(mDistSq);
          const opacity = baseOpacity * 1.5 * (1 - mDist / this.mouseConnectionDistance);

          this.ctx.beginPath();
          this.ctx.moveTo(a.x, a.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }
  }

  /**
   * Track mouse position relative to the canvas.
   */
  handleMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    this.mouse.x = e.clientX - rect.left;
    this.mouse.y = e.clientY - rect.top;
  }

  /**
   * Debounced resize handler: recalculate canvas dimensions and rebuild particles.
   */
  handleResize() {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      this._resizeCanvas();
      this.createParticles();
    }, 200);
  }

  /**
   * Begin a smooth color transition to the new theme.
   */
  updateColors() {
    this.targetColors = this._getThemeColors();
    this.colorTransitionProgress = 0;
  }

  /**
   * Pause the animation loop.
   */
  pause() {
    this.isRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  /**
   * Resume the animation loop.
   */
  resume() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.animate();
  }

  // ---------------------------------------------------------------------------
  // Private helpers
  // ---------------------------------------------------------------------------

  /**
   * Resize the canvas to match the parent hero section dimensions.
   */
  _resizeCanvas() {
    const parent = this.canvas.closest('#hero') || this.canvas.parentElement;
    if (parent) {
      this.canvas.width = parent.clientWidth;
      this.canvas.height = parent.clientHeight;
    } else {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }

  /**
   * Build a single particle with randomized properties.
   */
  _createParticle() {
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.2 + Math.random() * 0.6; // 0.2 - 0.8

    return {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      radius: 1 + Math.random() * 2, // 1 - 3
      speed: speed,
      directionX: Math.cos(angle) * speed,
      directionY: Math.sin(angle) * speed,
      opacity: 0.3 + Math.random() * 0.5, // 0.3 - 0.8
    };
  }

  /**
   * Move a particle one frame, applying mouse repulsion and edge wrapping.
   */
  _updateParticle(particle) {
    // Mouse repulsion
    if (this.mouse.x !== null && this.mouse.y !== null) {
      const dx = particle.x - this.mouse.x;
      const dy = particle.y - this.mouse.y;
      const distSq = dx * dx + dy * dy;
      const repulsionDist = this.mouseRepulsionDistance;

      if (distSq < repulsionDist * repulsionDist && distSq > 0) {
        const dist = Math.sqrt(distSq);
        const force = (repulsionDist - dist) / repulsionDist;
        const pushStrength = 0.8; // subtle

        particle.x += (dx / dist) * force * pushStrength;
        particle.y += (dy / dist) * force * pushStrength;
      }
    }

    // Drift movement
    particle.x += particle.directionX;
    particle.y += particle.directionY;

    // Wrap edges
    const w = this.canvas.width;
    const h = this.canvas.height;
    const margin = particle.radius;

    if (particle.x < -margin) particle.x = w + margin;
    else if (particle.x > w + margin) particle.x = -margin;

    if (particle.y < -margin) particle.y = h + margin;
    else if (particle.y > h + margin) particle.y = -margin;
  }

  /**
   * Return color configuration based on the current data-theme attribute.
   */
  _getThemeColors() {
    const theme = document.documentElement.getAttribute('data-theme');

    if (theme === 'dark') {
      // Neon cyan #2DD4BF = rgb(45, 212, 191)
      return {
        particle: { r: 45, g: 212, b: 191 },
        connection: { r: 45, g: 212, b: 191 },
        connectionOpacity: 0.15,
      };
    }

    // Light mode (default): teal #0EA5A0 = rgb(14, 165, 160)
    return {
      particle: { r: 14, g: 165, b: 160 },
      connection: { r: 14, g: 165, b: 160 },
      connectionOpacity: 0.1,
    };
  }

  /**
   * Linearly interpolate between current colors and target colors
   * for a smooth theme transition.
   */
  _lerpColors() {
    const t = this.colorTransitionProgress;
    const from = this.currentColors;
    const to = this.targetColors;

    const lerp = (a, b, t) => a + (b - a) * t;

    this.currentColors = {
      particle: {
        r: Math.round(lerp(from.particle.r, to.particle.r, t)),
        g: Math.round(lerp(from.particle.g, to.particle.g, t)),
        b: Math.round(lerp(from.particle.b, to.particle.b, t)),
      },
      connection: {
        r: Math.round(lerp(from.connection.r, to.connection.r, t)),
        g: Math.round(lerp(from.connection.g, to.connection.g, t)),
        b: Math.round(lerp(from.connection.b, to.connection.b, t)),
      },
      connectionOpacity: lerp(from.connectionOpacity, to.connectionOpacity, t),
    };
  }
}

// ---------------------------------------------------------------------------
// Auto-initialize when the DOM is ready
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  new ParticleSystem('particles-canvas');
});
