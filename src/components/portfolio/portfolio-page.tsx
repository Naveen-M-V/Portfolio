"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Link2, Mail } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { AnimatedSection } from "@/components/portfolio/animated-section";
import { ContactForm } from "@/components/portfolio/contact-form";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";
import { additionalExperience, contact, experience, navItems, personal, projects, skills, workStyle } from "@/data/portfolio";

export function PortfolioPage() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", () => {
    const viewportMiddle = window.scrollY + window.innerHeight / 3;

    const current = navItems.findLast((item) => {
      const section = document.getElementById(item.id);
      if (!section) {
        return false;
      }

      return section.offsetTop <= viewportMiddle;
    });

    setActiveSection(current?.id ?? "hero");
  });

  const skillGroups = useMemo(
    () => [
      { title: "Languages", values: skills.languages },
      { title: "Technologies", values: skills.technologies },
      { title: "Tools & Concepts", values: skills.toolsAndConcepts },
    ],
    [],
  );

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-[var(--accent)]"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/75 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
          <a href="#hero" className="text-sm font-semibold tracking-[0.12em] text-[var(--muted)] uppercase">
            Naveen MV
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                  activeSection === item.id
                    ? "bg-[var(--surface-elevated)] text-[var(--foreground)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <ThemeToggle />
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-5 pb-20 pt-28 sm:gap-28">
        <AnimatedSection id="hero" className="relative scroll-mt-28">
          <div className="pointer-events-none absolute -top-10 right-8 h-44 w-44 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--accent)_18%,transparent)_0%,transparent_72%)]" />
          <p className="mb-4 text-sm tracking-[0.12em] text-[var(--muted)] uppercase">Full Stack Developer</p>
          <h1 className="max-w-4xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {personal.name}
          </h1>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-[var(--foreground)] sm:text-xl">{personal.title}</p>
          <p className="mt-2 max-w-4xl text-xl leading-relaxed text-[var(--muted)] sm:text-2xl">{personal.tagline}</p>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[var(--muted)]">{personal.heroDescription}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="ripple-button hover-depth inline-flex items-center rounded-full border border-transparent bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-[var(--background)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="ripple-button hover-depth inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)]"
            >
              Contact Me
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection id="about" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About</h2>
          <div className="max-w-4xl space-y-4 text-[15px] leading-7 text-[var(--muted)] sm:text-base">
            {personal.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="work" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How I Work</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {workStyle.map((item) => (
              <article key={item} className="hover-depth rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm leading-7 text-[var(--muted)]">{item}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="projects" className="scroll-mt-24 space-y-7">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Featured Projects</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="skills" className="scroll-mt-24 space-y-7">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Skills</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="hover-depth rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <h3 className="mb-4 text-sm font-medium tracking-wide text-[var(--muted)] uppercase">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.values.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </AnimatedSection>

        <AnimatedSection id="experience" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Experience</h2>
          <div className="space-y-5">
            {experience.map((item) => (
              <article key={`${item.role}-${item.company}`} className="hover-depth rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-medium">{item.role} — {item.company}</h3>
                  <p className="text-xs tracking-[0.08em] text-[var(--muted)] uppercase">{item.period}</p>
                </div>
                <ul className="mt-4 space-y-2 text-[15px] leading-7 text-[var(--muted)] sm:text-base">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="additional" className="scroll-mt-24 space-y-7">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Additional Experience</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {additionalExperience.map((item) => (
              <article key={item.title} className="hover-depth rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <h3 className="text-base font-medium">{item.title}</h3>
                {item.role ? <p className="mt-1 text-xs tracking-[0.12em] text-[var(--muted)] uppercase">{item.role}</p> : null}
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="scroll-mt-24 space-y-7">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Contact</h2>
          <p className="text-[var(--muted)]">{contact.text}</p>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="hover-depth space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <a
                className="group flex items-center gap-3 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                href={`mailto:${personal.email}`}
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-elevated)]">
                  <Mail className="h-4 w-4" />
                </span>
                {personal.email}
              </a>

              <Link
                className="group flex items-center gap-3 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-elevated)]">
                  <Link2 className="h-4 w-4" />
                </span>
                LinkedIn Profile
              </Link>
            </div>

            <ContactForm />
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}
