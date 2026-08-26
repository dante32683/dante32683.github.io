# dante-martin.com

The source code for Dante Martin's personal website and portfolio. It is a lightweight, single static page deployed from this repository to Cloudflare Pages and served at `dante-martin.com`.

## Core Design Principles

- **Static HTML First:** The complete portfolio is present in `index.html` before JavaScript runs. No compilers, transpilers, templating system, or bundlers.
- **Minimal Runtime Dependencies:** No CDN, web-font, or CSS/JS framework dependencies. Cloudflare Web Analytics is intentionally enabled at the edge for aggregate site-traffic and real-user performance measurement.
- **Progressive Enhancement:** JavaScript only handles the saved theme override, active-section highlighting, and image-preview dialog. The portfolio remains readable and navigable without it.

## Project Structure

- `index.html` - **Main file.** Complete semantic portfolio content plus small progressive-enhancement JavaScript.
- `styles.css` - High-contrast, minimal CSS styling using custom property themes (green color palette) with smooth transitions, native responsive queries, and dedicated print stylesheets.
- `STANDARDS.md` - Strict rules and writing guidelines governing formatting, content structures, and layout rules.
- `AGENTS.md` - Workspace instructions for AI coding assistants.

## Hosting

- **Production host:** Cloudflare Pages (`dante32683-github-io.pages.dev`).
- **Production domain:** `dante-martin.com`, attached to the Cloudflare Pages project through Cloudflare DNS.
- **Source:** this GitHub repository. Cloudflare Pages deploys the static files from `main`.
- GitHub Pages is not the production host and must not claim `dante-martin.com` as a custom domain.
- Because this repository is named `dante32683.github.io`, GitHub may also publish the same files at that user-site URL. Treat it only as an incidental mirror, never as the production domain.
- Do not add a repository `CNAME` file or GitHub Pages A/AAAA records for the production domain.

## Making Changes

Before editing anything, please read **[STANDARDS.md](STANDARDS.md)** in full to maintain the specific, hype-free writing style and structural limits.

1. Create a dedicated branch for substantial changes (`git checkout -b <branch-name>`).
2. Edit the relevant semantic content in `index.html`.
3. Open `index.html` in a web browser to test locally.
4. Confirm the page renders correctly in both **light and dark modes** (using the theme toggle).
5. Run standard print-to-PDF previews to ensure layout prints cleanly.
6. Commit using **Conventional Commits** (`feat:`, `fix:`, `docs:`, `style:`, etc.) and push.
