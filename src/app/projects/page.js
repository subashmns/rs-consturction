import { site, image } from "@/lib/site";
import { Reveal, ImageReveal } from "@/components/motion";
import ProjectFilter from "@/components/project-filter";
import { ContactBand } from "@/components/home-sections";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "Project Gallery", description: `Explore residential, commercial and renovation visual references for building projects in ${site.city}, Tamil Nadu. Verified completed projects will be added as details become available.`, path: "/projects" });

export default function ProjectsPage() {
  return <>
    <section className="page-hero projects-hero"><div className="container site-container"><div className="page-hero-copy"><span className="eyebrow eyebrow-light">PROJECT GALLERY</span><h1>Picture the<br /><em>possibilities.</em></h1><p>A few visual references to help imagine the kinds of spaces a project can become.</p><span className="page-hero-location">REAL PROJECT STORIES WILL BE ADDED WHEN VERIFIED</span></div><div className="page-hero-image"><ImageReveal src={image("photo-1486406146926-c627a92ad1ab", 1500)} alt="Contemporary commercial architecture" priority /></div></div></section>
    <section className="section-pad project-gallery-section"><div className="container site-container"><Reveal><div className="gallery-note"><span className="gallery-note-icon">i</span><p><strong>About these images</strong> These are illustrative stock photographs, not completed projects by RS Construction. Project names, locations and client details are not shown because verified case studies have not yet been provided.</p></div></Reveal><ProjectFilter /></div></section>
    <ContactBand />
  </>;
}
