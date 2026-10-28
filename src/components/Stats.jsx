import React from "react";
import { STATS } from "../data";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function Stats() {
  return (
    <section className="stats">
      <div className="wrap stats-grid">
        {STATS.map(([n, s, l], i) => (
          <Reveal key={l} delay={i * 0.1} className="stat">
            <div className="num"><Counter to={n} suffix={s} /></div>
            <div className="lbl">{l}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
