import { Blocks, BrickWall, Building2, DraftingCompass, Hammer, HardHat, House, Paintbrush, Pencil, Ruler, Truck, Wrench } from "lucide-react";

const motifs = [
  { Icon: HardHat, className: "construction-motif-one" },
  { Icon: Ruler, className: "construction-motif-two" },
  { Icon: Building2, className: "construction-motif-three" },
  { Icon: Hammer, className: "construction-motif-four" },
  { Icon: DraftingCompass, className: "construction-motif-five" },
  { Icon: Blocks, className: "construction-motif-six" },
  { Icon: BrickWall, className: "construction-motif-seven" },
  { Icon: Paintbrush, className: "construction-motif-eight" },
  { Icon: Truck, className: "construction-motif-nine" },
  { Icon: Wrench, className: "construction-motif-ten" },
  { Icon: House, className: "construction-motif-eleven" },
  { Icon: Pencil, className: "construction-motif-twelve" },
];

export default function ConstructionAtmosphere() {
  return <div className="construction-atmosphere" aria-hidden="true">
    {motifs.map(({ Icon, className }) => <span className={`construction-motif ${className}`} key={className}><Icon /></span>)}
  </div>;
}
