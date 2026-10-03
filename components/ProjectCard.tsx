import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-panel shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-glow/50 hover:shadow-blue">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          unoptimized
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-panel/80 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold tracking-tight text-white">
            {project.title}
          </h3>
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
          >
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-gray-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
