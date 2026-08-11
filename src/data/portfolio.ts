export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  role?: string;
  description: string;
  overview: string;
  features: string[];
  tech: string[];
  roleDetails?: string[];
  impact?: string[];
  challenges?: string[];
  insight?: string;
  demo?: {
    images: string[];
    video?: string;
  };
};

export type SecondaryProject = {
  slug: string;
  title: string;
  description: string;
  tech?: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export type WhatIDoItem = {
  title: string;
  skills: string[];
  description?: string;
};

export type AdditionalExperienceItem = {
  title: string;
  role?: string;
  description: string;
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "what-i-do", label: "What I Do" },
  { id: "featured-work", label: "Featured Work" },
  { id: "more-work", label: "More Work" },
  { id: "experience", label: "Experience" },
  { id: "arsenal", label: "Arsenal" },
  { id: "education", label: "Education" },
  { id: "beyond-code", label: "Beyond Code" },
  { id: "contact", label: "Contact" },
] as const;

export const personal = {
  name: "Naveen MV",
  title: "Full Stack Developer",
  tagline:
    "I build software end to end: architecture, databases, APIs, mobile apps, deployment, the whole chain. Right now I'm leading engineering on a fintech product running across Flutter, React, Node.js, and PostgreSQL.",
  email: "mvnaveen18@gmail.com",
  linkedin: "https://www.linkedin.com/in/naveen-mv-8432b3232",
  github: "https://github.com/mvnaveen18",
  resumeUrl: "#contact", // Can be pointed to /Naveen_MV_Resume.pdf
  about: [
    "I'm a full stack developer who cares more about what ships than what's on the slide.",
    "My work spans fintech, healthcare, HR, travel, events, and enterprise systems. Across most of these, I've been the one turning a vague requirement into a working system: architecture, frontend, backend, database, deployment, and everything in between.",
    "Right now that means Upsow, a B2B credit platform with buyer and seller apps, an admin system, real-time transaction flows, and the infrastructure that keeps it all running. Before software, I trained as a biomedical engineer, which is also why there's a VR anatomy project further down this page. It's not a detour. It's where I started.",
  ],
  aiPhilosophy:
    "I use AI to move faster on implementation, debugging, and research. Architecture, validation, and the decisions that actually matter stay with me.",
};

export const whatIDo: WhatIDoItem[] = [
  {
    title: "Full Stack Development",
    skills: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "Supabase"],
    description: "Building responsive interfaces and scalable backend systems designed for real-world reliability.",
  },
  {
    title: "Mobile Development",
    skills: ["Flutter", "Android", "iOS", "REST APIs", "WebSockets"],
    description: "Crafting cross-platform mobile applications with real-time data sync and smooth native UX.",
  },
  {
    title: "Backend & System Design",
    skills: ["API Architecture", "Authentication", "RBAC", "Database Design", "Rate Limiting", "Real-Time Systems"],
    description: "Designing structured relational databases, secure multi-role permission flows, and robust APIs.",
  },
  {
    title: "Deployment & DevOps",
    skills: ["Ubuntu", "PM2", "Nginx", "GitHub Actions", "CI/CD", "Docker", "Git"],
    description: "Configuring web servers, automated deployment pipelines, process managers, and containerization.",
  },
  {
    title: "Working with AI Tools",
    skills: ["Implementation Acceleration", "Debugging", "Research", "Architecture Retention", "Validation Ownership"],
    description: "I use AI to move faster on implementation, debugging, and research. Architecture, validation, and the decisions that actually matter stay with me.",
  },
];

