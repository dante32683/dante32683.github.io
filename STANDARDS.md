# Standards - dante-martin.com

Read this whole file before you change anything. It is short on purpose.

This site is a single static page hosted on GitHub Pages. There is **no build
step**: the files in this repo are exactly what the browser loads. If you edit a
file and push, the live site changes.

---

## The one rule that matters most

**To change what the site SAYS, edit `data.js` and nothing else.**

`data.js` holds all the content as one object called `DATA`. The page builds
itself from that object. You almost never need to open the other files.

To add an item (a project, a course, a skill):

1. Open `data.js`.
2. Find the right list.
3. Copy an entry that is already there.
4. Paste it directly below the one you copied. **Newest goes first.**
5. Edit the text in your pasted copy.
6. Make sure it still ends with a comma.

If a field does not apply to your new item, **delete that whole line**. Empty
fields are skipped - they will not show a blank label or break the layout.

---

## The files, and when to touch each

| File | What it is | Touch it when… |
|------|------------|----------------|
| `data.js` | All content. | You change any words, add/remove an entry. **This is the normal one.** |
| `styles.css` | All styling. | You want to change colours, spacing, fonts. |
| `index.html` | Page shell + the renderer that turns `DATA` into HTML. | You add a brand-new *kind* of section. Rare. |
| `STANDARDS.md` | General project rules & standards. | The rules change. |
| `README.md` | Public repository documentation. | You want to update repo guidelines or project overview. |
| `.gitignore` | Git file exclusions. | You need to exclude new temp or IDE files. |
| `AGENTS.md` | Rules and prompts for AI coding assistants. | You want to adjust instructions for AI agents. |
| `CNAME` | The custom domain. | **Never**, unless the domain changes. |

Do not move content into `index.html`. Do not add a second stylesheet. Do not
add a framework, a CDN link, a font import, or a build tool. The whole point is
that one person with a text editor can maintain this.

---

## Recipes

**Add a featured project** - in `data.js`, copy an existing featured entry in `projects` and edit:

```js
{
  title: "Short name",
  subtitle: "What it is",                            // optional, shown lighter
  org: "Where it happened",
  dates: "Sep 2026 to present",
  featured: true,                                    // true for full featured cards
  role: ["Product direction", "Architecture"],       // what you personally did and decided
  tech: ["C#", ".NET", "PowerToys Command Palette SDK"], // project dependencies, not personal skill claims
  method: "AI-assisted development",                 // optional, rendered inline quietly
  body: "One paragraph. Concrete details, what the system does, and what YOU did.",
  link: { label: "Source", href: "https://..." },   // delete this line if none
  images: [                                          // optional image gallery
    {
      src: "images/example.webp",
      alt: "Descriptive alt text for accessibility and lightbox",
      caption: "Optional context or attribution caption shown below thumbnail",
    },
  ],
},
```

**Add a compact project (Other Work)** - for secondary work, set `featured: false` and keep metadata concise (no separate role/tech/method rows):

```js
{
  title: "Short name",
  subtitle: "What it is",
  org: "Personal project",
  dates: "ongoing",
  featured: false,
  compactMeta: ["AutoHotkey v2", "Windows"],        // short inline tools list
  body: "One concise paragraph explaining the project and your role.",
  link: { label: "Source", href: "https://..." },
  images: [                                          // max 2 images for compact entries
    {
      src: "images/example.webp",
      alt: "Descriptive alt text",
      caption: "Short caption",
    },
  ],
},
```

The sidebar navigation builds itself from whichever sections have content, so
you do not add nav links by hand.

**Add experience** - same shape as projects, in the `experience` list.

**Add education** - add an object to `education`:

```js
{
  school: "Santa Rosa Junior College",
  dates: "2023–present",
  detail: "Civil Engineering transfer track · 4.0 GPA · Dean’s Highest Honors",
  coursework: [
    { label: "Current coursework", courses: "Differential Equations, Statics, MATLAB" },
    { label: "Selected completed coursework", courses: "Calculus I–III, Physics 40, CS 10A" },
  ],
},
```

**Add an honor** - in `data.js`, add a concise row to `honors` (title, optional org, year):

```js
{
  title: "Honor name",
  org: "Awarding organization",
  dates: "2025",
},
```

**Add a skill group** - add an object to the `skills` array:

```js
{
  category: "Group Name",
  items: ["Skill 1", "Skill 2", "Skill 3"],
}
```

**Re-colour the site** - in `styles.css`, change the variables in the `:root`
block at the top. You should not need to edit anything below that block for a
palette change. Dark-mode colours are in the `@media (prefers-color-scheme:
dark)` block right under it - update both.

---

## Writing style & attribution rules

The fastest way to make this site look fake is to write like a chatbot or overstate personal technical authorship.

