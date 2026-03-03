# Amisha Farhana Shaik — Portfolio Website

A storytelling-driven portfolio website with the "Data Cosmos" aesthetic, built with pure HTML/CSS/JS for GitHub Pages.

---

## Hosting on GitHub Pages

1. Create a new GitHub repository (e.g., `amishafarhanashaik.github.io` for a user site, or any name for a project site).
2. Push these files to the `main` branch:
   ```
   git init
   git add index.html css/ js/ assets/ README.md
   git commit -m "Initial portfolio site"
   git remote add origin https://github.com/AmishaFarhana/<repo-name>.git
   git push -u origin main
   ```
3. Go to **Settings > Pages** in your GitHub repo.
4. Under **Source**, select `main` branch and `/ (root)` folder, then click **Save**.
5. Your site will be live at `https://amishafarhana.github.io/<repo-name>/` (or `https://amishafarhana.github.io/` if the repo is named `amishafarhana.github.io`).

---

## Adding Photos

### Hero Photo (circular profile picture)

In `index.html`, find this block inside `<section id="hero">`:

```html
<div class="hero-photo">
  <span class="photo-placeholder">Your Photo Here</span>
</div>
```

Replace it with:

```html
<div class="hero-photo">
  <img src="assets/hero-photo.jpg" alt="Amisha Farhana Shaik" />
</div>
```

Then place your image file at `assets/hero-photo.jpg`. The CSS already handles `object-fit: cover` and circular clipping.

### About Section Photo

In `index.html`, find this block inside `<section id="about">`:

```html
<div class="about-photo">
  <div class="photo-placeholder">Your Photo Here</div>
</div>
```

Replace it with:

```html
<div class="about-photo">
  <img src="assets/about-photo.jpg" alt="Amisha Farhana Shaik" />
</div>
```

Then place your image at `assets/about-photo.jpg`. The CSS handles `object-fit: cover` and rounded corners.

### LinkedIn Post Images

Open `js/data.js` and find the `LINKEDIN_POSTS` array. Each post has `imagePlaceholder: true`. The images are rendered dynamically, so to add real images:

1. Place your post images in the `assets/` folder (e.g., `assets/datathon.jpg`, `assets/microsoft.jpg`).
2. Open `js/main.js` and find the LinkedIn post rendering section (search for `post-image`). Replace:

```html
<span style="color:var(--text-secondary);font-size:0.85rem">📸 Photo Placeholder</span>
```

with an image tag. To do this per-post, add an `image` field to each post in `js/data.js`:

```js
{
  title: "CSUEB's First Datathon 1.0",
  date: "2024",
  snippet: "...",
  likes: 89,
  comments: 12,
  linkedinUrl: "https://www.linkedin.com/in/amishafarhanashaik/recent-activity/all/",
  image: "assets/datathon.jpg"   // <-- add this line
},
```

Then in `js/main.js`, replace the post-image div in the template (around line 249) from:

```js
<div class="post-image">
  <span style="color:var(--text-secondary);font-size:0.85rem">\uD83D\uDCF8 Photo Placeholder</span>
</div>
```

to:

```js
<div class="post-image">
  ${post.image
    ? `<img src="${post.image}" alt="${post.title}" />`
    : `<span style="color:var(--text-secondary);font-size:0.85rem">📸 Photo Placeholder</span>`}
</div>
```

---

## Updating Hyperlinks

### LinkedIn Post Links

All LinkedIn post URLs are in `js/data.js` under the `LINKEDIN_POSTS` array. Each post has a `linkedinUrl` field. Replace the placeholder URLs with the actual post URLs:

```js
{
  title: "CSUEB's First Datathon 1.0",
  linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:PASTE_ACTUAL_ID/",
  // ... other fields
},
```

To get the actual URL for a LinkedIn post: open the post on LinkedIn, click the three dots (**...**) menu, and select **Copy link to post**.

### Project GitHub Links

All project GitHub URLs are in `js/data.js` under `FEATURED_PROJECTS` (the 8 hero projects) and `ALL_PROJECTS` (the expandable categories). Each has a `githubUrl` field:

```js
{
  title: "VitaNova AI — Waste Classification",
  githubUrl: "https://github.com/AmishaFarhana/your-repo-name",
  // ... other fields
},
```

Update any `githubUrl` to point to the correct repository.

### Footer Social Links

In `index.html`, find the `<footer id="contact">` section. Update these links directly:

- **LinkedIn**: `href="https://www.linkedin.com/in/amishafarhanashaik/"`
- **GitHub**: `href="https://github.com/AmishaFarhana"`
- **Email**: `href="mailto:amisha.shaik@example.com"` — replace with your real email

### Navigation Brand Link

The "AF" logo links to `#hero`. No change needed unless you want it to link elsewhere.

---

## Quick Reference: Key Files

| What to change | File | Where to look |
|---|---|---|
| Profile photos | `index.html` | Search for `hero-photo` and `about-photo` |
| Project data & links | `js/data.js` | `FEATURED_PROJECTS` and `ALL_PROJECTS` |
| LinkedIn post data & links | `js/data.js` | `LINKEDIN_POSTS` |
| Post images | `js/data.js` + `js/main.js` | Add `image` field, update template |
| Bio text | `index.html` | `<section id="about">` |
| Footer links | `index.html` | `<footer id="contact">` |
| Skills list | `js/data.js` | `SKILLS` object |
| Experience timeline | `js/data.js` | `EXPERIENCE` array |
| Leadership narratives | `js/data.js` | `LEADERSHIP_HIGHLIGHTS` array |
| Colors & theme | `css/style.css` | `:root` and `[data-theme="dark"]` |
