# dante-martin.com

The source code for Dante Martin's personal website and portfolio. It is a lightweight, single static page hosted on GitHub Pages.

## Core Design Principles

- **Static HTML First:** The complete portfolio is present in `index.html` before JavaScript runs. No compilers, transpilers, templating system, or bundlers.
- **Minimal Runtime Dependencies:** No CDN, web-font, or CSS/JS framework dependencies. Cloudflare Web Analytics is intentionally enabled at the edge for aggregate site-traffic and real-user performance measurement.
- **Progressive Enhancement:** JavaScript only handles the saved theme override, active-section highlighting, and image-preview dialog. The portfolio remains readable and navigable without it.

## Project Structure

- `index.html` - **Main file.** Complete semantic portfolio content plus small progressive-enhancement JavaScript.
- `styles.css` - High-contrast, minimal CSS styling using custom property themes (green color palette) with smooth transitions, native responsive queries, and dedicated print stylesheets.
- `STANDARDS.md` - Strict rules and writing guidelines governing formatting, content structures, and layout rules.
- `AGENTS.md` - Workspace instructions for AI coding assistants.

## Making Changes

Before editing anything, please read **[STANDARDS.md](STANDARDS.md)** in full to maintain the specific, hype-free writing style and structural limits.

1. Create a dedicated branch for substantial changes (`git checkout -b <branch-name>`).
2. Edit the relevant semantic content in `index.html`.
3. Open `index.html` in a web browser to test locally.
4. Confirm the page renders correctly in both **light and dark modes** (using the theme toggle).
5. Run standard print-to-PDF previews to ensure layout prints cleanly.
6. Commit using **Conventional Commits** (`feat:`, `fix:`, `docs:`, `style:`, etc.) and push.
