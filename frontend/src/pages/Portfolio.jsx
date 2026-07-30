import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "../components/portfolio/Nav";
import Hero from "../components/portfolio/Hero";
import Marquee from "../components/portfolio/Marquee";
import Manifesto from "../components/portfolio/Manifesto";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Experience from "../components/portfolio/Experience";
import Projects from "../components/portfolio/Projects";
import Education from "../components/portfolio/Education";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";
import SmoothScroll from "../components/portfolio/SmoothScroll";
import { PROFILE } from "../lib/data";
import { EASE } from "../lib/motion";

function Preloader({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] bg-[var(--ink)] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 1, ease: EASE } }}
        >
          <div className="w-full px-6 md:px-10">
            <div className="flex items-center justify-between font-mono uppercase text-[11px] tracking-widest text-[var(--muted)]">
              <span>{PROFILE.fullName}</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Portfolio · Loading
              </motion.span>
            </div>
            <div className="mt-6 h-[1px] w-full bg-[#221f19] overflow-hidden">
              <motion.div
                className="h-full bg-[var(--acid)]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: EASE }}
              />
            </div>
            <div className="mt-10 text-center">
              <motion.div
                className="font-display text-[32px] sm:text-[44px] md:text-[58px] leading-[0.95] tracking-[-0.02em] text-[var(--bone)]"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              >
                Bharath<span className="hero-word-italic">.</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Portfolio() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="grain relative bg-[var(--ink)] text-[var(--bone)] min-h-screen">
      <Preloader done={ready} />
      <SmoothScroll>
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <Manifesto />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
}
