import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV, PROFILE } from "../../lib/data";

export default function Nav() {
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const t = () => {
      const d = new Date();
      const h = d.toLocaleTimeString("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(`${h} IST`);
    };
    t();
    const id = setInterval(t, 1000);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => {
      clearInterval(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        data-testid="site-nav"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled || mobileMenuOpen ? "backdrop-blur-md bg-[#0c0b08]/85 border-b border-[#221f19]/60" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-4 md:py-5 flex items-center justify-between text-[13px]">
          <a
            href="#top"
            data-testid="nav-brand"
            className="flex items-center gap-3 font-mono uppercase tracking-widest z-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="w-8 h-8 rounded-full bg-[var(--acid)] text-[var(--ink)] grid place-items-center font-bold text-[11px]">
              {PROFILE.monogram}
            </span>
            <span className="text-[var(--bone)]">
              {PROFILE.first} {PROFILE.last}
              <span className="hidden sm:inline text-[var(--muted)]">
                {"  ·  "}Portfolio 2026
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-mono uppercase tracking-widest">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                data-testid={`nav-${n.label.toLowerCase()}`}
                className="link-underline text-[var(--bone)] hover:text-[var(--acid)] transition-colors"
              >
                <span className="text-[var(--muted)] mr-1">{n.n}</span>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 font-mono uppercase tracking-widest text-[var(--muted)] z-50">
            <span className="hidden sm:inline-flex items-center gap-2">
              <span className="available-dot" />
              Available
            </span>
            <span className="hidden lg:inline">{time}</span>

            {/* Mobile Toggle Button */}
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#332f26] bg-[#14120e] text-[var(--bone)] font-mono text-[11px] uppercase tracking-wider hover:border-[var(--acid)] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <span>{mobileMenuOpen ? "Close" : "Menu"}</span>
              <span className="text-[var(--acid)] font-bold">{mobileMenuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0c0b08]/98 backdrop-blur-xl md:hidden pt-24 px-6 pb-10 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col gap-6 pt-4">
              <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted)] border-b border-[#221f19] pb-3">
                Navigation
              </p>
              {NAV.map((n, idx) => (
                <motion.a
                  key={n.label}
                  href={n.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-[28px] font-display text-[var(--bone)] hover:text-[var(--acid)] transition-colors"
                >
                  <span className="font-mono text-[14px] text-[var(--acid)]">
                    {n.n}
                  </span>
                  <span>{n.label}</span>
                </motion.a>
              ))}
            </div>

            <div className="mt-12 border-t border-[#221f19] pt-6 flex flex-col gap-4">
              <div className="flex items-center justify-between text-[12px] font-mono text-[var(--muted)] uppercase tracking-wider">
                <span>{PROFILE.location}</span>
                <span className="flex items-center gap-2 text-[var(--acid)]">
                  <span className="available-dot" />
                  Available for work
                </span>
              </div>
              <a
                href={PROFILE.gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full text-center py-3 rounded-full bg-[var(--acid)] text-[var(--ink)] font-mono text-[12px] uppercase tracking-widest font-semibold"
              >
                Get in touch ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

