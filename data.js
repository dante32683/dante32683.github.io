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
    "software and engineering projects alongside my coursework. I use AI " +
    "coding agents extensively for software implementation while focusing on " +
    "project direction, architecture, behavior, technical research, testing, " +
    "and iteration.",

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
      role: "Product direction, architecture, API research, testing & maintenance",
      tech: ["C#", ".NET", "PowerToys Command Palette SDK"],
      method: "AI-assisted development",
      body: "Designed a suite of Windows PowerToys Command Palette extensions to add missing system controls and local NPU utilities, including an image editor and developer tools, published as open source on GitHub.",
      link: { label: "Source", href: "https://github.com/dante32683/cmdpal-extension-suite" },
      images: [
        { src: "images/cmdpal-image-editor.webp", alt: "NPU Image Editor extension tool actions in PowerToys Run" },
        { src: "images/cmdpal-organize.webp", alt: "NPU Organize screenshot utility in PowerToys Run" },
        { src: "images/cmdpal-obsidian.webp", alt: "NPU Obsidian notebook vault tools in PowerToys Run" },
        { src: "images/cmdpal-code.webp", alt: "NPU Developer Dev Toolbox code utility in PowerToys Run" },
        { src: "images/cmdpal-settings-1.webp", alt: "Action Center, Awake, and Clipboard extension settings toggles" },
        { src: "images/cmdpal-settings-2.webp", alt: "Obsidian, Time Date, Media Controls, and Dev Toolbox extension settings" }
      ],
    },
    {
      title: "AHK Scripting",
      subtitle: "Personal desktop layout and hotkey automation",
      org: "Personal project",
      dates: "ongoing",
      featured: false,
      role: "Workflow design, custom keybindings, iteration",
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
      role: "Onboarding design, member assignments, training systems",
      tech: ["Canvas LMS", "Training Design", "Team Operations"],
      body: "Organize onboarding material and member assignments for the racing team. " +
        "Built a centralized Canvas training system with study guides, quiz pools, and practical qualification checkoffs to streamline member manufacturing training.",
      link: { label: "SRJC Baja SAE", href: "https://srjcsaeclub.org" },
      images: [
        { src: "images/baja-chassis.webp", alt: "SRJC Baja SAE steel spaceframe chassis" },
        { src: "images/baja-highlights.webp", alt: "SRJC Baja SAE spaceframe with highlighted members" }
      ],
    },
    {
      title: "Project Pigeon",
      subtitle: "Wildfire-detection fixed-wing UAV",
      org: "The Engineering Club, SRJC",
      dates: "Sep 2025 to May 2026",
      featured: true,
      role: "V-tail CAD modeling, BOM compilation, wing/thrust sizing research, team leadership",
      tech: ["SolidWorks", "ArduPilot", "Aerodynamics"],
      body: "Co-designed a 1.5 m wingspan wildfire-detection UAV prototype. " +
        "Modeled the V-tail and landing gear assemblies in SolidWorks, researched wing sizing and thrust requirements, assembled the bill of materials, and helped lead the team.",
      link: { label: "The Engineering Club", href: "https://srjcsaeclub.org" },
      images: [
        { src: "images/pigeon-uav.webp", alt: "UAV fuselage 3D CAD modeling view" },
        { src: "images/pigeon-tail.webp", alt: "UAV V-tail and landing gear mount CAD close-up view" },
        { src: "images/pigeon-motor.webp", alt: "Testing brushless motor weight on digital scale (1186g)" }
      ],
    },
    {
      title: "Dog Protection Device",
      subtitle: "Foxtail grass seed canine face guard",
      org: "Technology High School",
      dates: "Jan 2024 to May 2024",
      featured: false,
      role: "CAD modeling, rapid prototyping, airflow testing, veterinarian outreach",
      tech: ["CAD", "3D Printing"],
      body: "Prototyped a breathable mesh face guard to protect dogs from foxtail grass seed injuries. Conducted airflow testing, gathered veterinarian feedback, and iterated 3D-printed collar attachment mechanisms.",
      images: [
        { src: "images/foxtail-microscope.webp", alt: "Microscope view of a foxtail seed highlighting the backward-pointing barbs that pose an injury risk to dogs" },
        { src: "images/foxtail-prototype-final.webp", alt: "Final prototype of the canine protective face guard showing mesh enclosure and adjustable straps with buckle" },
        { src: "images/foxtail-prototype-initial.webp", alt: "Initial mesh face guard prototype detailing the elastic opening and edge stitching" }
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

  /* SKILLS - categorized with explicit type indicators. ------------------ */
  skills: [
    {
      category: "Practical Tools & Environments",
      type: "working",
      items: ["Git & GitHub fundamentals", "Linux CLI & navigation", "Windows setup & troubleshooting", "Excel"],
    },
    {
      category: "Foundational Programming",
      type: "foundational",
      items: ["Python (Basic)", "C++ (Basic)", "Prior HTML/CSS coursework", "Prior JavaScript coursework"],
    },
    {
      category: "AI-Assisted Development",
      type: "workflow",
      items: [
        "Problem definition",
        "Architecture & task breakdown",
        "AI coding-agent workflows",
        "Technical API research",
        "Testing & debugging",
        "Implementation review & maintenance",
      ],
    },
    {
      category: "Currently Learning",
      type: "learning",
      items: ["MATLAB", "FEA / ANSYS"],
    },
  ],
};
