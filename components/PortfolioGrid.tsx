"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import FilterBar from "@/components/FilterBar";
import ProjectCard from "@/components/ProjectCard";
import {
  projectFilters,
  projects,
  type ProjectFilter,
} from "@/data/projects";

export default function PortfolioGrid() {
  const [active, setActive] = useState<ProjectFilter>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.categories.some((c) => c === active)),
    [active],
  );

  return (
    <div>
      <div className="fade-up" style={{ "--d": "300ms" } as CSSProperties}>
        <FilterBar
          label="Filter projects"
          options={projectFilters}
          active={active}
          onChange={setActive}
        />
      </div>

      <div
        key={active}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map((project, i) => (
          <div
            key={project.id}
            className="fade-up"
            style={{ "--d": `${i * 80}ms` } as CSSProperties}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
