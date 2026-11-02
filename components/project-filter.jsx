"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/site";
import ProjectCarousel from "@/components/project-carousel";

const categories = ["All", "Residential", "Commercial", "Renovation"];

export default function ProjectFilter() {
  const [active, setActive] = useState("All");
  const visible = useMemo(() => projects.filter(project => active === "All" || project.category === active), [active]);
  return <>
    <div className="project-filters" role="group" aria-label="Filter visual project references">
      {categories.map(category => <button key={category} type="button" aria-pressed={active === category} className={active === category ? "selected" : ""} onClick={() => setActive(category)}>{category}</button>)}
    </div>
    <ProjectCarousel projects={visible} label="RS Construction project gallery" />
  </>;
}
