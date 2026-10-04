import type { Project } from "@/data/projects";

type Props = { project: Project; className?: string; eager?: boolean };

export function ProjectVisual({ project, className = "", eager = false }: Props) {
  return (
    <div className={`relative overflow-hidden bg-muted ${className}`}>
      <img
        src={project.images[0].src}
        alt={project.images[0].alt}
        loading={eager ? "eager" : "lazy"}
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}
