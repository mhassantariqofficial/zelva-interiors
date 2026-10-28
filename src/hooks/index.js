import { useEffect, useRef, useState } from "react";

/** true once the element has scrolled into view */
export function useInView(once = true, margin = "-80px") {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { setSeen(true); return; }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setSeen(true); if (once) io.disconnect(); }
      },
      { rootMargin: `0px 0px ${margin} 0px`, threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, margin]);
  return [ref, seen];
}

/** runs cb on scroll/resize, throttled with requestAnimationFrame */
export function useScrollFrame(cb) {
  const saved = useRef(cb);
  saved.current = cb;
  useEffect(() => {
    let raf = 0;
    const run = () => { raf = 0; saved.current(); };
    const on = () => { if (!raf) raf = requestAnimationFrame(run); };
    run();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(raf);
    };
  }, []);
}

/** vertical parallax for an element, relative to the viewport centre */
export function useParallax(speed) {
  const ref = useRef(null);
  useScrollFrame(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const offset = r.top + r.height / 2 - window.innerHeight / 2;
    el.style.transform = `translate3d(0, ${(-offset * speed).toFixed(1)}px, 0)`;
  });
  return ref;
}
