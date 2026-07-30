import React from "react";

const WORDS = [
  "React",
  "PostgreSQL",
  "TypeScript",
  "Express",
  "Node",
  "Vercel",
  "Design Systems",
  "Full-Stack",
  "Ship Weekly",
  "REST APIs",
  "SQL",
  "Git",
];

export default function Marquee() {
  const line = WORDS.join("  ✦  ");
  return (
    <section
      data-testid="marquee-section"
      className="ticker-strip py-4 md:py-6 border-y border-[#221f19]/80 overflow-hidden bg-[var(--ink)]"
    >
      <div className="marquee-track">
        <span className="big-marquee-text pr-10 text-[var(--bone)]">
          {line}
          {"  ✦  "}
          {line}
          {"  ✦  "}
        </span>
        <span className="big-marquee-text pr-10 text-[var(--bone)]">
          {line}
          {"  ✦  "}
          {line}
          {"  ✦  "}
        </span>
      </div>
    </section>
  );
}
