import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "../../lib/data";
import { EASE } from "../../lib/motion";

function ProjectCard({ p, index, reverse }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: EASE }}
      data-testid={`project-card-${p.n}`}
      className={`grid grid-cols-12 gap-6 items-center border-t border-[#221f19] py-12 sm:py-16 md:py-24 ${
        reverse ? "" : ""
      }`}
    >
      <div
        className={`col-span-12 md:col-span-7 project-card order-1 ${
          reverse ? "md:col-start-6 md:order-2" : "md:order-1"
        }`}
      >
        <a
          href={p.href}
          target="_blank"
          rel="noreferrer"
          className="block group"
          data-testid={`project-link-${p.n}`}
        >
          <div className="spotlight-frame aspect-[16/10] overflow-hidden rounded-sm">
            <motion.div
              style={{ y }}
              className="cover absolute inset-[-8%] bg-cover bg-center"
              // background image via inline style
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0c0b08]/60" />
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[var(--bone)]/80">
              {p.n} — {p.kicker}
            </div>
            <div className="absolute top-4 right-4 sm:top-5 sm:right-5 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[var(--acid)]">
              {p.year}
            </div>
            <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--acid)] text-[var(--ink)] grid place-items-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:rotate-45 transition-all duration-500">
              ↗
            </div>
          </div>
        </a>
      </div>
      <div className={`col-span-12 md:col-span-5 order-2 ${reverse ? "md:order-1 md:pr-10" : "md:order-2 md:pl-10"}`}>
        <p className="font-mono uppercase tracking-widest text-[10px] sm:text-[11px] text-[var(--muted)] mb-3 sm:mb-4">
          Fig. {p.n} / Selected work
        </p>
        <h3 className="font-display text-[32px] sm:text-[44px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-[var(--bone)]">
          {p.title}
        </h3>
        <p className="mt-3 sm:mt-4 text-[15px] sm:text-[16px] leading-[1.6] text-[var(--bone-2)] max-w-[42ch]">
          {p.blurb}
        </p>
        <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 sm:mt-6 flex flex-wrap gap-6 font-mono uppercase text-[12px] tracking-widest">
          {p.href !== "#" && (
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-[var(--acid)] py-1"
            >
              Visit site ↗
            </a>
          )}
          {p.repo !== "#" && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-[var(--bone)] py-1"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      data-testid="projects-section"
      className="relative max-w-[1500px] mx-auto px-6 md:px-10 py-20 sm:py-28 md:py-40"
    >
      <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-6">
        <div className="col-span-12 md:col-span-6">
          <p className="number-tag mb-4">— Selected Work / 01</p>
          <h2 className="font-display text-[36px] sm:text-[50px] md:text-[72px] leading-[1] tracking-[-0.02em] text-[var(--bone)]">
            Things I've{" "}
            <span className="hero-word-italic">built</span>{" "}
            recently.
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-8">
          <p className="text-[15px] leading-[1.55] text-[var(--bone-2)]">
            Three pieces of software — one deployed for a real client, one live
            marketing site, and a research project I keep coming back to.
          </p>
        </div>
      </div>

      <div className="mt-4">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.n} p={p} index={i} reverse={i % 2 === 1} />
        ))}
        <div className="border-t border-[#221f19]" />
      </div>
    </section>
  );
}
