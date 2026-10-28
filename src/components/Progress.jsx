import React, { useRef } from "react";
import { useScrollFrame } from "../hooks";

export default function Progress() {
  const ref = useRef(null);
  useScrollFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    if (ref.current) ref.current.style.transform = `scaleX(${p})`;
  });
  return <div className="progress" ref={ref} />;
}
