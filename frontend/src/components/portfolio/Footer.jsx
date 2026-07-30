import React, { useEffect, useState } from "react";
import { PROFILE } from "../../lib/data";

export default function Footer() {
  const [year] = useState(new Date().getFullYear());
  return (
    <footer
      data-testid="site-footer"
      className="relative max-w-[1500px] mx-auto px-6 md:px-10 pt-12 sm:pt-16 pb-10 border-t border-[#221f19]"
    >
      <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
        <div className="col-span-12 md:col-span-6">
          <div className="font-display text-[32px] sm:text-[44px] md:text-[58px] lg:text-[72px] leading-[0.95] tracking-[-0.02em] text-[var(--bone)]">
            {PROFILE.first}.
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 md:pl-10">
          <div>
            <div className="number-tag mb-2">— Local time</div>
            <div className="font-mono text-[12px] sm:text-[13px] text-[var(--bone)]">
              {PROFILE.timezone}
            </div>
          </div>
          <div>
            <div className="number-tag mb-2">— Base</div>
            <div className="font-mono text-[12px] sm:text-[13px] text-[var(--bone)]">
              {PROFILE.location}
            </div>
          </div>
          <div className="col-span-2">
            <div className="number-tag mb-2">— Status</div>
            <div className="font-mono text-[12px] sm:text-[13px] text-[var(--acid)] flex items-center gap-2">
              <span className="available-dot" />
              Open to full-time roles · Dec 2025 →
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono uppercase tracking-widest text-[10px] sm:text-[11px] text-[var(--muted)]">
        <span>© {year} {PROFILE.fullName}. All rights reserved.</span>
        <span>Handcrafted · React · Framer Motion · Lenis</span>
        <a
          href="#top"
          className="link-underline text-[var(--bone)] py-1"
          data-testid="footer-back-top"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
