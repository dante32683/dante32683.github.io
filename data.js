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
      title: "CmdPal Extension Suite",
      subtitle: "PowerToys command palette extensions",
      org: "Personal project",
      dates: "ongoing",
      featured: true,
      tools: ["C#", ".NET", "Git"],
      body: "To utilize local NPU processing and add missing utility tools to Windows PowerToys Run, " +
        "I built ten automation extensions against the SDK. These include an NPU-powered image editor, " +
        "clipboard tools, and developer toolboxes, published as open source on GitHub.",
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
      subtitle: "Keyboard hotkeys and desktop layout automation",
      org: "Personal project",
      dates: "ongoing",
      featured: false,
      tools: ["AutoHotkey", "Windows"],
      body: "Daily-driver automation scripting featuring a CapsLock hotkey layer, multi-monitor window tiling, custom virtual-desktop management, and autocorrect profiles.",
      link: { label: "Source", href: "https://github.com/dante32683/ahk-scripting" },
    },
    {
      title: "Baja SAE",
      subtitle: "Operations analysis and member allocation",
      org: "SRJC Baja SAE",
      dates: "starts June 2026",
      featured: true,
      tools: ["SolidWorks", "FEA", "Excel"],
      body: "Joining the off-road racing team to analyze workflow organization and member allocation. " +
        "I will focus on optimizing team operations while learning advanced CAD modeling and Finite Element " +
        "Analysis (FEA) alongside the spaceframe design and simulation subteams.",
      link: { label: "SRJC Baja SAE", href: "https://srjcsaeclub.org" },
      images: [
        { src: "images/baja-chassis.webp", alt: "Baja SAE steel spaceframe chassis CAD modeling render" },
        { src: "images/baja-highlights.webp", alt: "Baja SAE spaceframe CAD modeling highlighted members view" }
      ],
    },
    {
      title: "TEC Treasurer",
      subtitle: "Club finances and asset management",
      org: "The Engineering Club, SRJC",
      dates: "Jan 2026 to May 2026",
      featured: false,
      tools: ["Excel", "Accounting"],
      body: "Managed two club accounts representing a $1,004 trust account and a $10,000 enrichment fund, coordinating purchasing approvals through the SRJC Student Life department.",
      link: { label: "The Engineering Club", href: "https://srjcsaeclub.org" },
    },
    {
      title: "Project Pigeon",
      subtitle: "Wildfire-detection fixed-wing UAV",
      org: "The Engineering Club, SRJC",
      dates: "Sep 2025 to May 2026",
      featured: true,
      tools: ["SolidWorks", "ArduPilot", "Aerodynamics"],
      body: "Co-designed a 1.5 m wingspan wildfire-detection UAV featuring a NACA 4412 airfoil, V-tail, " +
        "and ArduPilot integration. I co-wrote the design documentation, compiled the bill of materials, " +
        "and designed the tail components during the prototyping phase.",
      link: { label: "The Engineering Club", href: "https://srjcsaeclub.org" },
      images: [
        { src: "images/pigeon-uav.webp", alt: "UAV fuselage 3D CAD modeling view" },
        { src: "images/pigeon-tail.webp", alt: "UAV V-tail and landing gear mount CAD close-up view" },
        { src: "images/pigeon-motor.webp", alt: "Testing brushless motor weight on digital scale (118.6g)" }
      ],
    },
    {
      title: "Dog Protection Device",
      subtitle: "Foxtail grass seed canine face guard",
      org: "Technology High School",
      dates: "Jan 2024 to May 2024",
      featured: false,
      tools: ["CAD", "3D Printing"],
      body: "Prototyped a protective mesh face guard to shield dogs from foxtail injuries, iterating adjustments, airflow metrics, and veterinary safety fits in a high school capstone.",
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
      title: "STEM Lab Assistant",
      org: "SRJC STEM Success Center",
      dates: "Oct 2025 to present",
      body: "Tutoring and lab support in chemistry, math, physics, and intro " +
        "programming, under coordinator Ann Schott.",
      link: { label: "STEM Success Center", href: "https://stem.santarosa.edu/stem-success-center" },
    },
  ],

  /* EDUCATION ------------------------------------------------------------ */
  education: [
    {
      school: "Santa Rosa Junior College",
      dates: "2023 to present (Dual Enrollment 2023 to 2024)",
      detail: "Civil engineering transfer track. 4.0 GPA, Dean's Highest Honors. " +
        "Earned a Web & Mobile Front-End Dev certificate in 2024. Conducted materials " +
        "tests on a UTM and chemical reaction trials. Targeting transfer in Fall 2027 to " +
        "UC Berkeley, UC Davis (TAG), or Stanford.",
      // Coursework table, reverse chronological order.
      coursework: [
        { term: "Spring 2027 (Planned)",         courses: "Math 5 (Linear Algebra), Phys 41, CS 10B or Engr 45" },
        { term: "Fall 2026 (Planned)",           courses: "Phys 42, Math 2 (Diff Eq), Engr 6 (MATLAB), Engr 34 (Statics)" },
        { term: "Summer 2026",                   courses: "Phys 40 (Mechanics), Ethnic Studies 20" },
        { term: "Spring 2026",                   courses: "Chem 3B, Math 1C, CS 10A (C++), ENGL C1001" },
        { term: "Fall 2025",                     courses: "Chem 3A & 3AL, Math 1B, Comm C1000" },
        { term: "Summer 2025",                   courses: "Engr 10, Art 1.2" },
        { term: "Dual Enrollment (2023 - 2024)", courses: "CS 50A (Web Dev 1), CS 50B (Web Dev 2), CS 50C (Web Dev 3), Psych 1A" },
      ],
    },
    {
      school: "Technology High School",
      dates: "Graduated 2025",
      detail: "GPA: 4.37. Graduated in the top ten of the class. STEM magnet school with a project-based, cross-curricular engineering focus (PLTW) and team design projects.",
    },
  ],

  /* HONORS - structured entries, no emoji, no em dashes. ----------------- */
  honors: [
    {
      title: "Civil Engineering Transfer Scholarship",
      org: "ASCE Redwood Empire Branch",
      dates: "2025 to 2026",
      body: "Selected as a scholarship recipient to support civil engineering transfer studies at Santa Rosa Junior College.",
    },
    {
      title: "AP Scholar with Distinction",
      org: "College Board",
      dates: "2025",
      body: "Awarded for scoring an average of at least 3.5 on all AP exams taken, with scores of 3 or higher on five or more exams. Scored 5 on six out of eight exams.",
    },
    {
      title: "National Merit Commended Scholar",
      org: "National Merit Scholarship Corporation",
      dates: "2025",
      body: "Recognized for placing in the top fifty thousand scorers nationwide out of over one million students taking the qualifying PSAT/NMSQT exam.",
    },
    {
      title: "Golden State Seal Merit Diploma",
      org: "Tech High School",
      dates: "2025",
      body: "Graduated in the top ten of the class, earning the merit diploma for high performance on state assessments in science, history, and mathematics.",
    },
  ],

  /* SKILLS - grouped. Put what you actually use under "working"; put what
     you are picking up under "learning". Be honest about the split. ------ */
  skills: {
    working:  ["JavaScript", "C++", "C# / .NET", "HTML / CSS", "AutoHotkey v2", "Excel", "Git"],
    learning: ["Python", "MATLAB", "ANSYS", "AutoCAD", "Revit", "3D printing"],
  },
};
