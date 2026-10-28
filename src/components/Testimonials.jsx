import React, { useEffect, useState } from "react";
import { TESTIMONIALS } from "../data";
import SectionHead from "./SectionHead";

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setI((v) => (v + 1) % TESTIMONIALS.length), 7000);
    return () => clearTimeout(t);
  }, [i]);
  const t = TESTIMONIALS[i];
  return (
    <section id="testimonials" className="section testimonials">
      <div className="wrap narrow">
        <SectionHead center eyebrow="Client Voices" title="Words from <em>our homeowners</em>" />
        <div className="quote-box">
          <span className="qmark">“</span>
          <div key={i} className="quote-anim">
            <p className="quote">{t.q}</p>
            <div className="who"><strong>{t.n}</strong><span>{t.r}</span></div>
          </div>
          <div className="dots">
            {TESTIMONIALS.map((_, k) => (
              <button key={k} className={k === i ? "on" : ""} onClick={() => setI(k)} aria-label={`Testimonial ${k + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
