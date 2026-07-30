import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROFILE } from "../../lib/data";
import { EASE } from "../../lib/motion";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], [-40, 80]);

  return (
    <section
      id="about"
      ref={ref}
      data-testid="about-section"
      className="relative max-w-[1500px] mx-auto px-6 md:px-10 py-20 sm:py-28 md:py-40"
    >
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5">
          <div className="md:sticky md:top-28">
            <div className="spotlight-frame aspect-[4/5] rounded-sm">
              <motion.div
                style={{ y: yImage }}
                className="absolute inset-0 grid place-items-center"
              >
                <div className="text-center">
                  <div
                    className="mx-auto w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full grid place-items-center"
                    style={{
                      background:
                        "conic-gradient(from 220deg, #d8ff3b, #ff5b1f, #d8ff3b)",
                    }}
                  >
                    <div className="w-[92%] h-[92%] rounded-full bg-[#0f0e0a] grid place-items-center font-display text-[54px] sm:text-[72px] md:text-[96px] text-[var(--bone)]">
                      {PROFILE.monogram.slice(0, 1)}
                    </div>
                  </div>
                  <p className="mt-4 sm:mt-6 font-mono uppercase tracking-widest text-[11px] text-[var(--muted)]">
                    {PROFILE.monogram} · {PROFILE.location}
                  </p>
                </div>
              </motion.div>

              {/* corner labels */}
              <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
                Fig. 01
              </div>
              <div className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
                Studio Portrait
              </div>
              <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
                Bharath — 2026
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-[var(--acid)]">
                ●REC
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-7 md:pl-12">
          <p className="number-tag mb-4 sm:mb-6">— About / 02</p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, ease: EASE }}
            className="font-display text-[32px] sm:text-[44px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-[var(--bone)]"
          >
            A young engineer with a{" "}
            <span className="hero-word-italic">
              short résumé and a long list
            </span>{" "}
            of things I want to build.
          </motion.h2>

          <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-y-6 gap-x-6 sm:gap-x-8 max-w-xl">
            <Stat n="1.5+" l="Years shipping" />
            <Stat n="8.0" l="MCA CGPA" />
            <Stat n="03" l="Live projects" />
            <Stat n="∞" l="Curiosity" />
          </div>

          <div className="mt-8 sm:mt-12 space-y-5 sm:space-y-6 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.6] text-[var(--bone-2)] max-w-[62ch]">
            <p>
              I'm a Master of Computer Applications graduate from Bangalore
              working at the intersection of clean React interfaces and
              well-shaped databases. Six months inside CGS taught me how big
              enterprise software really behaves — the joy of stored procedures,
              the pain of long release trains, the discipline of code review.
            </p>
            <p>
              Now I ship small, fast, side-projects: React sites for real
              clients, MATLAB experiments on brain scans, and this very
              portfolio — obsessive about tiny details you probably won't notice
              until they're missing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }) {
  return (
    <div>
      <div className="font-display text-[40px] sm:text-[48px] md:text-[52px] leading-none text-[var(--bone)]">
        {n}
      </div>
      <div className="mt-2 font-mono uppercase text-[10px] sm:text-[11px] tracking-widest text-[var(--muted)]">
        {l}
      </div>
    </div>
  );
}
