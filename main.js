/* ============================================================
   main.js  –  Amisha's Portfolio  |  Core Interactions
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ----------------------------------------------------------
  // 1. Theme Toggle
  // ----------------------------------------------------------
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.querySelector('.theme-toggle');

  function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  (function initTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) {
      applyTheme(stored);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark ? 'dark' : 'light');
    }
  })();

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = htmlEl.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ----------------------------------------------------------
  // 2. Sticky Navigation & Active Section Highlighting
  // ----------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const heroSection = document.getElementById('hero');

  if (heroSection && navbar) {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          navbar.classList.remove('navbar-visible');
        } else {
          navbar.classList.add('navbar-visible');
        }
      },
      { threshold: 0 }
    );
    heroObserver.observe(heroSection);
  }

  // Active section highlighting
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              link.classList.toggle(
                'active',
                link.getAttribute('href') === `#${id}`
              );
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((section) => sectionObserver.observe(section));
  }

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ----------------------------------------------------------
  // 3. Mobile Hamburger Menu
  // ----------------------------------------------------------
  const hamburger = document.querySelector('.hamburger');
  const navLinksContainer = document.querySelector('.nav-links');

  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinksContainer.classList.toggle('active');
    });

    navLinksContainer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinksContainer.classList.remove('active');
      });
    });
  }

  // ----------------------------------------------------------
  // 4. Typewriter Effect
  // ----------------------------------------------------------
  const typewriterEl = document.getElementById('typewriter');

  if (typewriterEl) {
    const typewriterText =
      'Welcome to my universe of data, leadership, and impact. Scroll to begin the journey...';
    let charIndex = 0;

    function typeChar() {
      if (charIndex < typewriterText.length) {
        typewriterEl.textContent += typewriterText.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, 40);
      }
    }

    setTimeout(typeChar, 500);
  }

  // ----------------------------------------------------------
  // 7. Render Experience Timeline
  // ----------------------------------------------------------
  const timelineContainer = document.getElementById('timeline-container');

  const typeLabels = {
    work: 'Work',
    education: 'Education',
    leadership: 'Leadership',
    campus: 'Campus',
  };

  if (timelineContainer && typeof EXPERIENCE !== 'undefined') {
    timelineContainer.innerHTML = EXPERIENCE.map(
      (item) => `
      <div class="timeline-item reveal">
        <span class="timeline-badge badge-${item.type}">${typeLabels[item.type] || item.type}</span><br>
        <h3>${item.role}</h3>
        <span class="company">${item.company}</span>
        <span class="period">${item.period}</span>
        <p>${item.description}</p>
      </div>`
    ).join('');
  }

  // ----------------------------------------------------------
  // 8. Render Featured Projects
  // ----------------------------------------------------------
  const featuredContainer = document.getElementById('featured-projects');

  if (featuredContainer && typeof FEATURED_PROJECTS !== 'undefined') {
    featuredContainer.innerHTML = FEATURED_PROJECTS.map(
      (proj, index) => `
      <div class="project-card reveal reveal-delay-${(index % 4) + 1}">
        <span class="project-highlight">${proj.highlight}</span>
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <div class="tech-stack">
          ${proj.techStack.map((t) => `<span class="tech-badge">${t}</span>`).join('')}
        </div>
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
          View on GitHub <span class="arrow">\u2192</span>
        </a>
      </div>`
    ).join('');
  }

  // ----------------------------------------------------------
  // 9. Render Project Categories (Accordion)
  // ----------------------------------------------------------
  const categoriesContainer = document.getElementById('project-categories');

  if (categoriesContainer && typeof ALL_PROJECTS !== 'undefined') {
    categoriesContainer.innerHTML = Object.entries(ALL_PROJECTS)
      .map(
        ([category, items]) => `
      <div class="category-accordion">
        <div class="category-header">
          <h4>${category}</h4>
          <div style="display:flex;align-items:center;gap:12px">
            <span class="count">${items.length} projects</span>
            <span class="chevron">\u25BC</span>
          </div>
        </div>
        <div class="category-content">
          ${items
            .map(
              (project) => `
            <div class="mini-project-card">
              <div>
                <h4>${project.title}</h4>
                <div class="tech-stack">
                  ${project.techStack.map((t) => `<span class="tech-badge">${t}</span>`).join('')}
                </div>
              </div>
              ${
                project.githubUrl
                  ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">GitHub \u2192</a>`
                  : ''
              }
            </div>`
            )
            .join('')}
        </div>
      </div>`
      )
      .join('');

    // Accordion toggle behaviour
    categoriesContainer.querySelectorAll('.category-header').forEach((header) => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isActive = header.classList.contains('active');

        if (isActive) {
          header.classList.remove('active');
          content.classList.remove('active');
          content.style.maxHeight = '0px';
        } else {
          header.classList.add('active');
          content.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  }

  // ----------------------------------------------------------
  // 10. Render LinkedIn Posts
  // ----------------------------------------------------------
  const linkedinContainer = document.getElementById('linkedin-posts');

  if (linkedinContainer && typeof LINKEDIN_POSTS !== 'undefined') {
    linkedinContainer.innerHTML = LINKEDIN_POSTS.map(
      (post) => `
      <div class="linkedin-card reveal">
        <div class="post-image">
          <span style="color:var(--text-secondary);font-size:0.85rem">\uD83D\uDCF8 Photo Placeholder</span>
        </div>
        <div class="post-body">
          <span class="post-date">${post.date}</span>
          <h3>${post.title}</h3>
          <p>${post.snippet}</p>
          <div class="post-stats">
            <span>\uD83D\uDC4D ${post.likes} likes</span>
            <span>\uD83D\uDCAC ${post.comments} comments</span>
          </div>
          <a href="${post.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="post-link">
            Read on LinkedIn <span class="arrow">\u2192</span>
          </a>
        </div>
      </div>`
    ).join('');
  }

  // ----------------------------------------------------------
  // 11. Render Leadership Cards
  // ----------------------------------------------------------
  const leadershipContainer = document.getElementById('leadership-cards');

  if (leadershipContainer && typeof LEADERSHIP_HIGHLIGHTS !== 'undefined') {
    leadershipContainer.innerHTML = LEADERSHIP_HIGHLIGHTS.map(
      (item) => `
      <div class="leadership-card reveal">
        <h3>${item.role}</h3>
        <p class="narrative">${item.narrative}</p>
        <p class="impact">"${item.impact}"</p>
      </div>`
    ).join('');
  }

  // ----------------------------------------------------------
  // 12. Render Quotes
  // ----------------------------------------------------------
  const quotesContainer = document.getElementById('quotes-container');

  if (quotesContainer && typeof QUOTES !== 'undefined' && QUOTES.length) {
    const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    quotesContainer.innerHTML = `
      <div class="quote-card reveal">
        <blockquote>${randomQuote}</blockquote>
      </div>`;
  }

  // ----------------------------------------------------------
  // 13. Render Skills Grid
  // ----------------------------------------------------------
  const skillsGrid = document.getElementById('skills-grid');

  if (skillsGrid && typeof SKILLS !== 'undefined') {
    skillsGrid.innerHTML = Object.entries(SKILLS)
      .map(
        ([category, skills]) => `
      <div class="skill-category reveal">
        <h3>${category}</h3>
        <div class="skill-tags">
          ${skills.map((s) => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
      </div>`
      )
      .join('');
  }

  // ----------------------------------------------------------
  // 5. Scroll Reveal Animations
  // ----------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    revealElements.forEach((el) => revealObserver.observe(el));
  }

  // ----------------------------------------------------------
  // 6. Animated Counters
  // ----------------------------------------------------------
  const countersSection = document.querySelector('.about-counters');
  const counterNumbers = document.querySelectorAll('.counter-number');
  let countersAnimated = false;

  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;

    counterNumbers.forEach((el) => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const duration = 2000;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutExpo(progress);
        const current = Math.floor(easedProgress * target);

        el.textContent = current + '+';

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = target + '+';
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  if (countersSection && counterNumbers.length) {
    const counterObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounters();
          counterObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    counterObserver.observe(countersSection);
  }

  // ----------------------------------------------------------
  // 14. Back to Top Button
  // ----------------------------------------------------------
  const backToTopBtn = document.querySelector('.back-to-top');

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
