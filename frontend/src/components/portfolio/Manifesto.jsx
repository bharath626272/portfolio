import React from "react";
import { motion } from "framer-motion";
import { CHAPTERS } from "../../lib/data";
import { EASE } from "../../lib/motion";

export default function Manifesto() {
  return (
    <section
      id="craft"
      data-testid="manifesto-section"
      className="relative max-w-[1500px] mx-auto px-6 md:px-10 py-20 sm:py-28 md:py-40"
    >
      <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-10 sm:mb-16">
        <div className="col-span-12 md:col-span-4">
          <p className="number-tag">— Manifesto</p>
        </div>
        <div className="col-span-12 md:col-span-8">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, ease: EASE }}
            className="font-display text-[36px] sm:text-[48px] md:text-[68px] leading-[1.05] tracking-[-0.02em] text-[var(--bone)] max-w-[16ch]"
          >
            Four short chapters
            <br className="hidden sm:inline" />
            about <span className="hero-word-italic">how I work.</span>
          </motion.h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-y-0">
        {CHAPTERS.map((c, i) => (
          <motion.div
            key={c.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.08 * i }}
            className="col-span-12 grid grid-cols-12 gap-4 sm:gap-6 py-8 sm:py-10 border-t border-[#221f19]"
            data-testid={`manifesto-chapter-${c.n}`}
          >
            <div className="col-span-3 sm:col-span-2">
              <span className="font-mono text-[13px] sm:text-[14px] text-[var(--acid)] tracking-widest">
                {c.n}
              </span>
            </div>
            <div className="col-span-9 sm:col-span-4">
              <h3 className="font-display text-[24px] sm:text-[30px] md:text-[36px] text-[var(--bone)]">
                {c.title}
              </h3>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 mt-2 md:mt-0">
              <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-[1.55] text-[var(--bone-2)]">
                {c.body}
              </p>
            </div>
          </motion.div>
        ))}
        <div className="col-span-12 border-t border-[#221f19]" />
      </div>
    </section>
  );
}
