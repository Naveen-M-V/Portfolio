"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="hover-depth group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-all duration-300">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View case study for ${project.title}`}
        className="absolute inset-0 z-10"
      />

      {/* Decorative gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--accent)]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Subtle border accent line */}
      <div className="pointer-events-none absolute top-0 left-0 h-[2px] w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />

      <div className="relative space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
            {project.title}
          </h3>
          {project.role ? (
            <span className="rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
              {project.role}
            </span>
          ) : null}
        </div>

        <p className="text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>

        <ul className="space-y-2 pt-1 text-xs text-[var(--muted)]">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-6 space-y-4 pt-4 border-t border-[var(--border)]/60">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="anime-tag rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] px-2.5 py-0.5 text-xs text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[var(--foreground)] uppercase transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]">
          View Case Study
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </article>
  );
}
