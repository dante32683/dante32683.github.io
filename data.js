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
  tagline: "Civil engineering student | Engineering projects, software, and automation.",
  location: "Santa Rosa, California",

  /* Intro: two or three plain sentences. Say what you do and what you are
     after. No metaphors, no "passionate about", no em dashes. */
  intro: "I study civil engineering at Santa Rosa Junior College and build practical " +
    "tools and systems for engineering work. My projects range from hands-on design " +
    "and team operations to Windows software and automation.",

  /* Keep software authorship disclosure clear but secondary to the identity. */
  developmentNote: "For software projects, I use coding agents for most implementation. " +
    "I define the behavior and constraints, make architecture and product decisions, " +
    "research technical details, then review, test, debug, and maintain the result.",

  /* Contact links. Delete any line you do not want shown. */
  links: [
    { label: "Email",    href: "mailto:dziadymartin@gmail.com" },
    { label: "GitHub",   href: "https://github.com/dante32683" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dante-martin-722763279/" },
  ],

  /* Colophon: quiet static-site note in footer. */
  colophon: "Designed and maintained by Dante Martin",

  /* --- Sections render in the order listed below. ----------------------- */

  /* PROJECTS ------------------------------------------------------------- */
  projects: [
    {
      title: "CmdPal Extension Suite",
      subtitle: "PowerToys Command Palette extensions",
      org: "Personal project",
      dates: "2026",
      status: "Open source; last updated July 2026",
      featured: true,
      role: ["Product direction", "Architecture", "Testing & maintenance"],
      tech: ["C#", ".NET", "PowerToys Command Palette SDK"],
      method: "AI-assisted development",
      body: "Designed a suite of PowerToys Command Palette extensions to fill gaps in Windows workflows, including system controls, local NPU image tools, screenshot organization, clipboard utilities, and developer tools. The current codebase packages the extensions independently and is published as open source.",
      link: { label: "View source on GitHub", href: "https://github.com/dante32683/cmdpal-extension-suite" },
      images: [
        {
          src: "images/cmdpal-image-editor.webp",
          alt: "NPU Image Editor extension tool actions in PowerToys Command Palette",
          caption: "NPU Image Editor actions inside PowerToys Command Palette",
          width: 1920,
          height: 1179,
          loading: "eager",
          fetchPriority: "high",
        },
      ],
    },
    {
      title: "AHK Scripting",
      subtitle: "Personal desktop automation",
      org: "Personal project",
      dates: "Jan 2026 to present",
      status: "Maintained daily-use toolkit",
      featured: false,
      compactMeta: ["AutoHotkey v2", "Windows"],
      body: "Designed and maintain a daily-use AutoHotkey v2 toolkit for a dedicated Caps Lock shortcut layer, window tiling and focus navigation, virtual desktops, media controls, and other Windows automation.",
      link: { label: "View source on GitHub", href: "https://github.com/dante32683/ahk-scripting" },
    },
    {
      title: "Baja SAE",
      subtitle: "Member onboarding and team organization",
      org: "SRJC Baja SAE",
      dates: "June 2026 to present",
      status: "Active for Fall 2026",
      featured: true,
      role: ["Onboarding design", "Member organization", "Team operations", "Training systems"],
      tech: ["Canvas LMS"],
      body: "Built and maintain a centralized Canvas training system for SRJC Baja SAE with study guides, six randomized qualification quizzes, and supervisor-recorded practical checkoffs. I also support new-member onboarding and team organization, including Fall 2026 status planning and recruitment materials.",
      link: { label: "Visit SRJC Baja SAE", href: "https://srjcsaeclub.org" },
      images: [
        {
          src: "images/baja-canvas-modules.webp",
          alt: "Canvas module structure showing the sequence of manufacturing study guides, quizzes, and practical qualifications",
          caption: "Manufacturing training sequence organized in Canvas",
          width: 1024,
          height: 687,
        },
      ],
    },
    {
      title: "Project Pigeon",
      subtitle: "Wildfire-detection fixed-wing UAV",
      org: "The Engineering Club, SRJC",
      dates: "Sep 2025 to May 2026",
      status: "Archived after early design and partial build work",
      featured: true,
      role: [
        "Tail design",
        "Bill of materials",
        "Wing and thrust research",
        "Team leadership",
      ],
      body: "Worked on a student fixed-wing UAV concept for thermal wildfire and hotspot detection. I contributed to the tail design, bill of materials, wing configuration and thrust research, and team leadership. The project reached early design and partial build work, then stalled and was archived in May 2026.",
      link: { label: "View The Engineering Club at SRJC", href: "https://clubs.santarosa.edu/tec" },
      images: [
        {
          src: "images/pigeon-tail.webp",
          alt: "UAV V-tail and landing gear mount design detail",
          caption: "Team V-tail concept render from the early design phase; I contributed to the tail design",
          width: 1920,
          height: 842,
        },
      ],
    },
    {
      title: "Dog Protection Device",
      subtitle: "Foxtail grass seed canine face guard",
      org: "PLTW Design and Development",
      dates: "2024",
      status: "Completed",
      featured: false,
      compactMeta: ["Agile methodology", "Research", "Iterative prototyping"],
      body: "Completed a semester-long PLTW design project using Agile methods to research and iteratively prototype a breathable face guard intended to reduce foxtail grass-seed exposure in dogs. Tested airflow and incorporated veterinarian feedback into later prototypes.",
    },
  ],

  /* EXPERIENCE ----------------------------------------------------------- */
  experience: [
    {
      title: "STEM Success Center Lab Assistant",
      org: "Santa Rosa Junior College",
      dates: "Oct 2025 to present",
      body: "Provide drop-in tutoring in Calculus I-III, precalculus, lower-level mathematics, and introductory chemistry. Assist students with graphing calculator operation and program installation alongside general lab maintenance.",
      link: { label: "STEM Success Center", href: "https://stem.santarosa.edu/stem-success-center" },
    },
    {
      title: "Treasurer",
      org: "The Engineering Club, SRJC",
      dates: "Jan 2026 to May 2026",
      body: "Tracked available funds and spending, reviewed purchase requests, maintained records, and coordinated approvals with SRJC Student Life staff.",
      link: { label: "The Engineering Club", href: "https://clubs.santarosa.edu/tec" },
    },
  ],

  /* EDUCATION ------------------------------------------------------------ */
  education: [
    {
      school: "Santa Rosa Junior College",
      dates: "2023 to present",
      detail: "Civil Engineering transfer track | GPA 4.00 | Dean's Highest Honors, Fall 2025 and Spring 2026 | Web and Mobile Front-End Development certificate | Expected transfer: Fall 2027",
      coursework: [
        {
          label: "Current coursework",
          courses: "Differential Equations, Electricity & Magnetism, Statics, MATLAB for Engineers",
        },
        {
          label: "Selected completed coursework",
          courses: "Calculus I-III, Classical Mechanics, C++ Programming, General Chemistry, Web Development",
        },
      ],
    },
    {
      school: "Technology High School",
      dates: "Graduated 2025",
      detail: "4.37 GPA | Top 10 in class | STEM project-based curriculum",
    },
  ],

  /* RECOGNITION ---------------------------------------------------------- */
  honors: [
    {
      title: "Civil Engineering Transfer Scholarship",
      org: "ASCE Redwood Empire Branch",
      dates: "2025-26",
      href: "https://srjcstaff.santarosa.edu/~vbertsch/2026ASCE-SRJC-ScholarshipApp.pdf",
    },
    {
      title: "National Merit Commended Student",
      org: "National Merit Scholarship Corporation",
      dates: "2025",
      href: "https://www.nationalmerit.org/s/1758/interior.aspx?gid=2&pgid=1180&sid=1758",
    },
    {
      title: "AP Scholar with Distinction",
      org: "College Board",
      dates: "2025",
      href: "https://apstudents.collegeboard.org/awards-recognitions/ap-scholar-award",
    },
  ],

  /* CAPABILITIES - evidence-linked, interview-defensible claims. --------- */
  capabilities: [
    {
      category: "Engineering and design",
      items: [
        "Design research (Project Pigeon)",
        "Iterative prototyping and testing (dog protection device)",
        "Bill of materials development (Project Pigeon)",
      ],
    },
    {
      category: "Software and automation",
      items: [
        "Windows automation and workflow design (CmdPal, AHK toolkit)",
        "Git and GitHub fundamentals",
        "Bash / Linux command line",
        "Basic Python and C++",
      ],
    },
    {
      category: "Documentation and team operations",
      items: [
        "Training and onboarding systems (Baja SAE)",
        "Project documentation and team organization (Baja SAE, Project Pigeon)",
        "Technical tutoring and explanation (STEM Success Center)",
      ],
    },
    {
      category: "Currently learning",
      items: [
        "Python fluency for engineering work",
        "MATLAB through current coursework",
      ],
    },
  ],
};
