import React, { useCallback, useEffect, useMemo, useState } from "react";
import { PROJECTS, FILTERS } from "../data";
import { A } from "../utils";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Tilt from "./Tilt";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [light, setLight] = useState(null);
  const [more, setMore] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const on = () => setMobile(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  const list = useMemo(() => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter)), [filter]);

  const step = useCallback((d) => setLight((i) => (i === null ? i : (i + d + list.length) % list.length)), [list.length]);

  useEffect(() => {
    if (light === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLight(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [light, step]);

  const shown = mobile && !more ? list.slice(0, 6) : list;
  const current = light !== null ? list[light] : null;

  return (
    <section id="portfolio" className="section portfolio">
      <div className="wrap">
        <SectionHead eyebrow="Selected Work" title="A portfolio of <em>considered spaces</em>" text="Explore a collection of living rooms, bedrooms, kitchens and bathrooms designed by our studio." />
        <Reveal className="filters">
          {FILTERS.map((f) => (
            <button key={f} className={filter === f ? "on" : ""} onClick={() => { setFilter(f); setLight(null); setMore(false); }}>{f}</button>
          ))}
        </Reveal>

        <div className="gallery">
          {shown.map((p, i) => (
            <div key={`${filter}-${p.img}`} className="g-item pop" style={{ animationDelay: `${i * 0.05}s` }}>
              <Tilt className="proj" max={7} onClick={() => setLight(i)}>
                <img src={A(p.img)} alt={p.title} loading="lazy" />
                <div className="proj-info">
                  <span>{p.cat} · {p.tag}</span>
                  <h4>{p.title}</h4>
                </div>
                <span className="plus">+</span>
              </Tilt>
            </div>
          ))}
        </div>
        {mobile && !more && list.length > 6 && (
          <div className="more-wrap">
            <button className="btn btn-ghost" onClick={() => setMore(true)}>View All Projects ({list.length})</button>
          </div>
        )}
      </div>

      {current && (
        <div className="lightbox" onClick={() => setLight(null)}>
          <button className="lb-close" aria-label="Close">×</button>
          <button className="lb-nav prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1); }}>‹</button>
          <figure key={current.img} onClick={(e) => e.stopPropagation()}>
            <img src={A(current.img)} alt={current.title} />
            <figcaption>
              <span>{current.cat} · {current.tag}</span>
              <h4>{current.title}</h4>
            </figcaption>
          </figure>
          <button className="lb-nav next" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1); }}>›</button>
        </div>
      )}
    </section>
  );
}
