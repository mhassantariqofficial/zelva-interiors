import React from "react";

export default function Marquee() {
  const items = ["Residential", "Kitchens", "Bathrooms", "Bedrooms", "Living Spaces", "Bespoke Furniture", "Lighting", "Styling"];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i}>{t}<b>✦</b></span>
        ))}
      </div>
    </div>
  );
}
