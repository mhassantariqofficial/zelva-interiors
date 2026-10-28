export const A = (f) => `/assets/${f}`;
export const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
