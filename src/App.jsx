import React from "react";
import Progress from "./components/Progress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Banner from "./components/Banner";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Progress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Services />
        <Portfolio />
        <Banner />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
