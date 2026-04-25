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
  { id: "additional", label: "More" },
  { id: "contact", label: "Contact" },
] as const;

export const projects: Project[] = [
  {
    slug: "hrms-system",
    title: "Human Resource Management System (HRMS)",
    description:
      "A full-scale HR platform built to manage employees, approvals, and internal workflows through role-based access.",
    overview:
      "A full-scale HR management platform for employee operations, approvals, and internal workflows with structured role-based access.",
    features: [
      "Employee profile and document management",
      "Leave and expense approval workflows",
      "3-level dashboards (Admin / Manager / Employee)",
      "Integrated E-learning module",
    ],
    tech: ["Node.js", "Express", "React", "MongoDB", "Role-Based Access"],
    role: [
      "Built backend APIs and database models",
      "Structured role-based workflows for admins, managers, and employees",
      "Refactored the system to support changing requirements and real usage",
    ],
    impact: [
      "Reduced manual dependency in internal HR operations",
      "Gave teams a structured flow for approvals and employee data",
      "Made the backend easier to extend as requirements changed",
    ],
    challenges: [
      "Managed increasing system complexity due to evolving requirements",
      "Refactored backend structure to handle scalability",
      "Learned the importance of clean architecture and future-proof design",
    ],
    insight: "Designing for change matters more than designing for perfection.",
    demo: {
      images: ["/demo/hrms/admin.jpeg", "/demo/hrms/employee.jpeg", "/demo/hrms/leaveapproval.jpeg", "/demo/hrms/manager.jpeg"],
    },
  },
  {
    slug: "flight-package-booking-platform",
    title: "Flight & Package Booking Platform",
    description:
      "A travel booking system built around flight APIs, custom package handling, and booking workflows.",
    overview:
      "A travel booking system integrating real flight APIs and custom package management features.",
    features: [
      "Flight booking using Almosafer API",
      "Travel package management",
      "Customer enquiry dashboard",
      "Coupon and pricing logic",
    ],
    tech: ["Next.js", "Node.js", "REST APIs", "Supabase", "Pricing Engine"],
    role: [
      "Integrated external APIs and handled booking data",
      "Built backend booking workflows and pricing logic",
      "Structured the admin dashboard for operational use",
    ],
    impact: [
      "Created a clearer flow between flight data, packages, and customer requests",
      "Made booking operations easier to track from the admin side",
      "Supported a flexible system for pricing and coupon handling",
    ],
    challenges: [
      "Handled API inconsistencies and edge cases",
      "Designed flexible pricing and coupon logic",
      "Managed real-world booking workflows",
    ],
    insight: "Understanding API flow is more important than simply calling endpoints.",
    demo: {
      images: ["/demo/flight/admindash.jpeg", "/demo/flight/adminenquiry.jpeg", "/demo/flight/customerdash.jpeg", "/demo/flight/customerenquiry.jpeg", "/demo/flight/home.jpeg", "/demo/flight/home2packages.jpeg"],
    },
  },
  {
    slug: "event-hosting-ticket-booking-platform",
    title: "Event Hosting & Ticket Booking Platform",
    description:
      "A multi-role event platform for hosting, approval, and booking workflows.",
    overview:
      "A multi-role platform for hosting and managing events with structured approval and booking flows.",
    features: [
      "Multi-user roles (Admin, Influencer, Artist, Provider)",
      "Event creation with pricing",
      "Admin approval system",
      "Ticket booking system",
    ],
    tech: ["React", "Node.js", "Express", "Supabase", "System Architecture"],
    role: [
      "Designed the system architecture for multiple user flows",
      "Built event lifecycle and booking logic",
      "Managed role-based interactions and approvals",
    ],
    impact: [
      "Gave each user type a clear path through the system",
      "Reduced confusion around event creation and approval flow",
      "Made the platform easier to reason about as roles expanded",
    ],
    challenges: [
      "Handled multiple user roles and interactions",
      "Designed scalable approval workflows",
      "Managed complex user journeys",
    ],
    insight: "System complexity increases fast when user roles multiply.",
    demo: {
      images: ["/demo/eventbooking/home.jpeg", "/demo/eventbooking/outlet.jpeg", "/demo/eventbooking/promoter.jpeg", "/demo/eventbooking/seller.jpeg"],
    },
  },
  {
    slug: "nfc-tap-card-system",
    title: "NFC Tap Card System",
    description:
      "A digital NFC system for sharing contact information through tap cards, QR codes, and dynamic links.",
    overview:
      "A digital NFC-based system for sharing contact information through tap cards, QR codes, and dynamic links.",
    features: [
      "NFC-enabled digital card generation",
      "QR and link sharing",
      "Contact download functionality",
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "QR", "NFC"],
    role: [
      "Developed frontend and backend logic",
      "Implemented dynamic link and QR generation",
      "Delivered the system to a client-ready standard",
    ],
    impact: [
      "Made contact sharing simpler across devices",
      "Provided a clean flow for tap, QR, and link-based access",
      "Delivered a usable product that could be handed to a client",
    ],
    challenges: [
      "Ensured smooth user experience across devices",
      "Handled real client requirements and expectations",
      "Delivered production-ready system quality",
    ],
    insight: "Simple systems still need strong UX thinking to feel reliable.",
    demo: {
      images: ["/demo/nfc/digitalcard.jpeg", "/demo/nfc/form.jpeg"],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const skills = {
  languages: ["C", "C++", "Java", "JavaScript"],
  technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Supabase"],
  toolsAndConcepts: ["Git", "API Integration", "System Design", "Database Modeling"],
};

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Athryan Tech Solutions",
    period: "Sep 2025 – Present",
    points: [
      "Built full-stack applications using React, Node.js, and MongoDB under evolving client requirements",
      "Structured backend systems for HR platforms, booking systems, and CMS tools",
      "Integrated third-party APIs and handled real-world data flows and edge cases",
      "Refactored backend logic and improved system stability during continuous product changes",
      "Designed systems to remain stable despite unclear and shifting requirements",
    ],
  },
  {
    role: "Technical Lead",
    company: "ImmersiveMed Solutions",
    period: "2025 – Present",
    points: [
      "Leading development of VR-based healthcare simulations using Unity and C#",
      "Designing interactive training environments and medical visualization systems",
      "Defining system architecture and technical direction for immersive learning solutions",
    ],
  },
  {
    role: "Live Project Intern",
    company: "Vivnovation",
    period: "Aug 2025 – Oct 2025",
    points: [
      "Developed Unity-based 3D training module for US healthcare workflow understanding",
      "Worked on insurance claim documentation using EMR data",
      "Created and submitted claim forms for physicians",
      "Gained exposure to healthcare operations and real-world data workflows",
    ],
  },
];

export const additionalExperience: AdditionalExperienceItem[] = [
  {
    title: "Biomedical Engineering",
    description:
      "Academic foundation in biomedical systems, physiology-driven problem framing, and applied technical thinking.",
  },
  {
    title: "Minor in IoT",
    description:
      "Exposure to embedded systems, sensors, and hardware-software integration for real-world connected systems.",
  },
  {
    title: "YI Yuva Event Coordinator",
    description:
      "Coordinated events end-to-end across planning, execution, logistics, and team collaboration.",
  },
];

export const contact = {
  text: "If you're building something and need someone who can take ownership and ship, let’s talk.",
};

export const personal = {
  name: "Naveen MV",
  title: "Full Stack Developer",
  tagline: "I build real-world systems under real constraints.",
  heroDescription:
    "From HR platforms to booking systems and API integrations, I design and ship systems that work in evolving, real-world environments.",
  about: [
    "I build systems in environments where requirements change and clarity is not guaranteed.",
    "My experience comes from working on real products—HR platforms, booking systems, and multi-role systems.",
    "I work across frontend and backend, integrating APIs and structuring systems for real-world use.",
    "Alongside web development, I’m building VR-based healthcare simulations using Unity.",
  ],
  email: "mvnaveen18@gmail.com",
  linkedin: "https://www.linkedin.com/in/naveen-mv-8432b3232",
};

export const workStyle = [
  "I build systems even when requirements are unclear",
  "I adapt quickly and restructure when systems break",
  "I focus on making systems work, not just writing code",
];
