import React from "react";
import { SERVICES } from "../data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Tilt from "./Tilt";

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="wrap">
        <SectionHead center eyebrow="What We Do" title="Complete design, <em>crafted end to end</em>" text="A full-service studio offering everything you need to turn a house into an extraordinary home." />
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 0.1}>
              <Tilt className="service" max={8}>
                <span className="s-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="s-line" />
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
