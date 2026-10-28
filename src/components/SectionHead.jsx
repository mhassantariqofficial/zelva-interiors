import React from "react";
import Reveal from "./Reveal";

export default function SectionHead({ eyebrow, title, text, center }) {
  return (
    <div className={`section-head ${center ? "center" : ""}`}>
      <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
      <Reveal delay={0.1}><h2 dangerouslySetInnerHTML={{ __html: title }} /></Reveal>
      {text && <Reveal delay={0.2}><p className="lead">{text}</p></Reveal>}
    </div>
  );
}
