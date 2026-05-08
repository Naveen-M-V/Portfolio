export type Project = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  features: string[];
  tech: string[];
  role: string[];
  impact: string[];
  challenges: string[];
  insight: string;
  demo?: {
    images: string[];
    video?: string;
  };
};

export type AdditionalExperienceItem = {
  title: string;
  role?: string;
  description: string;
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "How I Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "additional", label: "Beyond Code" },
  { id: "contact", label: "Contact" },
] as const;

export const projects: Project[] = [
  {
    slug: "hrms-system",
    title: "Human Resource Management System (HRMS)",
    description:
      "A scalable HR platform designed to manage employees, approvals, internal workflows, and organizational operations through structured role-based systems.",

    overview:
      "Built a full-scale HR management platform focused on reducing operational friction across employee management, approvals, leave workflows, and internal processes. The system was designed to evolve alongside changing organizational requirements.",

    features: [
      "Role-based dashboards for Admins, Managers, and Employees",
      "Employee profile and document management",
      "Leave, expense, and approval workflows",
      "Integrated E-learning and internal resource modules",
      "Workflow-driven operational structure",
    ],

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "Role-Based Access Control",
    ],

    role: [
      "Architected backend workflows and database structures",
      "Built scalable APIs and approval systems",
      "Refactored system structure as requirements evolved",
      "Handled role-based permissions and operational logic",
      "Worked across frontend and backend integration",
    ],

    impact: [
      "Reduced dependency on manual HR coordination",
      "Created structured approval flows across multiple roles",
      "Improved maintainability as the system expanded",
      "Built a flexible foundation for future organizational features",
    ],

    challenges: [
      "Managing constantly evolving requirements",
      "Maintaining scalability while features expanded rapidly",
      "Structuring clean backend architecture under real-world constraints",
    ],

    insight:
      "Real systems are rarely built in perfect conditions. Adaptability matters more than perfection.",

    demo: {
      images: [
        "/demo/hrms/admin.jpeg",
        "/demo/hrms/employee.jpeg",
        "/demo/hrms/leaveapproval.jpeg",
        "/demo/hrms/manager.jpeg",
      ],
    },
  },

  {
    slug: "flight-package-booking-platform",
    title: "Flight & Package Booking Platform",

    description:
      "A travel booking platform integrating flight APIs, package management, pricing workflows, and operational dashboards.",

    overview:
      "Built a booking platform that combined real-time flight integrations, travel package management, enquiry handling, and dynamic pricing workflows into a single operational system.",

    features: [
      "Flight booking through Almosafer API integration",
      "Travel package management system",
      "Customer enquiry and operational dashboard",
      "Coupon handling and pricing logic",
      "Admin workflow management",
    ],

    tech: [
      "Next.js",
      "Node.js",
      "Supabase",
      "REST APIs",
      "Pricing Engine",
    ],

    role: [
      "Integrated external flight APIs and handled booking data flow",
      "Designed backend booking and pricing workflows",
      "Structured admin operations dashboard",
      "Handled API edge cases and operational inconsistencies",
      "Worked on frontend-backend integration",
    ],

    impact: [
      "Simplified operational handling of travel bookings and packages",
      "Created a structured flow between customer enquiries and booking operations",
      "Made pricing and coupon systems easier to manage and extend",
    ],

    challenges: [
      "Handling inconsistent API responses and external dependencies",
      "Designing flexible pricing logic for multiple booking scenarios",
      "Managing real-world operational workflows and edge cases",
    ],

    insight:
      "Integrating APIs is easy. Designing systems that survive unreliable APIs is the real challenge.",

    demo: {
      images: [
        "/demo/flight/admindash.jpeg",
        "/demo/flight/adminenquiry.jpeg",
        "/demo/flight/customerdash.jpeg",
        "/demo/flight/customerenquiry.jpeg",
        "/demo/flight/home.jpeg",
        "/demo/flight/home2packages.jpeg",
      ],
    },
  },

  {
    slug: "event-hosting-ticket-booking-platform",
    title: "Event Hosting & Ticket Booking Platform",

    description:
      "A multi-role event platform designed for event hosting, approvals, operational workflows, and ticket management.",

    overview:
      "Designed and developed a role-driven event management platform where influencers, artists, providers, and admins could interact through structured approval and booking systems.",

    features: [
      "Multi-role user architecture",
      "Event creation and pricing system",
      "Admin approval workflows",
      "Ticket booking and management",
      "Operational dashboard flows",
    ],

    tech: [
      "React",
      "Node.js",
      "Express",
      "Supabase",
      "Role-Based Architecture",
    ],

    role: [
      "Designed the platform architecture for multiple user journeys",
      "Built event lifecycle and approval workflows",
      "Handled role-based interactions and permissions",
      "Structured scalable operational flows",
    ],

    impact: [
      "Created a clear operational structure between different user types",
      "Reduced friction in event approvals and booking workflows",
      "Built a scalable system capable of supporting expanding roles",
    ],

    challenges: [
      "Managing complexity caused by multiple user roles",
      "Designing scalable approval systems",
      "Maintaining clarity across complex user journeys",
    ],

    insight:
      "As user roles multiply, system complexity grows exponentially.",

    demo: {
      images: [
        "/demo/eventbooking/home.jpeg",
        "/demo/eventbooking/outlet.jpeg",
        "/demo/eventbooking/promoter.jpeg",
        "/demo/eventbooking/seller.jpeg",
      ],
    },
  },

  {
    slug: "nfc-tap-card-system",
    title: "NFC Tap Card System",

    description:
      "A digital NFC-based contact sharing system using tap cards, QR codes, and dynamic links.",

    overview:
      "Developed a lightweight digital identity system allowing users to instantly share contact details through NFC taps, QR codes, and dynamically generated links.",

    features: [
      "NFC-enabled digital contact cards",
      "QR code and dynamic link generation",
      "Cross-device contact sharing",
      "Downloadable contact functionality",
    ],

    tech: ["Next.js", "Node.js", "MongoDB", "NFC", "QR"],

    role: [
      "Developed frontend and backend system logic",
      "Implemented QR and dynamic link generation",
      "Built responsive user interaction flows",
      "Delivered production-ready functionality for client usage",
    ],

    impact: [
      "Simplified contact sharing across devices and platforms",
      "Created a smooth user experience around NFC and QR interactions",
      "Delivered a clean, client-ready digital product",
    ],

    challenges: [
      "Maintaining smooth UX across devices",
      "Handling real-world client expectations and revisions",
      "Ensuring reliability in a simple but interaction-heavy system",
    ],

    insight:
      "Even simple products require deep attention to user experience to feel reliable.",

    demo: {
      images: [
        "/demo/nfc/digitalcard.jpeg",
        "/demo/nfc/form.jpeg",
      ],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const skills = {
  languages: ["C", "C++", "Java", "JavaScript", "C#"],

  technologies: [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Supabase",
    "Unity",
  ],

  toolsAndConcepts: [
    "REST API Integration",
    "Role-Based Access Control",
    "System Architecture",
    "Database Modeling",
    "Workflow Design",
    "Backend Refactoring",
    "Git",
  ],
};

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Athryan Tech Solutions",
    period: "Sep 2025 – Present",

    points: [
      "Built full-stack systems using React, Node.js, and MongoDB under evolving client requirements",
      "Structured backend workflows for HR platforms, booking systems, and CMS tools",
      "Integrated third-party APIs and handled real-world operational edge cases",
      "Refactored backend architecture to improve maintainability and scalability",
      "Designed systems capable of adapting to unclear and shifting requirements",
    ],
  },

  {
    role: "Technical Lead",
    company: "ImmersiveMed Solutions",
    period: "2025 – Present",

    points: [
      "Leading development of VR-based healthcare simulations using Unity and C#",
      "Designing immersive medical learning and visualization environments",
      "Defining technical architecture and product direction for healthcare-focused VR systems",
      "Exploring the intersection of healthcare, simulation, and interactive learning",
    ],
  },

  {
    role: "Live Project Intern",
    company: "Vivnovation",
    period: "Aug 2025 – Oct 2025",

    points: [
      "Developed Unity-based 3D training modules for US healthcare workflow understanding",
      "Worked on insurance claim documentation using EMR data",
      "Structured and processed physician claim workflows",
      "Gained exposure to real-world healthcare operations and data systems",
    ],
  },
];

