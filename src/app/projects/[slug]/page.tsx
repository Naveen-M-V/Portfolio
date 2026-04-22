import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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
          href="/#projects"
          className="ripple-button hover-depth inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <span className="text-xs tracking-[0.12em] text-[var(--muted)] uppercase">Case Study</span>
      </div>

      <section className="space-y-5">
        <h1 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">{project.overview}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1 text-xs text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <section className="hover-depth rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="mb-4 text-xl font-semibold tracking-tight">Key Features</h2>
          <ul className="space-y-3 text-sm text-[var(--muted)]">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="hover-depth rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="mb-4 text-xl font-semibold tracking-tight">Role & Contributions</h2>
          <ul className="space-y-3 text-sm text-[var(--muted)]">
            {project.role.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="hover-depth rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="mb-4 text-xl font-semibold tracking-tight">Impact</h2>
          <ul className="space-y-3 text-sm text-[var(--muted)]">
            {project.impact.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="hover-depth rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="mb-4 text-xl font-semibold tracking-tight">Insight</h2>
          <p className="text-sm leading-7 text-[var(--muted)]">{project.insight}</p>
        </section>
      </div>

      {project.demo ? (
        <section className="hover-depth mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="mb-4 text-xl font-semibold tracking-tight">Proof Structure</h2>
          {project.demo.images.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {project.demo.images.map((image) => (
                <div key={image} className="aspect-video rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)]" />
              ))}
            </div>
          ) : (
            <p className="text-sm leading-7 text-[var(--muted)]">Demo assets ready to be added.</p>
          )}
          {project.demo.video ? <p className="mt-3 text-sm text-[var(--muted)]">Video: {project.demo.video}</p> : null}
        </section>
      ) : null}

      <section className="hover-depth mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Challenges & Learnings</h2>
        <ul className="space-y-3 text-sm text-[var(--muted)]">
          {project.challenges.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
