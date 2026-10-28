import React from "react";
import { useParallax } from "../hooks";
import { A } from "../utils";
import Reveal from "./Reveal";

export default function Banner() {
  const img = useParallax(0.15);
  return (
    <section className="banner">
      <img ref={img} src={A("Chairs_near_window.jpg")} alt="" />
      <div className="banner-veil" />
      <Reveal className="banner-text">
        <span className="eyebrow">Our Philosophy</span>
        <h2>“Luxury is not what you add.<br />It is how <em>beautifully</em> a space makes you feel.”</h2>
      </Reveal>
    </section>
  );
}
