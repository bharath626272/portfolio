import React from "react";
import { motion } from "framer-motion";
import { SKILL_GROUPS } from "../../lib/data";
import { EASE } from "../../lib/motion";

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative max-w-[1500px] mx-auto px-6 md:px-10 py-20 sm:py-28 md:py-40 border-t border-[#221f19]"
    >
      <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-10 sm:mb-14">
        <div className="col-span-12 md:col-span-5">
          <p className="number-tag mb-4">— Toolkit / 03</p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, ease: EASE }}
            className="font-display text-[36px] sm:text-[48px] md:text-[64px] leading-[1] tracking-[-0.02em] text-[var(--bone)]"
          >
            Tools I{" "}
            <span className="hero-word-italic">reach for</span>{" "}
            first.
          </motion.h2>
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-10">
          <p className="text-[15px] sm:text-[16px] leading-[1.55] text-[var(--bone-2)] max-w-[46ch]">
            Not a laundry list — a working set. Everything below has shipped in
            an internship deliverable, a client project, or something I'm
            wrestling with at 2 a.m. this week.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-6 border-t border-[#221f19]">
        {SKILL_GROUPS.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.06 * i }}
            className="col-span-12 sm:col-span-6 lg:col-span-4 border-b border-[#221f19] py-8 sm:pr-6 md:pr-8"
            data-testid={`skill-group-${g.label.toLowerCase()}`}
          >
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-mono text-[11px] text-[var(--acid)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-[24px] sm:text-[26px] text-[var(--bone)]">
                {g.label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="chip">
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
