"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Menu, X, Download } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import {
  useHeroAnime,
  useMagneticButton,
  useScrollReveal,
  useStaggerTags,
} from "@/components/portfolio/anime-helpers";
import { ContactForm } from "@/components/portfolio/contact-form";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";
import {
  beyondCode,
  contact,
  education,
  experience,
  featuredProjects,
  moreWork,
  navItems,
  personal,
  technicalArsenal,
  whatIDo,
} from "@/data/portfolio";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  );
}

export function PortfolioPage() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  // Anime Hooks
  const heroRef = useHeroAnime();

  // Magnetic button refs
  const viewWorkBtnRef = useMagneticButton<HTMLAnchorElement>(0.2);
  const resumeBtnRef = useMagneticButton<HTMLAnchorElement>(0.2);
  const connectBtnRef = useMagneticButton<HTMLAnchorElement>(0.2);

  // Scroll Reveal section refs
  const aboutRef = useScrollReveal();
  const whatIDoRef = useScrollReveal({ staggerDelay: 100 });
  const featuredWorkRef = useScrollReveal();
  const moreWorkRef = useScrollReveal({ staggerDelay: 80 });
  const experienceRef = useScrollReveal();
  const arsenalRef = useStaggerTags();
  const educationRef = useScrollReveal();
  const beyondCodeRef = useScrollReveal();
  const contactRef = useScrollReveal();

  useMotionValueEvent(scrollYProgress, "change", () => {
    const viewportMiddle = window.scrollY + window.innerHeight / 3;

    const current = navItems.findLast((item) => {
      const section = document.getElementById(item.id);
      if (!section) return false;
      return section.offsetTop <= viewportMiddle;
    });

    setActiveSection(current?.id ?? "hero");
  });

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--selection)]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-[var(--accent)]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl transition-colors">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
          <a
            href="#hero"
            className="text-sm font-semibold tracking-wider text-[var(--foreground)] uppercase hover:text-[var(--accent)] transition-colors"
          >
            Naveen MV
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-[var(--surface-elevated)] text-[var(--accent)] font-semibold shadow-xs"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--foreground)] lg:hidden"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen ? (
          <div className="border-t border-[var(--border)] bg-[var(--background)]/95 px-5 py-4 backdrop-blur-2xl lg:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-[var(--surface-elevated)] text-[var(--accent)] font-semibold"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      {/* Main Content */}
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-5 pb-24 pt-28 sm:gap-28 md:pt-36">
        {/* HERO SECTION */}
        <section id="hero" ref={heroRef} className="relative scroll-mt-28 space-y-6">
          <div className="pointer-events-none absolute -top-12 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--accent)_22%,transparent)_0%,transparent_70%)]" />

          <p className="anime-hero-item text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
            Full Stack Developer • Systems Engineer
          </p>

          <h1 className="anime-hero-item text-4xl leading-tight font-bold tracking-tight sm:text-6xl md:text-7xl text-[var(--foreground)]">
            {personal.name}
          </h1>

          <p className="anime-hero-item max-w-3xl text-xl font-medium leading-snug text-[var(--foreground)] sm:text-2xl">
            {personal.title}
          </p>

          <p className="anime-hero-item max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {personal.tagline}
          </p>

          {/* Hero CTA Buttons with Magnetic Effect */}
          <div className="anime-hero-item pt-4 flex flex-wrap gap-3">
            <a
              ref={viewWorkBtnRef}
              href="#featured-work"
              className="ripple-button inline-flex items-center gap-2 rounded-full border border-transparent bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] shadow-md transition-all hover:bg-[var(--accent)] hover:text-white"
            >
              View My Work
            </a>

            <a
              ref={resumeBtnRef}
              href={personal.resumeUrl}
              className="ripple-button inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>

            <a
              ref={connectBtnRef}
              href="#contact"
              className="ripple-button inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              Let's Connect
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" ref={aboutRef} className="scroll-mt-24 space-y-6">
          <h2 className="anime-reveal-child text-2xl font-bold tracking-tight sm:text-3xl">About</h2>

          <div className="anime-reveal-child max-w-4xl space-y-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {personal.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* WHAT I DO SECTION */}
        <section id="what-i-do" ref={whatIDoRef} className="scroll-mt-24 space-y-8">
          <div className="space-y-2">
            <h2 className="anime-reveal-child text-2xl font-bold tracking-tight sm:text-3xl">What I Do</h2>
            <p className="text-sm text-[var(--muted)]">Engineering products across web, mobile, database, and infrastructure.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whatIDo.map((item) => (
              <article
                key={item.title}
                className="anime-reveal-child hover-depth flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                  {item.description ? (
                    <p className="text-xs leading-relaxed text-[var(--muted)]">{item.description}</p>
                  ) : null}
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border)]/50">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] px-2.5 py-1 text-xs font-medium text-[var(--muted)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FEATURED WORK SECTION */}
        <section id="featured-work" ref={featuredWorkRef} className="scroll-mt-24 space-y-8">
          <div className="space-y-2">
            <h2 className="anime-reveal-child text-2xl font-bold tracking-tight sm:text-3xl">Featured Work</h2>
            <p className="text-sm text-[var(--muted)]">Production platforms built with end-to-end engineering ownership.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* MORE WORK SECTION */}
        <section id="more-work" ref={moreWorkRef} className="scroll-mt-24 space-y-8">
          <div className="space-y-2">
            <h2 className="anime-reveal-child text-2xl font-bold tracking-tight sm:text-3xl">More Work</h2>
            <p className="text-sm text-[var(--muted)]">Additional projects, flight engines, ticketing platforms, and ops tools.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {moreWork.map((project) => (
              <article
                key={project.slug}
                className="anime-reveal-child hover-depth flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xs"
              >
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-[var(--foreground)]">{project.title}</h3>
                  <p className="text-xs leading-relaxed text-[var(--muted)]">{project.description}</p>
                </div>

                {project.tech ? (
                  <div className="mt-4 flex flex-wrap gap-1 pt-3 border-t border-[var(--border)]/40">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-sm bg-[var(--surface-elevated)] px-2 py-0.5 text-[11px] text-[var(--muted)]">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" ref={experienceRef} className="scroll-mt-24 space-y-8">
          <h2 className="anime-reveal-child text-2xl font-bold tracking-tight sm:text-3xl">Experience</h2>

          <div className="space-y-6">
            {experience.map((item) => (
              <article
                key={`${item.role}-${item.company}`}
                className="anime-reveal-child hover-depth rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 shadow-xs"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    {item.role} <span className="text-[var(--accent)]">— {item.company}</span>
                  </h3>
                  <span className="text-xs font-mono tracking-wider text-[var(--muted)] uppercase">{item.period}</span>
                </div>

                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[var(--muted)]">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* TECHNICAL ARSENAL SECTION */}
        <section id="arsenal" ref={arsenalRef} className="scroll-mt-24 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Technical Arsenal</h2>
            <p className="text-sm text-[var(--muted)]">Languages, frameworks, databases, infrastructure, and spatial tools.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(technicalArsenal).map(([category, items]) => (
              <div key={category} className="hover-depth rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <h3 className="mb-4 text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {items.map((tech) => (
                    <span
                      key={tech}
                      className="anime-tag rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1 text-xs font-medium text-[var(--foreground)] shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" ref={educationRef} className="scroll-mt-24 space-y-6">
          <h2 className="anime-reveal-child text-2xl font-bold tracking-tight sm:text-3xl">Education</h2>

          <div className="anime-reveal-child hover-depth rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">{education.degree}</h3>
              <span className="text-xs font-mono tracking-wider text-[var(--accent)]">{education.metrics}</span>
            </div>

            <p className="text-sm font-medium text-[var(--muted)]">{education.institution}</p>
            <p className="text-sm leading-relaxed text-[var(--muted)] pt-2 border-t border-[var(--border)]/50">
              {education.description}
            </p>
          </div>
        </section>

        {/* BEYOND CODE SECTION */}
        <section id="beyond-code" ref={beyondCodeRef} className="scroll-mt-24 space-y-8">
          <h2 className="anime-reveal-child text-2xl font-bold tracking-tight sm:text-3xl">Beyond Code</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="anime-reveal-child hover-depth rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-3">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">Writing & House Zaven</h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{beyondCode.writing}</p>
            </article>

            <article className="anime-reveal-child hover-depth rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-3">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">Leadership & Speaking</h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{beyondCode.leadership}</p>
            </article>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" ref={contactRef} className="scroll-mt-24 space-y-8">
          <div className="space-y-2">
            <h2 className="anime-reveal-child text-2xl font-bold tracking-tight sm:text-3xl">{contact.heading}</h2>
            <p className="anime-reveal-child text-base text-[var(--muted)]">{contact.subtext}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="anime-reveal-child hover-depth flex flex-col justify-between space-y-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="space-y-4">
                <a
                  className="group flex items-center gap-3.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                  href={`mailto:${contact.email}`}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--accent)] group-hover:border-[var(--accent)] transition-colors">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-[var(--muted)]">Direct Email</p>
                    <p className="font-semibold text-[var(--foreground)]">{contact.email}</p>
                  </div>
                </a>

                <Link
                  className="group flex items-center gap-3.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--accent)] group-hover:border-[var(--accent)] transition-colors">
                    <LinkedInIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-[var(--muted)]">Professional Network</p>
                    <p className="font-semibold text-[var(--foreground)]">LinkedIn Profile</p>
                  </div>
                </Link>

                <Link
                  className="group flex items-center gap-3.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--accent)] group-hover:border-[var(--accent)] transition-colors">
                    <GitHubIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-[var(--muted)]">Source Code & Projects</p>
                    <p className="font-semibold text-[var(--foreground)]">GitHub Profile</p>
                  </div>
                </Link>
              </div>

              <div className="pt-4 border-t border-[var(--border)]/60 text-xs text-[var(--muted)]">
                Built with Next.js, TypeScript, Tailwind CSS & anime.js
              </div>
            </div>

            <div className="anime-reveal-child">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
