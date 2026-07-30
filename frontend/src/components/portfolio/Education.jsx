import React from "react";
import { motion } from "framer-motion";
import { EDUCATION } from "../../lib/data";
import { EASE } from "../../lib/motion";

export default function Education() {
  return (
    <section
      id="education"
      data-testid="education-section"
      className="relative max-w-[1500px] mx-auto px-6 md:px-10 py-20 sm:py-28 md:py-40 border-t border-[#221f19]"
    >
      <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-10 sm:mb-14">
        <div className="col-span-12 md:col-span-6">
          <p className="number-tag mb-4">— Learning path</p>
          <h2 className="font-display text-[36px] sm:text-[48px] md:text-[64px] leading-[1] tracking-[-0.02em] text-[var(--bone)]">
            Where I{" "}
            <span className="hero-word-italic">studied.</span>
          </h2>
        </div>
      </div>

      <div className="border-t border-[#221f19]">
        {EDUCATION.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.05 * i }}
            className="grid grid-cols-12 gap-4 sm:gap-6 py-6 sm:py-8 border-b border-[#221f19] items-baseline hover:bg-[#12100c] transition-colors"
            data-testid={`education-row-${i}`}
          >
            <div className="col-span-2 md:col-span-1 font-mono text-[12px] tracking-widest text-[var(--acid)]">
              0{i + 1}
            </div>
            <div className="col-span-10 md:col-span-5">
              <div className="font-display text-[20px] sm:text-[24px] md:text-[28px] text-[var(--bone)] leading-tight">
                {e.degree}
              </div>
              <div className="text-[13px] sm:text-[14px] text-[var(--bone-2)] mt-1">
                {e.school}
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 font-mono uppercase text-[11px] sm:text-[12px] tracking-widest text-[var(--muted)] pl-7 md:pl-0">
              {e.period}
            </div>
            <div className="col-span-6 md:col-span-3 md:text-right font-mono uppercase text-[11px] sm:text-[12px] tracking-widest text-[var(--bone)] text-right">
              {e.score}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
