import React from "react";
import { NAV } from "../data";
import { A } from "../utils";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div>
          <img src={A("logo-white-crop.png")} alt="ZELVA Interiors" className="foot-logo" />
          <p>Bespoke luxury interiors for homes that feel as extraordinary as the people living in them.</p>
        </div>
        <div>
          <h5>Explore</h5>
          {NAV.map(([id, l]) => (<a key={id} href={`#${id}`}>{l}</a>))}
        </div>
        <div>
          <h5>Services</h5>
          <a href="#services">Interior Design</a>
          <a href="#services">Space Planning</a>
          <a href="#services">Bespoke Furniture</a>
          <a href="#services">Kitchen & Bath</a>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© {new Date().getFullYear()} ZELVA Interiors. All rights reserved.</span>
        <span>Crafted with care.</span>
      </div>
    </footer>
  );
}
