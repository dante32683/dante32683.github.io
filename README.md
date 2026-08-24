# dante-martin.com

The source code for Dante Martin's personal website and portfolio. It is a lightweight, single static page hosted on GitHub Pages.

## Core Design Principles

- **Zero Build Step:** What you see in the repository is exactly what the browser executes. No compilers, transpillers, or bundlers.
- **Minimal Runtime Dependencies:** No CDN, web-font, or CSS/JS framework dependencies. Cloudflare Web Analytics is intentionally enabled at the edge for aggregate site-traffic and real-user performance measurement.
- **Data-Driven Architecture:** All textual content lives inside `data.js` as a single structured object. The custom renderer in `index.html` dynamically handles building layout sections, active scroll-spy navigation, and the interactive light/dark theme toggle.

## Project Structure

- `data.js` - **Main file.** All resume data, projects, experience, coursework, honors, and skills reside here. To change what the site says, edit this file only.
- `index.html` - The structural shell and custom Vanilla JavaScript renderer that translates `data.js` into DOM elements.
- `styles.css` - High-contrast, minimal CSS styling using custom property themes (green color palette) with smooth transitions, native responsive queries, and dedicated print stylesheets.
- `STANDARDS.md` - Strict rules and writing guidelines governing formatting, content structures, and layout rules.
- `AGENTS.md` - Workspace instructions for AI coding assistants.

## Making Changes

Before editing anything, please read **[STANDARDS.md](STANDARDS.md)** in full to maintain the specific, hype-free writing style and structural limits.

1. Create a dedicated branch for substantial changes (`git checkout -b <branch-name>`).
2. Edit your content in `data.js`.
3. Open `index.html` in a web browser to test locally.
4. Confirm the page renders correctly in both **light and dark modes** (using the theme toggle).
5. Run standard print-to-PDF previews to ensure layout prints cleanly.
6. Commit using **Conventional Commits** (`feat:`, `fix:`, `docs:`, `style:`, etc.) and push.
