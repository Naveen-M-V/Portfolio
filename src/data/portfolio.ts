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
      images: [],
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
      images: [],
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
      images: [],
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
      images: [],
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

export const experience = {
  role: "Full Stack Developer — Startup (2025 – Present)",
  points: [
    "Built full-stack applications under unclear and changing requirements",
    "Structured backend flows for HR systems, booking platforms, CMS tools, and fintech-related products",
    "Handled API integration, backend restructuring, and real-world debugging",
    "Designed systems to stay stable while the product shape kept changing",
  ],
};

export const additionalExperience = [
  {
    title: "ImmersiveMed Solutions",
    role: "Technical Lead",
    description:
      "Leading development of VR-based healthcare simulations using Unity, focusing on interactive training systems and medical visualization.",
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