export const featuredProjects: Project[] = [
  {
    slug: "upsow-b2b-credit-platform",
    title: "Upsow: B2B Credit Platform",
    role: "Lead Developer",
    description:
      "I lead engineering on a credit platform connecting buyers, sellers, admins, and financial partners. When the product involves real money, a schema mistake stops being an abstraction fairly quickly, which has a way of sharpening your attention to detail.",
    overview:
      "I own the mobile apps, backend services, database architecture, admin tooling, and the deployment pipeline. That covers buyer and seller onboarding, OTP-based flows, JWT authorization, credit and repayment logic, a relational data model built to actually hold up under real joins, migrations, indexing, real-time WebSocket messaging, and the less glamorous essentials: pagination, error handling, validation, rate limiting.",
    features: [
      "Buyer and seller onboarding with OTP-based flows & JWT authorization",
      "Credit limits, repayment logic, and real-time transaction processing",
      "Relational PostgreSQL data model built for high-performance joins and migrations",
      "Real-time WebSocket messaging and automated admin operations",
      "Production CI/CD, rate limiting, and robust error handling pipelines",
    ],
    tech: [
      "Flutter",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "WebSockets",
      "Redis",
      "PM2",
      "Nginx",
      "GitHub Actions",
    ],
    roleDetails: [
      "Architected backend microservices and PostgreSQL database schemas",
      "Developed Flutter mobile apps for buyers and sellers",
      "Built real-time transaction flows and admin control systems",
      "Configured production servers with Nginx, PM2, and GitHub Actions CI/CD",
    ],
    demo: {
      images: ["/demo/flight/admindash.jpeg", "/demo/flight/customerdash.jpeg"],
    },
  },

  {
    slug: "hrms-system",
    title: "HRMS: Production HR System",
    role: "Full Stack Developer",
    description:
      "Built and deployed an HR system that's genuinely in use: attendance, leave, overtime, performance reviews, approval chains, certificate generation.",
    overview:
      "I designed the role-based access model and manager approval flows, automated the scheduled jobs no one wants to run by hand, built responsive interfaces, and handled deployment and upkeep myself.",
    features: [
      "Role-based access model & multi-tier manager approval flows",
      "Automated background jobs and cron-scheduled operational flows",
      "Attendance, leave tracking, overtime, and performance reviews",
      "Automated certificate generation and document processing",
      "Full deployment, web server configuration, and self-hosted upkeep",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "PM2", "Nginx"],
    roleDetails: [
      "Designed role-based access control (RBAC) and permission matrices",
      "Automated backend scheduled jobs for attendance and leave cycles",
      "Built responsive management dashboards and automated PDF generator",
    ],
    demo: {
      images: ["/demo/hrms/admin.jpeg", "/demo/hrms/manager.jpeg", "/demo/hrms/employee.jpeg"],
    },
  },

  {
    slug: "nfc-digital-business-cards",
    title: "NFC Digital Business Cards: City Union Bank",
    role: "Full Stack Engineer",
    description:
      "Built an NFC-based digital business card platform, deployed at genuine enterprise scale: 5,000 physical cards issued for City Union Bank. This project is less about the stack and more about the fact that it held up in the field, at volume, for a bank, which tends to be a less forgiving environment than a staging server. I built the web platform behind it, including admin tools, digital profiles, QR/NFC interactions, and the bulk card management needed to issue and track cards at that scale without it turning into a support queue.",
    overview:
      "Enterprise-grade digital contact and card issuing platform powering 5,000 physical NFC cards for City Union Bank with real-time profile management and bulk issuance tooling.",
    features: [
      "5,000 physical cards issued and deployed at enterprise scale for City Union Bank",
      "Web platform with digital profile rendering and dynamic QR/NFC interactions",
      "Bulk card management and tracking tools built for minimal support overhead",
      "High-reliability backend surviving field volume and strict banking environments",
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "NFC", "QR Engine", "Bulk Issuance"],
    roleDetails: [
      "Engineered web application for physical card provisioning and dynamic profiles",
      "Handled high-concurrency bank interactions without failure",
      "Structured bulk CSV card creation and asset management workflows",
    ],
    demo: {
      images: ["/demo/nfc/digitalcard.jpeg", "/demo/nfc/form.jpeg"],
    },
  },

  {
    slug: "virtual-cadaver",
    title: "Virtual Cadaver: Immersive Anatomy Platform",
    role: "Sole Developer & XR Lead",
    description:
      "Built solo, this VR anatomy platform for medical education is where my biomedical background and my software work actually meet.",
    overview:
      "Covers nine anatomical systems with highlighting, labeling, isolation, manipulation, and pathological models. Reached TRL-4. If you want proof I can build outside a browser, this is it.",
    features: [
      "Covers nine complete anatomical systems with high-fidelity 3D medical models",
      "Real-time structure highlighting, labeling, isolation, and spatial manipulation",
      "Interactive pathological modeling for clinical simulation",
      "Reached Technology Readiness Level 4 (TRL-4) for medical education",
    ],
    tech: ["Unity", "C#", "XR", "Blender", "3D Medical Models"],
    roleDetails: [
      "Sole developer building 3D spatial UI and anatomical interaction engines in Unity",
      "Processed high-resolution medical DICOM/3D assets into real-time render models",
      "Integrated biomedical pathology models into interactive training modules",
    ],
    demo: {
      images: ["/demo/eventbooking/home.jpeg"],
    },
  },
];

