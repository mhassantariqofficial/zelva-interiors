import React, { useRef } from "react";
import { useScrollFrame } from "../hooks";
import { A, scrollToId } from "../utils";

export default function Hero() {
  const stageRef = useRef(null);
  const bgRef = useRef(null);
  const copyRef = useRef(null);

  const onMove = (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    if (stageRef.current) stageRef.current.style.transform = `rotateX(${(-y * 20).toFixed(2)}deg) rotateY(${(x * 28).toFixed(2)}deg)`;
    if (bgRef.current) bgRef.current.style.transform = `translate3d(${(-x * 40).toFixed(1)}px, ${(-y * 28).toFixed(1)}px, 0)`;
  };
  const onLeave = () => {
    if (stageRef.current) stageRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    if (bgRef.current) bgRef.current.style.transform = "translate3d(0,0,0)";
  };

  useScrollFrame(() => {
    const y = window.scrollY;
    if (!copyRef.current) return;
    copyRef.current.style.transform = `translate3d(0, ${Math.min(y, 600) * 0.2}px, 0)`;
    copyRef.current.style.opacity = String(Math.max(0, 1 - y / 500));
  });

  const words = ["Spaces", "designed", "to be"];

  return (
    <section id="top" className="hero" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="hero-bg" ref={bgRef}>
        <img src={A("Modern_Living_Room_1.jpg")} alt="" />
      </div>
      <div className="hero-veil" />
      <div className="orb orb-a" />
      <div className="orb orb-b" />

      <div className="hero-inner">
        <div className="hero-copy" ref={copyRef}>
          <span className="eyebrow fade-up" style={{ animationDelay: "0.3s" }}>Luxury Interior Design Studio</span>
          <h1>
            {words.map((w, i) => (
              <span key={w} className="word" style={{ animationDelay: `${0.5 + i * 0.15}s` }}>{w}{" "}</span>
            ))}
            <em className="word" style={{ animationDelay: "1s" }}>lived in.</em>
          </h1>
          <p className="fade-up" style={{ animationDelay: "1.3s" }}>
            ZELVA Interiors creates bespoke, light-filled homes where timeless craftsmanship meets modern luxury,
            tailored to the way you live.
          </p>
          <div className="hero-cta fade-up" style={{ animationDelay: "1.5s" }}>
            <a href="#portfolio" className="btn" onClick={(e) => { e.preventDefault(); scrollToId("portfolio"); }}>Explore Our Work</a>
            <a href="#contact" className="btn btn-ghost" onClick={(e) => { e.preventDefault(); scrollToId("contact"); }}>Start Your Project</a>
          </div>
        </div>

        <div className="hero-stage-wrap">
          <div className="hero-stage" ref={stageRef}>
            <div className="card3d c1"><img src={A("Modern_Bedroom_3.jpg")} alt="Modern bedroom design" /></div>
            <div className="card3d c2"><img src={A("Living_area.jpg")} alt="Sage living room design" /></div>
            <div className="card3d c3"><img src={A("Modern_Bathroom_3.jpg")} alt="Terracotta bathroom design" /></div>
            <div className="ring" />
          </div>
        </div>
      </div>

      <div className="scroll-cue"><span>Scroll</span><i /></div>
    </section>
  );
}
