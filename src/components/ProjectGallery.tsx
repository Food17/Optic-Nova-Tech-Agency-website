import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Expand } from "lucide-react";
import type { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function ProjectGallery({ project }: { project: Project }) {
  const images = project.images ?? [];
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const image = images[active];
  const move = (direction: number) => setActive((current) => (current + direction + images.length) % images.length);

  useEffect(() => {
    setActive(0);
    setExpanded(false);
  }, [project.slug]);

  useEffect(() => {
    if (!expanded || images.length < 2) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") setActive((current) => (current - 1 + images.length) % images.length);
      if (event.key === "ArrowRight") setActive((current) => (current + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded, images.length]);

  if (!image) return null;

  return (
    <div>
      <div className="relative flex h-[440px] items-center justify-center overflow-hidden rounded-md border border-border bg-muted p-5 md:h-[660px] md:p-10">
        <img key={image.src} src={image.src} alt={image.alt} className="h-full w-full object-contain" fetchPriority="high" />
        <Button variant="outline" size="icon" className="absolute bottom-4 right-4" aria-label="Expand artwork" title="Expand artwork" onClick={() => setExpanded(true)}><Expand /></Button>
      </div>
      <div className="mt-5 flex items-center justify-between gap-5">
        <p className="min-w-0 text-sm text-muted-foreground" aria-live="polite">{image.alt}</p>
        <div className="flex shrink-0 items-center gap-3">
          <span className="font-display text-sm tabular-nums text-muted-foreground">{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
          {images.length > 1 && <>
            <Button variant="outline" size="icon" aria-label="Previous artwork" title="Previous artwork" onClick={() => move(-1)}><ArrowLeft /></Button>
            <Button variant="outline" size="icon" aria-label="Next artwork" title="Next artwork" onClick={() => move(1)}><ArrowRight /></Button>
          </>}
        </div>
      </div>
      {images.length > 1 && <div className="mt-5 grid grid-cols-4 gap-2 md:gap-4">
        {images.map((item, index) => <Button key={item.src} variant="ghost" aria-label={`View artwork ${index + 1}`} aria-pressed={active === index} onClick={() => setActive(index)} className={`h-auto aspect-[4/3] overflow-hidden rounded-sm border bg-muted p-2 md:p-3 ${active === index ? "border-primary" : "border-border hover:border-primary/50"}`}>
          <img src={item.src} alt={item.alt} loading="lazy" className="h-full w-full object-contain" />
        </Button>)}
      </div>}
      <Dialog open={expanded} onOpenChange={setExpanded}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-6xl gap-3 p-4 pt-12 md:p-6 md:pt-12" aria-describedby={undefined}>
          <DialogTitle className="sr-only">{project.title} artwork</DialogTitle>
          <img src={image.src} alt={image.alt} className="h-[65dvh] w-full object-contain" />
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">{image.alt}</p>
            {images.length > 1 && <div className="flex shrink-0 gap-2">
              <Button variant="outline" size="icon" aria-label="Previous expanded artwork" title="Previous artwork" onClick={() => move(-1)}><ArrowLeft /></Button>
              <Button variant="outline" size="icon" aria-label="Next expanded artwork" title="Next artwork" onClick={() => move(1)}><ArrowRight /></Button>
            </div>}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}