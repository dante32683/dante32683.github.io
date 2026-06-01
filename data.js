/* =============================================================================
   data.js - ALL site content lives here. This is the only file you edit to
   add or change what the page says. Structure and styling live elsewhere
   (index.html, styles.css) and rarely need touching.

   HOW TO EDIT (read this before changing anything):
   - To add an item, copy an existing entry in the same list, paste it directly
     below, and edit the text. Newest goes FIRST in each list.
   - Keep the keys (the words before the colon) exactly as they are.
   - Every entry must end with a comma.
   - If a field does not apply, delete that whole line. Empty fields are
     skipped automatically and nothing breaks.
   - Read STANDARDS.md for the writing rules (no hype words, no emoji,
     no em dashes, be specific). Those rules keep this site from reading like
     it was written by an AI.
   ========================================================================== */

const DATA = {

  /* --- Identity: shown in the sidebar and the browser tab. -------------- */
  name: "Dante Martin",
  tagline: "Civil engineering student who writes the tools the project needs.",
  location: "Santa Rosa, California",

  /* Intro: two or three plain sentences. Say what you do and what you are
     after. No metaphors, no "passionate about", no em dashes. */
  intro: "I study civil engineering at Santa Rosa Junior College and plan to " +
    "transfer in 2027. Most of my time goes to student engineering projects: a " +
    "wildfire-detection UAV, a Baja race car, and the club's books. When a " +
    "project needs a tool that does not exist yet, I write it.",

  /* Contact links. Delete any line you do not want shown. */
  links: [
    { label: "Email",    href: "mailto:dziadymartin@gmail.com" },
    { label: "GitHub",   href: "https://github.com/dante32683" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dante-martin-722763279/" },
  ],

  /* --- Sections render in the order listed below. ----------------------- */

  /* PROJECTS ------------------------------------------------------------- */
  projects: [
    {
      title: "Project Pigeon",
      subtitle: "Wildfire-detection UAV",   // optional; shown lighter after the title
      org: "The Engineering Club, SRJC",
      dates: "Sep 2025 to present",
      // One paragraph. What it is, the concrete specs, what you did.
      body: "A fixed-wing UAV meant to spot wildfires early. 1.5 m wingspan, " +
        "NACA 4412 airfoil, V-tail, ArduPilot flight controller. Airframe is " +
        "LW-PLA with carbon spars. I wrote the design docs, ran the bill of " +
        "materials, and tuned ArduPlane.",
      link: { label: "The Engineering Club", href: "https://srjcsaeclub.org" },
    },
    {
      title: "Baja SAE",
      subtitle: "Simulations subteam",
      org: "SRJC Baja SAE",
      dates: "joining summer 2026",
      body: "SRJC's Baja team designs, builds, and races an off-road car every " +
        "year. I am joining the simulations subteam to run FEA and CFD on parts " +
        "before anyone cuts or welds them.",
    },
    {
      title: "TEC Treasurer",
      subtitle: "Club finances",
      org: "The Engineering Club, SRJC",
      dates: "spring 2026 to present",
      body: "Co-treasurer with Kai Montalbano. We run two accounts, a $1,004 " +
        "trust account and a $10,000 enrichment fund, handling reimbursements " +
        "and purchase approvals through SRJC Student Life and the Foundation.",
    },
    {
      title: "CmdPal Extension Suite",
      subtitle: "C# / .NET",
      org: "Personal project",
      dates: "2026",
      body: "Fifteen-plus extensions for the PowerToys Command Palette, ported " +
        "from an older Raycast set: an action center, a clock and timer dock, " +
        "media controls, image and text tools, notes, clipboard history, and a " +
        "developer toolbox. Built against a fork of Microsoft's PowerToys SDK.",
      link: { label: "Source", href: "https://github.com/dante32683/cmdpal-extension-suite" },
    },
    {
      title: "AHK Scripting",
      subtitle: "Windows automation",
      org: "Personal project",
      dates: "ongoing",
      body: "My daily-driver automation set: a CapsLock hotkey layer, window " +
        "tiling, a virtual-desktop manager, a camera toggle, and autocorrect. " +
        "Runs the same on my laptop and desktop.",
      link: { label: "Source", href: "https://github.com/dante32683/ahk-scripting" },
    },
  ],

  /* EXPERIENCE ----------------------------------------------------------- */
  experience: [
    {
      title: "STEM Lab Assistant",
      org: "SRJC STEM Success Center",
      dates: "Oct 2025 to present",
      body: "Tutoring and lab support in chemistry, math, physics, and intro " +
        "programming, under coordinator Ann Schott.",
    },
  ],

  /* EDUCATION ------------------------------------------------------------ */
  education: {
    school: "Santa Rosa Junior College",
    detail: "Civil engineering, transfer track. 4.0 GPA, Dean's Highest Honors " +
      "in Fall 2025. Transferring Fall 2027, with Berkeley as the first choice, " +
      "Davis as the TAG safety, and Stanford the reach.",
    // Coursework table, newest at the bottom so it reads as a timeline.
    coursework: [
      { term: "Fall 2025",   courses: "Chem 3A, Math 1B, Comm C1000" },
      { term: "Spring 2026", courses: "Chem 3B, Math 1C, CS 10A (C++), ENGL C1001" },
      { term: "Summer 2026", courses: "Phys 40 (Mechanics), Ethnic Studies 20" },
      { term: "Fall 2026",   courses: "Phys 42, Math 2 (Diff Eq), Engr 6 (MATLAB), Engr 34 (Statics)" },
      { term: "Spring 2027", courses: "Math 5 (Linear Algebra), Phys 41, CS 10B or Engr 45" },
    ],
  },

  /* HONORS - plain lines, no scores or badges, no em dashes. ------------- */
  honors: [
    "AP Scholar with Distinction, and National Merit Commended",
    "Graduated top ten of class with a Golden State Seal Merit Diploma, Tech High School",
    "Eight AP exams, six scored 5",
  ],

  /* SKILLS - grouped. Put what you actually use under "working"; put what
     you are picking up under "learning". Be honest about the split. ------ */
  skills: {
    working:  ["C++", "C# / .NET", "HTML, CSS, JavaScript", "AutoHotkey v2", "Excel", "Git"],
    learning: ["Python", "MATLAB", "ANSYS", "AutoCAD", "Revit", "Rhino + Grasshopper", "3D printing"],
  },
};
