import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROFILE } from "../../lib/data";
import { EASE } from "../../lib/motion";

const HEADLINE = [
  { text: "I build", italic: false },
  { text: "interfaces —", italic: false },
  { text: "that feel", italic: false, tail: " alive.", tailItalic: true },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yOrb = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const yMono = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scaleMono = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full overflow-hidden pt-24 md:pt-28"
    >
      {/* orb */}
      <motion.div
        style={{ y: yOrb }}
        className="hero-orb"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: EASE, delay: 0.1 }}
        // positioning
      >
        <span className="sr-only">glow</span>
      </motion.div>
      <div
        className="hero-orb"
        style={{ top: "10%", left: "-8%" }}
      />
      <div
        className="hero-orb"
        style={{
          bottom: "-10%",
          right: "-10%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,91,31,0.35), transparent 65%)",
        }}
      />

      {/* diagonal stripes bg */}
      <div className="absolute inset-0 diagonal-stripes opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-10 pt-4 md:pt-14">
        {/* meta row */}
        <div className="flex flex-row items-start justify-between mb-10 sm:mb-14 md:mb-24 gap-4">
          <div>
            <p className="number-tag mb-2 sm:mb-3">— Portfolio · v01 · MMXXVI</p>
            <p className="font-mono text-[11px] sm:text-[12px] text-[var(--muted)] max-w-[22ch] uppercase leading-relaxed">
              {PROFILE.location} — Building on the internet.
            </p>
          </div>
          <div className="text-right">
            <p className="number-tag mb-2 sm:mb-3">Now</p>
            <p className="font-mono text-[11px] sm:text-[12px] text-[var(--bone)] uppercase tracking-widest">
              Open to full-time <br className="hidden sm:inline" />
              engineering roles
            </p>
          </div>
        </div>

        {/* Headline masked reveal */}
        <h1
          data-testid="hero-headline"
          className="font-display text-[30px] sm:text-[44px] md:text-[58px] lg:text-[72px] leading-[1.05] tracking-[-0.02em] text-[var(--bone)] max-w-[18ch]"
        >
          {HEADLINE.map((line, i) => (
            <span
              key={i}
              className="line-mask"
              style={{ display: "block" }}
            >
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  ease: EASE,
                  delay: 0.35 + i * 0.14,
                }}
                style={{ display: "inline-block" }}
              >
                {line.text}
                {line.tail && (
                  <span
                    className={line.tailItalic ? "hero-word-italic" : ""}
                  >
                    {line.tail}
                  </span>
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Sub-block */}
        <div className="mt-12 sm:mt-16 md:mt-24 grid grid-cols-12 gap-6 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.1 }}
            className="col-span-12 md:col-span-6 lg:col-span-4 md:col-start-7 lg:col-start-9"
          >
            <p className="text-[15px] sm:text-[16px] leading-[1.55] text-[var(--bone-2)]">
              {PROFILE.intro}
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4">
              <a
                data-testid="hero-cta-work"
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--acid)] text-[var(--ink)] pl-5 pr-2 py-2 font-mono uppercase text-[12px] tracking-widest hover:bg-[var(--bone)] transition-colors"
              >
                See selected work
                <span className="w-8 h-8 rounded-full bg-[var(--ink)] text-[var(--acid)] grid place-items-center group-hover:rotate-45 transition-transform duration-500">
                  ↗
                </span>
              </a>
              <a
                data-testid="hero-cta-resume"
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="link-underline font-mono uppercase text-[12px] tracking-widest text-[var(--bone)] py-2"
              >
                Résumé.pdf
              </a>
              <a
                data-testid="hero-cta-email"
                href={PROFILE.gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                className="link-underline font-mono uppercase text-[12px] tracking-widest text-[var(--acid)] py-2"
              >
                Email Me ↗
              </a>
            </div>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.div
          style={{ y: yMono, scale: scaleMono }}
          className="mt-12 sm:mt-16 md:mt-24 flex items-center justify-between border-t border-[#221f19] pt-6 font-mono uppercase text-[11px] tracking-widest text-[var(--muted)]"
        >
          <span>↓ Scroll — Chapter 01 of 04</span>
          <span>{PROFILE.timezone}</span>
        </motion.div>
      </div>
    </section>
  );
}