### Attribution standards (getting credit honestly)
- **Separate personal role from project technology:** Just because a project uses C#, AutoHotkey, or Rust does NOT mean those are personal programming proficiencies. List them under `tech` on the project card, never under personal skills unless you can code in them independently.
- **Disclose AI use once, clearly:** State the AI-assisted workflow in the bio/intro and use the `method` field on project cards. Do not repeatedly apologize for or mention AI in every prose paragraph.
- **Allowed verbs:** "Built / developed" (when you owned the idea, direction, testing, iteration, and result), "Designed" (for architecture, UX, workflows, or CAD), "Tested, maintained, evaluated, integrated, researched" (when factually true).
- **Forbidden claims:** Do not say "I wrote the C# code", "I coded...", or claim language mastery for languages you cannot independently program in without AI.

### General writing rules
- **Be specific. Use numbers and names.** "1.5 m wingspan, NACA 4412 airfoil"
  beats "an innovative aerodynamic design." "$10,000 enrichment fund" beats
  "significant club funds."
- **Say what YOU did**, not what the team or the field does in general.
- **No emoji. Anywhere.** Not in content, not in headings.
- **No em dashes ( - ).** They are a strong AI tell. Use a comma, a period, a
  colon, or parentheses instead. Rephrase the sentence if you have to.
- **Ban these words and their cousins:** passionate, innovative, cutting-edge,
  leverage, synergy, seamless, robust, dynamic, "the intersection of",
  "I'm excited to", "always eager to learn", "wearing many hats."
- **One paragraph per entry.** If you need two, the entry is doing too much.
- **Plain verbs.** "I wrote the design docs." "We run two accounts." Not
  "spearheaded" or "orchestrated."
- **No exclamation marks.** No rhetorical questions.

If a sentence could appear on anyone's portfolio, it is too vague. Cut it or
make it concrete.

---

## Hard limits

- No external requests: no CDNs, no web fonts, no analytics, no trackers.
- No JavaScript libraries. The renderer in `index.html` is plain JS and stays
  that way.
- Keep each entry's `body` to roughly 45 words or less.
- Test before you push: open `index.html` in a browser and confirm it renders
  in both light and dark mode (toggle your OS theme), with no blank labels and
  no console errors.

---

## Code conventions

You rarely touch `index.html` or `styles.css`, but when you do, match what is
already there. These are not new rules; they describe how the existing code is
written.

**JavaScript (the renderer in `index.html`)**

- **Escape every value that comes from `data.js`.** Wrap it in `escapeHtml(...)` before
  it reaches the DOM. The only exception is text you wrote literally in the
  renderer itself.
- **Build DOM with the helpers**, not raw HTML strings: `createHtmlElement(tagName, className, innerHtml)`
  for elements, `createAnchorElement(hyperlinkReference, linkText)` for links. Do not reach for a templating
  library or `innerHTML +=`.
- **Use self-documenting variable and function names.** All variable, parameter, and function names must be fully descriptive of their purpose and role (e.g. `escapeHtml` instead of `esc`, `createHtmlElement` instead of `el`, `createAnchorElement` instead of `anchor`, `portfolioEntry` instead of `item`). Do not abbreviate names for memory or typing convenience.
- **Skip empty fields, never render blanks.** Guard every optional field with
  `if (portfolioEntry.field)` so a half-filled entry can never show an empty label. This
  is what lets `data.js` editors delete any line that does not apply.
- **External links get `target="_blank"` and `rel="noopener noreferrer"`.**
  `createAnchorElement()` already does this for `http(s)` links; rely on it.
- Plain ES5/ES6, no transpiler. `const`/`let`, arrow functions, and
  `addEventListener` are fine; anything needing a build step is not.

**CSS (`styles.css`)**

- **All colour, sizing, and font choices come from the `:root` variables.** Use
  `var(--accent)` and friends; do not hard-code a hex value in a rule.
- **Dark mode is defined twice** (the `prefers-color-scheme` block and the
  `[data-theme="dark"]` block) and the two value lists must stay identical. If
  you add a variable or a dark override, update both.
- **One accent colour, used sparingly** (links, rules, active nav). Keep the
  high-contrast, near-white/near-black look and the rough 60-30-10 split.
- Group related rules under the existing `/* --- SECTION --- */` banners.
  Use `rem` units and the `0.15s` transition timing the rest of the file uses.
- Anything interactive needs a visible `:focus-visible` outline. Keep the print
  block working: it hides the nav and toggle and prints in black on white.

---

## Git workflow and commit messages

### 1. Branching
**Always create a new branch before doing any substantial work.** Do not commit substantial changes directly to `main`.
```bash
git checkout -b <branch-name>
```

### 2. Conventional commits
Always use **Conventional Commits** format for commit messages (`type: short description` or `type(scope): short description`):
- `feat:` new feature or content section
- `fix:` bug fix or correction
- `docs:` documentation or standards updates
- `style:` visual styling, CSS adjustments, or theme changes
- `refactor:` code restructuring without changing behavior
- `chore:` maintenance, repo configuration, or cleanup

Examples:
```
feat(content): update project entries to reflect AI-assisted workflow
style(theme): adjust accent contrast ratio for dark mode
docs(standards): document conventional commits and branching rules
fix(nav): correct active section highlight on mobile viewport
```
Keep commits atomic (one logical change per commit). Provide an optional body only when additional context or rationale is needed.