export const additionalExperience: AdditionalExperienceItem[] = [
  {
    title: "Biomedical Engineering",

    description:
      "Background in biomedical systems, physiology-driven thinking, and healthcare-focused problem solving.",
  },

  {
    title: "Minor in IoT",

    description:
      "Exposure to embedded systems, sensors, hardware integration, and connected system design.",
  },

  {
    title: "YI Yuva Event Coordinator",

    description:
      "Handled planning, coordination, execution, logistics, and team collaboration across events.",
  },
];

export const contact = {
  text: "If you're building something complex and need someone who can take ownership, adapt fast, and build systems that work beyond the prototype stage — let’s talk.",
};

export const personal = {
  name: "Naveen MV",

  title: "Full Stack Developer • Systems Builder",

  tagline: "I build systems that survive real-world chaos.",

  heroDescription:
    "I work on products where requirements shift, systems evolve, and clarity rarely exists from the start. From HR platforms and booking systems to immersive healthcare simulations, I build systems designed for real-world environments.",

  about: [
    "Most of my experience comes from building products in environments where requirements constantly evolve.",
    "I enjoy solving workflow, architecture, and system-level problems rather than simply building interfaces.",
    "I work across frontend and backend, focusing on systems that remain maintainable, scalable, and reliable under real-world pressure.",
    "Alongside web development, I’m building VR-based healthcare simulations through ImmersiveMed Solutions.",
    "I care deeply about ownership, adaptability, and building products that function beyond the demo stage.",
  ],

  email: "mvnaveen18@gmail.com",

  linkedin: "https://www.linkedin.com/in/naveen-mv-8432b3232",
};

export const workStyle = [
  "I build even when the roadmap is unclear",
  "I adapt quickly when systems and requirements change",
  "I focus on solving operational problems, not just writing code",
  "I think in workflows, scalability, and maintainability",
  "I take ownership instead of waiting for perfect instructions",
];