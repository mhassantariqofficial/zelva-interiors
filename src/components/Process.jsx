import React from "react";
import { PROCESS } from "../data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="wrap">
        <SectionHead center eyebrow="How We Work" title="A calm, <em>transparent process</em>" text="Four clear stages that take you from first idea to a finished home." />
        <div className="steps">
          {PROCESS.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.12} className="step">
              <div className="cube">
                <div className="cube-inner">
                  <span className="f front">{i + 1}</span>
                  <span className="f back">{i + 1}</span>
                  <span className="f right" />
                  <span className="f left" />
                  <span className="f top" />
                  <span className="f bottom" />
                </div>
              </div>
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
