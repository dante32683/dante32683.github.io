# dante-martin.com

The source code for Dante Martin's personal website and portfolio. It is a lightweight static site deployed from this repository to Cloudflare Pages and served at `dante-martin.com`. The homepage remains the primary portfolio, with project-detail pages added only when a project has enough evidence to justify them.

## Core Design Principles

- **Static HTML First:** Every page contains its complete visible content before JavaScript runs. No compilers, transpilers, templating system, or bundlers.
- **Minimal Runtime Dependencies:** No CDN, web-font, or CSS/JS framework dependencies. Cloudflare Web Analytics is intentionally enabled at the edge for aggregate site-traffic and real-user performance measurement.
- **Progressive Enhancement:** JavaScript only handles the saved theme override, active-section highlighting, and image-preview dialog. The site remains readable and navigable without it.

## Project Structure

- `index.html` - **Homepage.** Complete semantic portfolio content plus small progressive-enhancement JavaScript.
- `projects/<slug>/index.html` - Static detail pages for projects that have enough technical evidence to justify a separate route.
- `styles.css` - High-contrast, minimal CSS styling using custom property themes (green color palette) with smooth transitions, native responsive queries, and dedicated print stylesheets.
- `STANDARDS.md` - Strict rules and writing guidelines governing formatting, content structures, and layout rules.
- `AGENTS.md` - Workspace instructions for AI coding assistants.

## Hosting

- **Production host:** Cloudflare Pages (`dante32683-github-io.pages.dev`).
- **Production domain:** `dante-martin.com`, attached to the Cloudflare Pages project through Cloudflare DNS.
- **Source:** this GitHub repository. Cloudflare Pages deploys the static files from `main`.
- GitHub Pages is intentionally unpublished. `https://dante32683.github.io/` should return GitHub's 404 and must not claim `dante-martin.com` as a custom domain.
- Do not add a repository `CNAME` file or GitHub Pages A/AAAA records for the production domain.

## Making Changes

Before editing anything, please read **[STANDARDS.md](STANDARDS.md)** in full to maintain the specific, hype-free writing style and structural limits.

1. Create a dedicated branch for substantial changes (`git checkout -b <branch-name>`).
2. Edit the relevant semantic HTML directly in `index.html` or the matching `projects/<slug>/index.html`.
3. Open the relevant HTML file directly, or double-click `preview-site.cmd` on Windows to serve the repository locally and open the Baja project page.
4. Confirm the page renders correctly in both **light and dark modes** (using the theme toggle).
5. Run standard print-to-PDF previews to ensure layout prints cleanly.
6. Commit using **Conventional Commits** (`feat:`, `fix:`, `docs:`, `style:`, etc.). Push only when the change is ready to publish.
