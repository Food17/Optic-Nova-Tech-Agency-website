import { useEffect, useRef, type ReactNode } from "react";

/** Reveals each direct `.line` child in sequence on load. */
export function SplitHeadline({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;
    import("gsap").then(({ gsap }) => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        gsap.from(el.querySelectorAll(".line > span"), {
          yPercent: 110,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.12,
        });
      }, el);
    });
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <h1 ref={ref} className={className}>
      {children}
    </h1>
  );
}

export function Line({ children }: { children: ReactNode }) {
  return (
    <span className="line block overflow-hidden pb-[0.08em]">
      <span className="block">{children}</span>
    </span>
  );
}
