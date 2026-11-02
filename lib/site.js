export const site = {
  name: "RS Construction",
  tagline: "Building Your Dreams",
  city: "Tirunelveli",
  region: "Tamil Nadu",
  country: "India",
  // Add verified contact details here before publishing.
  phone: "+91 9585815942",
  email: "rsconstruction419@gmail.com",
  whatsapp: "9585815942",
};

export const services = [
  { title: "New Construction", icon: "house", image: "/images/build-01.jpg", description: "Build a home or commercial space from the first sketch to the finishing details. We help you plan each stage around your needs, site and budget.", benefits: ["A clear project scope", "Guidance through each stage", "Thoughtful material planning"] },
  { title: "Renovation & Repair", icon: "hammer", image: "/images/build-02.jpg", description: "Refresh, repair or rework an existing space with practical solutions that respect the way you live and the structure you already have.", benefits: ["Careful assessment", "Practical upgrades", "Coordinated finishing"] },
  { title: "Interior Works", icon: "sofa", image: "/images/build-03.jpg", description: "Bring rooms together with considered interior work, from layout planning and finishes to the final details that make a space feel complete.", benefits: ["Comfort-led layouts", "Coordinated finishes", "Details suited to daily life"] },
  { title: "Civil Works", icon: "blocks", image: "/images/build-04.jpg", description: "Plan and coordinate essential civil work for residential and commercial properties with an emphasis on clear communication and quality workmanship.", benefits: ["Structured planning", "Workmanship focus", "Consistent coordination"] },
  { title: "Plan Approval", icon: "file", image: "/images/build-05.jpg", description: "Get guidance preparing plans and understanding the approval steps relevant to your proposed building project.", benefits: ["Documentation guidance", "Clear next steps", "Project-specific support"] },
  { title: "Elevation", icon: "ruler", image: "/images/build-06.jpg", description: "Explore an exterior design that balances curb appeal, proportion, light and the character you want your building to express.", benefits: ["Distinctive façade ideas", "Material-aware design", "A cohesive exterior"] },
  { title: "Estimation", icon: "calculator", image: "/images/build-07.jpg", description: "Understand the likely scope and cost components of a project before work begins, so you can make informed decisions as plans take shape.", benefits: ["Scope-based estimate", "Cost components explained", "Better-informed planning"] },
];

export const image = (id, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

services.forEach((service, i) => {
  const ids = ["photo-1600585154340-be6161a56a0c", "photo-1600566753086-00f18fb6b3ea", "photo-1600210492486-724fe5c67fb0", "photo-1503387762-592deb58ef4e", "photo-1504307651254-35680f356dfd", "photo-1600607687920-4e2a09cf159d", "photo-1503387762-592deb58ef4e"];
  service.image = image(ids[i], 900);
});

// Concept visuals only. Replace these entries with verified completed projects before launch.
export const projects = [
  { title: "Contemporary family home", category: "Residential", image: "/images/build-08.jpg", description: "An illustrative concept for a light-filled modern home with a generous outdoor connection." },
  { title: "Warm modern residence", category: "Residential", image: "/images/build-09.jpg", description: "An illustrative home concept pairing natural textures with clean architectural lines." },
  { title: "Commercial frontage study", category: "Commercial", image: "/images/build-10.jpg", description: "A visual reference for a welcoming, contemporary commercial exterior." },
  { title: "Interior refresh concept", category: "Renovation", image: "/images/build-11.jpg", description: "An illustrative interior refresh focused on calm finishes and everyday comfort." },
];

const projectImages = ["photo-1600585154340-be6161a56a0c", "photo-1600607687920-4e2a09cf159d", "photo-1486406146926-c627a92ad1ab", "photo-1600210492486-724fe5c67fb0"];
projects.forEach((project, i) => { project.image = image(projectImages[i], 1000); });

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];
