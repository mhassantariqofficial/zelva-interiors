import React, { useState } from "react";
import { useScrollFrame } from "../hooks";
import { NAV } from "../data";
import { A, scrollToId } from "../utils";

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useScrollFrame(() => setSolid(window.scrollY > 60));

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className={`nav ${solid ? "solid" : ""}`}>
      <a href="#top" className="nav-logo" onClick={(e) => { setOpen(false); e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <img src={A("logo-white-crop.png")} alt="ZELVA Interiors" />
      </a>
      <nav className={`nav-links ${open ? "open" : ""}`}>
        {NAV.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={(e) => go(e, id)}>{label}</a>
        ))}
        <a href="#contact" className="btn btn-sm" onClick={(e) => go(e, "contact")}>Book a Consultation</a>
      </nav>
      <button className={`burger ${open ? "x" : ""}`} onClick={() => setOpen(!open)} aria-label="Menu">
        <span /><span />
      </button>
    </header>
  );
}
