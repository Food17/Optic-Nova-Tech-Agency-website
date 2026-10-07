import type { Project } from "@/data/projects";

type Props = { project: Project; className?: string; eager?: boolean };

export function ProjectVisual({ project, className = "", eager = false }: Props) {
  const image = project.images?.[0];
  if (!image) {
    return <div aria-hidden="true" className={`bg-muted ${className}`} />;
  }

  return (
    <div className={`relative overflow-hidden bg-muted ${project.category === "Web Development" ? "" : "p-5 md:p-8"} ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        loading={eager ? "eager" : "lazy"}
        className={project.category === "Web Development" ? "h-full w-full object-cover object-top transition-transform duration-700 motion-safe:group-hover:scale-[1.02]" : "h-full w-full object-contain"}
      />
    </div>
  );
}
