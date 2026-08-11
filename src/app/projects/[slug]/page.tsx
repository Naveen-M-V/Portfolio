import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/portfolio";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found | Naveen MV" };
  }

  return {
    title: `${project.title} | Naveen MV`,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-5 pb-20 pt-10 text-[var(--foreground)]">
      <div className="mb-10 flex items-center justify-between gap-4 border-b border-[var(--border)] pb-6">
        <Link
          href="/#featured-work"
          className="ripple-button hover-depth inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <span className="text-xs font-mono tracking-widest text-[var(--accent)] uppercase">Case Study</span>
      </div>

      <section className="space-y-5">
        <div className="space-y-2">
          {project.role ? (
            <span className="inline-block rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
              {project.role}
            </span>
          ) : null}
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
        </div>

        <p className="max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">{project.overview}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1 text-xs font-medium text-[var(--foreground)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <section className="hover-depth rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="mb-4 text-xl font-bold tracking-tight">Key System Capabilities</h2>
          <ul className="space-y-3 text-sm text-[var(--muted)]">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {project.roleDetails && project.roleDetails.length > 0 ? (
          <section className="hover-depth rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <h2 className="mb-4 text-xl font-bold tracking-tight">Engineering Ownership</h2>
            <ul className="space-y-3 text-sm text-[var(--muted)]">
              {project.roleDetails.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>

      {project.demo && project.demo.images.length > 0 ? (
        <section className="hover-depth mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
          <h2 className="text-xl font-bold tracking-tight">Platform Demo Screenshots</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {project.demo.images.map((image, index) => (
              <div
                key={image}
                className="relative aspect-video overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)]"
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
