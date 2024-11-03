"use client"
import React, { useEffect } from "react";
import Hero from "./hero";
import Pictures from "./second";
import Benefits from "./third";
import Gallery from "./gallery";
import Footer from "./footer";
import Lenis from "lenis";

const Main = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    // lenis.on("scroll", (e) => {
    //   console.log(e);
    // });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <Hero />
      <div className="px-[30px]">
        <Pictures />
        <Benefits />
      </div>
      <Gallery />
      <Footer />
    </div>
  );
};

export default Main;
