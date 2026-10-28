import React from "react";
import { useParallax } from "../hooks";
import { A } from "../utils";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function About() {
  const big = useParallax(0.08);
  const small = useParallax(-0.07);
  return (
    <section id="about" className="section about">
      <div className="wrap about-grid">
        <div className="about-visual">
          <div className="about-img big" ref={big}><img src={A("Sofa_with_Window.jpg")} alt="Cozy modern living room" /></div>
          <div className="about-img small" ref={small}><img src={A("Modern_Kitchen_3.jpg")} alt="Sage green modern kitchen" /></div>
          <div className="badge3d">
            <strong>12</strong>
            <span>Years of<br />Craft</span>
          </div>
        </div>

        <div className="about-copy">
          <SectionHead eyebrow="The Studio" title="Where quiet luxury meets <em>thoughtful design</em>" />
          <Reveal delay={0.1}>
            <p>At ZELVA Interiors we believe a home should feel effortless. Our studio blends natural materials, layered light and refined proportions to create interiors that are as comfortable as they are beautiful.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>Every project begins with your story. We translate it into a cohesive design language, from the grandest architectural gesture to the smallest finishing touch, and manage every step so the journey is as inspiring as the result.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <ul className="ticks">
              <li>Tailored concepts, never templates</li>
              <li>Photoreal 3D visualisation before build</li>
              <li>Trusted craftsmen and premium materials</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
