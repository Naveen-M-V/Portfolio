"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="hover-depth group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-sm"
    >
      <Link href={`/projects/${project.slug}`} aria-label={`View details for ${project.title}`} className="absolute inset-0 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--accent)]/8 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative space-y-5">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <p className="text-sm leading-6 text-[var(--muted)]">{project.description}</p>

        <ul className="space-y-2 text-sm text-[var(--muted)]">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1 text-xs text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="inline-flex items-center gap-1 text-sm font-medium text-[var(--foreground)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
          View Details
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </motion.article>
  );
}
