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
          caption: "NPU Image Editor extension in PowerToys Command Palette",
        },
        {
          src: "images/cmdpal-organize.webp",
          alt: "NPU Organize screenshot utility in PowerToys Command Palette",
          caption: "NPU Organize screenshot utility and file actions",
        },
        {
          src: "images/cmdpal-code.webp",
          alt: "NPU Developer Dev Toolbox code utility in PowerToys Command Palette",
          caption: "Developer Dev Toolbox utility in Command Palette",
        },
        {
          src: "images/cmdpal-settings-1.webp",
          alt: "Action Center, Awake, and Clipboard extension settings toggles",
          caption: "Extension suite configuration and toggle settings",
        },
      ],
    },
    {
      title: "AHK Scripting",
      subtitle: "Personal desktop layout and hotkey automation",
      org: "Personal project",
      dates: "ongoing",
      featured: false,
      role: ["Workflow design", "Custom keybindings", "Iteration"],
      tech: ["AutoHotkey v2", "Windows"],
      method: "AI-assisted scripting",
      body: "Designed a daily-driver desktop automation workflow featuring a CapsLock navigation layer, multi-monitor window tiling, and virtual desktop management.",
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
          caption: "Shop safety qualification quiz interface in Canvas",
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
      org: "Technology High School",
      dates: "Jan 2024 to May 2024",
      featured: false,
      role: ["CAD modeling", "Rapid prototyping", "Airflow testing", "Veterinarian outreach"],
      tech: ["CAD", "3D Printing"],
      body: "Prototyped a breathable mesh face guard to protect dogs from foxtail grass seed injuries. Conducted airflow testing, gathered veterinarian feedback, and iterated 3D-printed collar attachment mechanisms.",
      images: [
        {
          src: "images/foxtail-microscope.webp",
          alt: "Microscope view of a foxtail seed highlighting backward-pointing barbs",
          caption: "Microscope view of barbed foxtail seed structure",
        },
        {
          src: "images/foxtail-prototype-final.webp",
          alt: "Final prototype canine protective face guard with mesh enclosure and buckle",
          caption: "Final prototype canine protective face guard",
        },
        {
          src: "images/foxtail-prototype-initial.webp",
          alt: "Initial mesh face guard prototype with elastic opening",
          caption: "Initial prototype showing mesh and elastic fitting",
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
      dates: "2023 to present (Dual Enrollment 2023 to 2024)",
      detail: "Civil engineering transfer track. 4.0 GPA, Dean's Highest Honors. Earned Web & Mobile Front-End Development certificate in 2024. Planned transfer in Fall 2027.",
      // Selected coursework
      coursework: [
        {
          term: "In Progress (Fall 2026)",
          courses: "Differential Equations (Math 2), Electricity & Magnetism (Phys 42), Engineering Mechanics: Statics (Engr 34), MATLAB for Engineers (Engr 6)",
        },
        {
          term: "Completed Coursework",
          courses: "Calculus I–III (Math 1A, 1B, 1C), Classical Mechanics (Phys 40), C++ Programming (CS 10A), General Chemistry I & II with Lab (Chem 3A/AL, Chem 3B), Web & Mobile Development Sequence (CS 50A/B/C)",
        },
      ],
    },
    {
      school: "Technology High School",
      dates: "Graduated 2025",
      detail: "GPA: 4.37. Graduated in top ten of class. STEM magnet school with project-based engineering curriculum (PLTW) and team design capstones.",
    },
  ],

  /* HONORS - structured entries, no emoji, no em dashes. ----------------- */
  honors: [
    {
      title: "Civil Engineering Transfer Scholarship",
      org: "ASCE Redwood Empire Branch",
      dates: "2025 to 2026",
      body: "Won the Redwood Empire branch scholarship to fund my civil engineering transfer track.",
    },
    {
      title: "National Merit Commended Scholar",
      org: "National Merit Scholarship Corporation",
      dates: "2025",
      body: "Placed in the top 50,000 scorers nationwide out of 1.5 million students on the qualifying PSAT/NMSQT exam.",
    },
    {
      title: "AP Scholar with Distinction",
      org: "College Board",
      dates: "2025",
      body: "Scored 5 on six of eight AP exams, maintaining a score average above 3.5 across all subjects.",
    },
    {
      title: "Golden State Seal Merit Diploma",
      org: "Tech High School",
      dates: "2025",
      body: "Graduated in the top ten of my class, qualifying with high scores on California state math, science, and history exams.",
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
