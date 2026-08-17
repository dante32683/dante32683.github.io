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
  tagline: "Civil engineering student building software and engineering projects.",
  location: "Santa Rosa, California",

  /* Intro: two or three plain sentences. Say what you do and what you are
     after. No metaphors, no "passionate about", no em dashes. */
  intro: "I study civil engineering at Santa Rosa Junior College and build " +
    "software and engineering projects alongside my coursework. I use coding " +
    "agents for most software implementation, then guide the design, research " +
    "the technical details, and test and revise the result until it works.",

  /* Contact links. Delete any line you do not want shown. */
  links: [
    { label: "Email",    href: "mailto:dziadymartin@gmail.com" },
    { label: "GitHub",   href: "https://github.com/dante32683" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dante-martin-722763279/" },
  ],

  /* Colophon: quiet static-site note in footer. */
  colophon: "Designed and maintained by Dante Martin · Dependency-free static site",

  /* --- Sections render in the order listed below. ----------------------- */

  /* PROJECTS ------------------------------------------------------------- */
  projects: [
    {
      title: "CmdPal Extension Suite",
      subtitle: "PowerToys Command Palette extensions",
      org: "Personal project",
      dates: "ongoing",
      featured: true,
      role: ["Product direction", "Architecture", "API research", "Testing & maintenance"],
      tech: ["C#", ".NET", "PowerToys Command Palette SDK"],
      method: "AI-assisted development",
      body: "Designed a suite of Windows PowerToys Command Palette extensions to add missing system controls and local NPU utilities, including an image editor and developer tools, published as open source on GitHub.",
      link: { label: "Source", href: "https://github.com/dante32683/cmdpal-extension-suite" },
      images: [
        {
          src: "images/cmdpal-image-editor.webp",
          alt: "NPU Image Editor extension tool actions in PowerToys Command Palette",
        },
        {
          src: "images/cmdpal-organize.webp",
          alt: "NPU Organize screenshot utility in PowerToys Command Palette",
        },
        {
          src: "images/cmdpal-code.webp",
          alt: "NPU Developer Dev Toolbox code utility in PowerToys Command Palette",
        },
        {
          src: "images/cmdpal-settings-1.webp",
          alt: "Action Center, Awake, and Clipboard extension settings toggles",
        },
      ],
    },
    {
      title: "AHK Scripting",
      subtitle: "Personal desktop automation",
      org: "Personal project",
      dates: "ongoing",
      featured: false,
      compactMeta: ["AutoHotkey v2", "Windows"],
      body: "Designed and maintain a daily-use automation system for hotkeys, window tiling, and virtual desktops using AI-assisted implementation.",
      link: { label: "Source", href: "https://github.com/dante32683/ahk-scripting" },
    },
    {
      title: "Baja SAE",
      subtitle: "Member onboarding and team organization",
      org: "SRJC Baja SAE",
      dates: "June 2026 to present",
      featured: true,
      role: ["Onboarding design", "Member organization", "Team operations", "Training systems"],
      tech: ["Canvas LMS"],
      body: "Organize onboarding material and member assignments for the racing team. " +
        "Built a centralized Canvas training system with study guides, quiz pools, and practical qualification checkoffs to streamline member manufacturing training.",
      link: { label: "SRJC Baja SAE", href: "https://srjcsaeclub.org" },
      images: [
        {
          src: "images/baja-canvas-modules.webp",
          alt: "Canvas module structure showing the sequence of manufacturing study guides, quizzes, and practical qualifications",
          caption: "Manufacturing training sequence organized in Canvas",
        },
        {
          src: "images/baja-canvas-quiz.webp",
          alt: "Canvas shop safety qualification quiz with randomized question pools",
        },
        {
          src: "images/baja-chassis.webp",
          alt: "SRJC Baja SAE steel spaceframe chassis",
          caption: "SRJC Baja SAE competition chassis shown for team context",
        },
      ],
    },
    {
      title: "Project Pigeon",
      subtitle: "Wildfire-detection fixed-wing UAV",
      org: "The Engineering Club, SRJC",
      dates: "Sep 2025 to May 2026",
      featured: true,
      role: [
        "Tail design",
        "Bill of materials",
        "Wing and thrust research",
        "Team leadership",
      ],
      body: "Contributed to the tail design, compiled the bill of materials, researched wing configuration and thrust requirements, and helped lead the student team through the early design process.",
      link: { label: "The Engineering Club", href: "https://srjcsaeclub.org" },
      images: [
        {
          src: "images/pigeon-uav.webp",
          alt: "Fixed-wing UAV fuselage design overview",
          caption: "Team design render shown for project context",
        },
        {
          src: "images/pigeon-tail.webp",
          alt: "UAV V-tail and landing gear mount design detail",
          caption: "Team-produced V-tail concept render shown for project context",
        },
        {
          src: "images/pigeon-motor.webp",
          alt: "Testing brushless motor weight on digital scale (1186g)",
          caption: "Team bench-test photo shown for project context",
        },
      ],
    },
    {
      title: "Dog Protection Device",
      subtitle: "Foxtail grass seed canine face guard",
      org: "High-school capstone",
      dates: "2024",
      featured: false,
      compactMeta: ["CAD", "3D printing"],
      body: "Prototyped a breathable mesh face guard, tested airflow, and revised the design using veterinarian feedback.",
      images: [
        {
          src: "images/foxtail-prototype-final.webp",
          alt: "Final prototype canine protective face guard with mesh enclosure and buckle",
          caption: "Final prototype",
        },
        {
          src: "images/foxtail-prototype-initial.webp",
          alt: "Initial mesh face guard prototype with elastic opening",
          caption: "Initial prototype",
        },
      ],
    },
  ],

  /* EXPERIENCE ----------------------------------------------------------- */
  experience: [
    {
      title: "STEM Success Center Lab Assistant",
      org: "Santa Rosa Junior College",
      dates: "Oct 2025 to present",
      body: "Provide drop-in tutoring in Calculus I–III, precalculus, lower-level mathematics, and introductory chemistry. Assist students with graphing calculator operation and program installation alongside general lab maintenance.",
      link: { label: "STEM Success Center", href: "https://stem.santarosa.edu/stem-success-center" },
    },
    {
      title: "Treasurer",
      org: "The Engineering Club, SRJC",
      dates: "Jan 2026 to May 2026",
      body: "Tracked available funds and spending, reviewed purchase requests, maintained records, and coordinated approvals with SRJC Student Life staff.",
      link: { label: "The Engineering Club", href: "https://srjcsaeclub.org" },
    },
  ],

  /* EDUCATION ------------------------------------------------------------ */
  education: [
    {
      school: "Santa Rosa Junior College",
      dates: "2023–present",
      detail: "Civil Engineering transfer track · 4.0 GPA · Dean’s Highest Honors · Front-End Development certificate · Transfer planned Fall 2027",
      coursework: [
        {
          label: "Current coursework",
          courses: "Differential Equations, Electricity & Magnetism, Statics, MATLAB for Engineers",
        },
        {
          label: "Selected completed coursework",
          courses: "Calculus I–III, Classical Mechanics, C++ Programming, General Chemistry, Web Development",
        },
      ],
    },
    {
      school: "Technology High School",
      dates: "Graduated 2025",
      detail: "4.37 GPA · Top 10 in class · STEM project-based curriculum",
    },
  ],

  /* HONORS --------------------------------------------------------------- */
  honors: [
    {
      title: "Civil Engineering Transfer Scholarship",
      org: "ASCE Redwood Empire Branch",
      dates: "2025–26",
    },
    {
      title: "National Merit Commended Scholar",
      dates: "2025",
    },
    {
      title: "AP Scholar with Distinction",
      dates: "2025",
    },
  ],

  /* SKILLS - plain, interview-defensible categories. --------------------- */
  skills: [
    {
      category: "Practical tools and environments",
      items: [
        "Git and GitHub fundamentals",
        "Linux command line",
        "Windows setup and troubleshooting",
        "Excel",
      ],
    },
    {
      category: "Foundational programming knowledge",
      items: [
        "Basic Python",
        "Basic C++",
        "Prior HTML/CSS coursework",
        "Prior JavaScript coursework",
      ],
    },
    {
      category: "AI-assisted development",
      items: [
        "Defining project behavior",
        "Breaking work into tasks",
        "Directing coding agents",
        "Researching APIs and constraints",
        "Testing and debugging",
        "Reviewing and maintaining generated code",
      ],
    },
    {
      category: "Currently learning",
      items: [
        "MATLAB",
        "FEA / ANSYS",
      ],
    },
  ],
};