export const projects = featuredProjects;

export function getProjectBySlug(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}

export const moreWork: SecondaryProject[] = [
  {
    slug: "halal-travels",
    title: "Halal Travels",
    description:
      "A flight booking platform integrating a third-party flight API, with retry handling, rate-limit management, and the operational plumbing that keeps bookings reliable.",
    tech: ["Next.js", "Node.js", "Almosafer API", "Supabase"],
  },
  {
    slug: "easy-entry",
    title: "EasyEntry",
    description:
      "An event ticketing platform with multi-role workflows, QR-based entry, coupons, checkout, and fee distribution logic.",
    tech: ["React", "Express", "Supabase", "QR Scanner"],
  },
  {
    slug: "simple-ops",
    title: "SimpleOps",
    description:
      "An internal ops dashboard built with Next.js and Supabase for streamlined business workflow management.",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Lead Developer",
    company: "Upsow",
    period: "2026 – Present",
    points: [
      "Leading full-stack development of a fintech product: Flutter apps, backend APIs, PostgreSQL infrastructure, admin systems, authentication, real-time communication, deployment, and the underlying architecture.",
      "Architected real-time WebSocket communication layer and transactional credit/repayment engine.",
      "Maintained production deployment pipelines using PM2, Nginx, Docker, and GitHub Actions.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Athryan Tech Solutions",
    period: "2025 – Present",
    points: [
      "Delivered 8+ production projects across fintech, HR, travel, events, campaigns, and enterprise systems.",
      "Frontend, backend, database design, third-party integrations, deployment, and enough time in production debugging to know what actually breaks in the real world versus what breaks in a demo.",
      "Engineered high-scale digital business card platform for City Union Bank (5,000 physical cards).",
    ],
  },
  {
    role: "CTO / Technical Lead",
    company: "ImmersiveMed Solutions",
    period: "2025 – Present",
    points: [
      "Leading technical development of immersive healthcare products, combining XR, 3D modeling, and biomedical engineering with software development.",
      "Architecting spatial computing medical simulations and virtual anatomy platforms.",
    ],
  },
];

export const technicalArsenal = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Flutter"],
  backend: ["Node.js", "Express", "REST APIs", "WebSockets"],
  databases: ["PostgreSQL", "MongoDB", "Supabase", "Redis"],
  languages: ["JavaScript", "TypeScript", "Dart", "Python", "C", "C++", "C#", "Java"],
  infrastructure: ["Linux", "Ubuntu", "PM2", "Nginx", "Docker", "GitHub Actions", "CI/CD", "Git"],
  xrAndEngineering: ["Unity", "Blender", "OpenCV", "MATLAB", "3D Slicer"],
};

export const education = {
  degree: "B.E. Biomedical Engineering",
  institution: "Dr. N.G.P. Institute of Technology, Coimbatore",
  metrics: "CGPA: 8.5 · Minor in Internet of Things",
  description:
    "I started in biomedical systems and embedded technology before moving into full-stack product engineering. The two fields are closer than they sound on paper.",
};

export const beyondCode = {
  writing:
    "Outside engineering, I write. Under the name House Zaven, I publish poetry and long-form pieces, and I'm building it into a proper personal brand, digital product included. It runs on a different rhythm than my dev work, but it comes from the same instinct: I like making things that reach people directly, whether that's through a line of code or a line of writing.",
  leadership:
    "I've also spent time on public speaking and leadership through Young Indians YUVA and Toastmasters, proof that I can hold a room even without a keyboard in front of me.",
};

export const contact = {
  heading: "Let's build something useful.",
  subtext: "Open to conversations around full-stack engineering, product development, fintech, and healthcare technology.",
  email: "mvnaveen18@gmail.com",
  linkedin: "https://www.linkedin.com/in/naveen-mv-8432b3232",
  github: "https://github.com/mvnaveen18",
};