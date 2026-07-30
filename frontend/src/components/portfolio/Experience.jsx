import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE } from "../../lib/data";
import { EASE } from "../../lib/motion";

export default function Experience() {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative max-w-[1500px] mx-auto px-6 md:px-10 py-20 sm:py-28 md:py-40"
    >
      <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-10 sm:mb-16">
        <div className="col-span-12 md:col-span-5">
          <p className="number-tag mb-4">— Experience / 04</p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, ease: EASE }}
            className="font-display text-[36px] sm:text-[48px] md:text-[64px] leading-[1] tracking-[-0.02em] text-[var(--bone)]"
          >
            Where I've{" "}
            <span className="hero-word-italic">learned</span>{" "}
            to ship.
          </motion.h2>
        </div>
      </div>

      <div className="border-t border-[#221f19]">
        {EXPERIENCE.map((exp, i) => (
          <motion.article
            key={exp.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.05 * i }}
            data-testid={`experience-item-${exp.n}`}
            className="grid grid-cols-12 gap-4 sm:gap-6 py-8 sm:py-10 border-b border-[#221f19] group hover:bg-[#12100c] transition-colors duration-500"
          >
            <div className="col-span-12 md:col-span-1">
              <span className="font-mono text-[13px] sm:text-[14px] tracking-widest text-[var(--acid)]">
                {exp.n}
              </span>
            </div>
            <div className="col-span-12 md:col-span-4">
              <h3 className="font-display text-[22px] sm:text-[26px] md:text-[30px] leading-tight text-[var(--bone)]">
                {exp.role}
              </h3>
              <p className="mt-2 text-[14px] text-[var(--bone-2)]">
                {exp.company}
              </p>
              <p className="mt-1 font-mono uppercase text-[11px] tracking-widest text-[var(--muted)]">
                {exp.client} · {exp.period}
              </p>
            </div>
            <div className="col-span-12 md:col-span-7 md:pl-8 mt-2 md:mt-0">
              <ul className="space-y-3 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.55] text-[var(--bone-2)]">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="text-[var(--acid)] mt-[10px] w-2 h-[1px] bg-[var(--acid)] flex-none" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
