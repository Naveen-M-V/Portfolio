export type Project = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  features: string[];
  tech: string[];
  whatIDid: string[];
  challenges: string[];
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export const projects: Project[] = [
  {
    slug: "hrms-system",
    title: "Human Resource Management System (HRMS)",
    description:
      "A full-scale HR platform for employee operations, approvals, and internal workflows with structured role-based dashboards.",
    overview:
      "A full-scale HR management platform designed to handle employee operations, approvals, and internal workflows with role-based access and structured dashboards.",
    features: [
      "Employee creation and profile management",
      "Leave and expense approval workflows",
      "3-level hierarchical dashboards (Admin / Manager / Employee)",
      "Document and certificate management",
      "Integrated E-learning module",
    ],
    tech: ["Node.js", "Express", "React", "MongoDB", "RBAC"],
    whatIDid: [
      "Designed backend architecture and API structure",
      "Built role-based access control system",
      "Managed database models and workflows",
      "Handled system refactoring and data migration",
    ],
    challenges: [
      "Managed increasing system complexity due to evolving requirements",
      "Refactored backend structure to handle scalability",
      "Learned the importance of clean architecture and future-proof design",
    ],
  },
  {
    slug: "flight-package-booking-platform",
    title: "Flight & Package Booking Platform",
    description:
      "A travel booking system integrating real-world flight APIs with custom package logic and operations tooling.",
    overview:
      "A travel booking system integrating real-world flight APIs and custom package management for users.",
    features: [
      "Flight booking using Almosafer API",
      "Custom travel package creation",
      "Customer enquiry management dashboard",
      "Coupon and pricing logic",
    ],
    tech: ["Next.js", "Node.js", "REST APIs", "MongoDB", "Pricing Engine"],
    whatIDid: [
      "Integrated external APIs and handled responses",
      "Built backend booking and pricing logic",
      "Designed admin dashboard for operations",
      "Managed real-time data handling",
    ],
    challenges: [
      "Handled API inconsistencies and edge cases",
      "Designed flexible pricing and coupon logic",
      "Managed real-world booking workflows",
    ],
  },
  {
    slug: "event-hosting-ticket-booking-platform",
    title: "Event Hosting & Ticket Booking Platform",
    description:
      "A multi-role event lifecycle platform with approval workflows and public ticket booking.",
    overview:
      "A multi-role event platform enabling different types of users to host and manage events with admin approval workflows.",
    features: [
      "Multi-user roles (Outlet Provider, Influencer, Artist, Admin)",
      "Event creation with pricing",
      "Admin approval system",
      "Public ticket booking system",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Access Control"],
    whatIDid: [
      "Designed multi-role architecture",
      "Built event lifecycle management system",
      "Implemented approval workflows",
      "Managed user access and permissions",
    ],
    challenges: [
      "Handled multiple user roles and interactions",
      "Designed scalable approval workflows",
      "Managed complex user journeys",
    ],
  },
  {
    slug: "nfc-tap-card-system",
    title: "NFC Tap Card System (City Union Bank)",
    description:
      "An NFC-enabled digital identity platform for contact sharing through tap cards, QR codes, and dynamic links.",
    overview:
      "A digital NFC-based system enabling users to generate and share contact information through tap cards, QR codes, and dynamic links.",
    features: [
      "NFC-enabled digital card generation",
      "QR code and link-based sharing",
      "Contact download functionality",
      "Clean UI for user interaction",
    ],
    tech: ["Next.js", "Node.js", "QR", "Dynamic Links", "Client Delivery"],
    whatIDid: [
      "Developed frontend and backend system",
      "Implemented dynamic link generation",
      "Built user interface for interaction",
      "Delivered a client-ready solution",
    ],
    challenges: [
      "Ensured smooth user experience across devices",
      "Handled real client requirements and expectations",
      "Delivered production-ready system quality",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const skills = {
  languages: ["C", "C++", "C#", "Java", "JavaScript"],
  web: ["MongoDB", "Express", "React", "Node.js", "Next.js"],
  tools: ["Git", "APIs", "Database Design", "System Architecture", "Unity"],
};

export const experience = {
  role: "Full Stack Developer (Startup)",
  description:
    "Owned backend and frontend delivery for production systems, translating evolving business requirements into stable architecture. Built APIs, role-driven workflows, and operational dashboards with a strong focus on scalability and reliability.",
};

export const personal = {
  name: "Naveen MV",
  title: "Full Stack Developer building scalable business systems and real-world applications",
  heroDescription:
    "I design and develop production-grade platforms including HR systems, booking platforms, SaaS CMS solutions, and interactive products. Focused on ownership, clean architecture, and systems that actually work in real environments.",
  about:
    "I’m a Full Stack Developer with a background in Biomedical Engineering, building scalable systems for real-world applications. I’ve worked on production-level platforms including HR systems, booking engines, SaaS CMS solutions, and fintech-related products. I focus on ownership, clean architecture, and building systems that are reliable beyond development environments.",
  email: "mvnaveen18@gmail.com",
  linkedin: "https://www.linkedin.com/in/naveen-mv-8432b3232",
};
