export type Project = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  features: string[];
  tech: string[];
  role: string[];
  note?: string;
  challenges: string[];
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
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
      "A full-scale HR platform for employee operations, approvals, and internal workflows with structured role-based dashboards.",
    overview:
      "A full-scale HR management platform designed to handle employee operations, approvals, and internal workflows with role-based access and structured dashboards.",
    features: [
      "Employee profile and document management",
      "Leave and expense approval workflows",
      "3-level dashboards (Admin / Manager / Employee)",
      "Integrated E-learning module",
    ],
    tech: ["Node.js", "Express", "MongoDB", "React", "Role-Based Access"],
    role: [
      "Built backend APIs and database models",
      "Implemented role-based access",
      "Refactored the system for scalability and real usage",
    ],
    note: "Frontend demo with simulated data",
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
      "Travel package management",
      "Customer enquiry dashboard",
      "Coupon and pricing logic",
    ],
    tech: ["Next.js", "Node.js", "REST APIs", "MongoDB", "Pricing Engine"],
    role: [
      "API integration and data handling",
      "Built backend booking workflows",
      "Developed admin dashboard features",
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
      "Multi-user roles (Admin, Influencer, Artist, Provider)",
      "Event creation with pricing",
      "Admin approval system",
      "Ticket booking system",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "System Architecture"],
    role: [
      "Designed system architecture",
      "Built event lifecycle and booking logic",
      "Managed role-based interactions",
    ],
    challenges: [
      "Handled multiple user roles and interactions",
      "Designed scalable approval workflows",
      "Managed complex user journeys",
    ],
  },
  {
    slug: "nfc-tap-card-system",
    title: "NFC Tap Card System",
    description:
      "An NFC-enabled digital identity platform for contact sharing through tap cards, QR codes, and dynamic links.",
    overview:
      "A digital NFC-based system enabling users to generate and share contact information through tap cards, QR codes, and dynamic links.",
    features: [
      "NFC-enabled digital card generation",
      "QR and link sharing",
      "Contact download functionality",
    ],
    tech: ["Next.js", "Node.js", "QR", "Dynamic Links", "NFC"],
    role: [
      "Developed frontend and backend logic",
      "Implemented dynamic link and QR generation",
      "Delivered a client-ready system",
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
  languages: ["C", "C++", "Java", "JavaScript"],
  workingKnowledge: ["JavaScript", "React", "Node.js", "MongoDB"],
  toolsAndConcepts: ["Git", "API Integration", "System Design", "Database Modeling"],
  approach: "AI-assisted development, debugging, and rapid prototyping",
};

export const experience = {
  role: "Full Stack Developer — Startup (2025 – Present)",
  points: [
    "Built and delivered full-stack applications for real-world clients",
    "Developed HR systems, booking platforms, CMS tools, and fintech-related products",
    "Worked across frontend, backend, deployment, and client coordination",
    "Improved system reliability through debugging and backend refactoring",
  ],
};

export const additionalExperience = [
  {
    title: "ImmersiveMed Solutions",
    description:
      "Building VR-based medical simulation systems using Unity to explore immersive healthcare training solutions.",
  },
  {
    title: "IoT Minor Degree",
    description: "Exposure to embedded systems, sensors, and hardware-software integration.",
  },
  {
    title: "Leadership & Involvement",
    description:
      "Organized and coordinated events under YI Yuva, managing execution, logistics, and team collaboration.",
  },
];

export const contact = {
  text: "Let’s build something meaningful.",
};

export const personal = {
  name: "Naveen MV",
  title: "Full Stack Developer",
  tagline:
    "I build real-world systems and scalable applications using modern web technologies and AI-assisted development.",
  heroDescription:
    "From HR platforms to booking systems and fintech integrations, I focus on building reliable products that work in real environments.",
  about: [
    "I’m a Full Stack Developer with a background in Biomedical Engineering, focused on building production-grade systems for real-world use.",
    "I’ve worked on multiple client-facing applications including HR management systems, booking platforms, CMS solutions, and NFC-based digital products. My experience involves handling both frontend and backend workflows, integrating APIs, and delivering complete systems from development to deployment.",
    "I use AI-assisted workflows to improve development speed, explore solutions, and debug effectively, while continuously strengthening my core understanding of the technologies I work with.",
    "I care about ownership, clarity, and building systems that are not just functional, but reliable and maintainable.",
  ],
  email: "mvnaveen18@gmail.com",
  linkedin: "https://www.linkedin.com/in/naveen-mv-8432b3232",
};
