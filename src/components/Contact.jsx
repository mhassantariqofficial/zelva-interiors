import React, { useState } from "react";
import { A } from "../utils";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Tilt from "./Tilt";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="section contact">
      <div className="contact-bg"><img src={A("Modern_Bedroom_1.jpg")} alt="" /></div>
      <div className="wrap contact-grid">
        <div>
          <SectionHead eyebrow="Let’s Talk" title="Begin your <em>dream interior</em>" text="Tell us about your home and your vision. We’ll reply within one working day to arrange a complimentary consultation." />
          <Reveal delay={0.2}>
            <ul className="info">
              <li><span>Studio</span>ZELVA Interiors Design Studio</li>
              <li><span>Email</span>hello@zelvainteriors.com</li>
              <li><span>Phone</span>+00 000 000 0000</li>
              <li><span>Hours</span>Mon – Sat · 9:00 AM – 6:00 PM</li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <Tilt className="form-card" max={4}>
            {sent ? (
              <div className="thanks">
                <div className="check">✓</div>
                <h3>Thank you</h3>
                <p>Your enquiry has been received. A member of our studio will be in touch very soon.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <h3>Request a Consultation</h3>
                <div className="row">
                  <label>Full Name<input required type="text" placeholder="Your name" /></label>
                  <label>Email<input required type="email" placeholder="you@email.com" /></label>
                </div>
                <div className="row">
                  <label>Phone<input type="tel" placeholder="Phone number" /></label>
                  <label>
                    Project Type
                    <select defaultValue="">
                      <option value="" disabled>Select a service</option>
                      <option>Full Home Design</option>
                      <option>Living Room</option>
                      <option>Bedroom</option>
                      <option>Kitchen</option>
                      <option>Bathroom</option>
                    </select>
                  </label>
                </div>
                <label>Tell us about your project<textarea rows="4" placeholder="Style, size, timeline, budget…" /></label>
                <button className="btn full" type="submit">Send Enquiry</button>
              </form>
            )}
          </Tilt>
        </Reveal>
      </div>
    </section>
  );
}
