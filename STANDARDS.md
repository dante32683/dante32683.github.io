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

**Add a project** - in `data.js`, copy the first entry of `projects` and edit:

```js
{
  title: "Short name",
  subtitle: "What it is",                            // optional, shown lighter
  org: "Where it happened",
  dates: "Sep 2026 to present",
  body: "One paragraph. What it is, the concrete details, what YOU did.",
  link: { label: "Source", href: "https://..." },   // delete this line if none
},
```

The sidebar navigation builds itself from whichever sections have content, so
you do not add nav links by hand. Add a project and "Projects" stays in the
nav; remove every entry in a list and that section and its nav link disappear.

**Add experience** - same shape, in the `experience` list (no `link` needed).

**Add a course** - add a row to `education.coursework`. Oldest stays at the top,
newest at the bottom, so it reads as a timeline:

```js
{ term: "Fall 2026", courses: "Phys 42, Math 2, Engr 34" },
```

**Add an honor** - add one plain string to the `honors` list.

**Add a skill** - add a string to `skills.working` (things you actually use) or
`skills.learning` (things you are picking up). Be honest about which list.

**Re-colour the site** - in `styles.css`, change the variables in the `:root`
block at the top. You should not need to edit anything below that block for a
palette change. Dark-mode colours are in the `@media (prefers-color-scheme:
dark)` block right under it - update both.

---

## Writing style - this is what keeps the site from sounding AI-generated

The fastest way to make this site look fake is to write like a chatbot. Don't.

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
