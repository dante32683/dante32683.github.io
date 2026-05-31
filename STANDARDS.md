# dante-martin.com — Standards

This file describes the conventions, structure, and patterns used on dante-martin.com. Any AI agent editing the site should follow these rules.

---

## Structure

Single-page HTML site. Everything lives in `index.html` — no build step, no framework, no separate CSS/JS files.

### Page sections (in order)

1. **Nav** — sticky bar, "Dante" brand on left, section links on right
2. **Hero** — tagline, h1 name, subtitle, CTA links
3. **About / Education** — stats row, SRJC course table, AP exam badges
4. **Projects** — card grid, each with h3, meta line, description, tags, optional links
5. **Experience** — card section for jobs/roles
6. **Skills** — alphabetized grid of skill pills with category labels
7. **Contact** — centered card with GitHub, LinkedIn, Email links
8. **Footer** — minimal credit line

---

## Visual conventions

### Colors (CSS variables, light & dark mode)

| Variable | Light | Dark |
|----------|-------|------|
| `--bg` | #fafafa | #0f172a |
| `--surface` | #ffffff | #1e293b |
| `--text` | #1a1a2e | #e2e8f0 |
| `--text-muted` | #555 | #94a3b8 |
| `--accent` | #2563eb | #60a5fa |
| `--accent-light` | #dbeafe | #1e3a5f |
| `--border` | #e5e7eb | #334155 |

### Typography

- Font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- h1 hero: 2.75rem, 800 weight, -0.02em letter-spacing
- Section h2: 1.5rem, 700 weight
- Card h3: 1.1rem, 600 weight
- Body: 0.95rem, 1.6 line-height
- Meta / muted text: 0.85rem, `--text-muted`

### Spacing

- Section padding: 3rem 0 (5rem top for hero)
- Card padding: 1.5rem
- Max content width: 800px
- Gap between cards: 1.25rem
- Tagline pill: 0.35rem 1rem, rounded-full (9999px)

### Dark mode

Dark mode is handled via `@media (prefers-color-scheme: dark)` — no toggle, respects system preference.

---

## Adding projects

Each project is a `.card` div inside `#projects`. Template:

```html
<div class="card">
  <h3>Project Name &mdash; Subtitle</h3>
  <div class="meta">Organization &bull; Date Range</div>
  <p>1–2 sentence description covering what, why, and your role.</p>
  <div class="tags">
    <span>Tag1</span><span>Tag2</span><span>Tag3</span>
  </div>
  <div class="links">
    <a href="https://...">Link Text &nearr;</a>
  </div>
</div>
```

Rules:
- Use `&mdash;` between project name and subtitle
- Use `&bull;` between items in the meta line
- Tags are lowercase, single words where possible
- External links get `&nearr;` after the text
- No more than 4 tags per project

---

## Adding skills

Add to the `.skills-grid` inside `#skills`. Each skill:

```html
<div class="skill-item">Skill Name <span class="cat">Category</span></div>
```

Categories are single-word, uppercase in the UI. Keep skills alphabetized. Tools being learned go in the "Learning" paragraph below the grid, not in the grid itself.

---

## Adding AP exams

Add to the `.ap-grid` inside the AP card. Each entry:

```html
<div class="ap-item">Exam Name <span class="score score-5">5</span></div>
```

Use `score-5` (green) for score 5, `score-4` (yellow) for score 4. Scores below 4 are not shown. Exams are sorted alphabetically.

---

## Stats row

The stats row has exactly 4 items. Format:

```html
<div class="stat"><div class="num">Value</div><div class="label">Label</div></div>
```

Values should be short (under 6 chars). Labels are lowercase single words. Avoid "$" in numbers where possible. Keep to 4 items max — any more dilutes the visual impact.

---

## General rules

- **No external dependencies** — no CDN links, no JS libraries, no fonts. Everything is inline.
- **No build step** — the file served is the file in the repo. No preprocessing.
- **Always validate dark mode** — any new element must look right in both themes.
- **Keep index.html under 25KB** — this is a portfolio, not a web app.
- **No tracking, analytics, or cookies.**
- **AI agents editing this file should load STANDARDS.md first** before making changes to index.html.
