"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

export default function ProjectCarousel({ projects, label = "Project image carousel" }) {
  return <div className="project-carousel" role="region" aria-label={label}>
    <div className="project-carousel-track" tabIndex={0} aria-label="Scroll horizontally to browse project images">
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => <motion.article
          className="project-slide"
          key={project.title}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${projects.length}`}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src={project.image} alt={`Illustrative visual reference for ${project.title}`} fill sizes="(max-width: 768px) 88vw, 76vw" unoptimized />
          <div className="project-slide-shade" />
          <span className="project-slide-category">{project.category}</span>
          <div className="project-slide-copy">
            <span className="project-slide-number">{String(index + 1).padStart(2, "0")} <i /> {String(projects.length).padStart(2, "0")}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </motion.article>)}
      </AnimatePresence>
    </div>
    <p className="project-carousel-hint"><span>SWIPE OR SCROLL TO EXPLORE</span><span>{projects.length} visual references</span></p>
  </div>;
}
