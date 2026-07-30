import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROFILE } from "../../lib/data";
import { EASE } from "../../lib/motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFeedbackMsg("Please fill out all fields.");
      return;
    }

    setStatus("sending");
    setFeedbackMsg("");

    try {
      const scriptUrl =
        process.env.REACT_APP_GOOGLE_SCRIPT_URL ||
        "https://script.google.com/macros/s/AKfycbz3_fdlBKP563mWrGNXp27oYLUl-I0eyBz6BNLzeKeb2iwwHHcBXzrY_E9ogNhLlRn_lQ/exec";

      // Send contact data to Google Apps Script Web App connected to Google Sheet
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(formData),
      });

      setStatus("success");
      setFeedbackMsg("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      // Fallback: Open Gmail compose pre-filled with subject & body
      console.warn("Form submission fallback to Gmail web compose:", err);
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        PROFILE.email
      )}&su=${encodeURIComponent(`[Website Inquiry] ${formData.subject}`)}&body=${encodeURIComponent(
        `Hi Bharath,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.open(gmailUrl, "_blank", "noopener,noreferrer");
      setStatus("success");
      setFeedbackMsg("Opening Gmail compose with your message details...");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative max-w-[1500px] mx-auto px-6 md:px-10 pt-20 sm:pt-28 md:pt-40 pb-16 sm:pb-24"
    >
      <p className="number-tag mb-4 sm:mb-6">— Say hello / 05</p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.1, ease: EASE }}
        className="font-display text-[28px] sm:text-[40px] md:text-[54px] lg:text-[68px] leading-[1.05] tracking-[-0.02em] text-[var(--bone)] max-w-[18ch]"
      >
        Let's build{" "}
        <span className="hero-word-italic">
          something
        </span>{" "}
        together.
      </motion.h2>

      <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-12 gap-8 lg:gap-12">
        {/* Contact Form */}
        <div className="col-span-12 lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            data-testid="contact-form"
            className="space-y-6 bg-[#11100d]/60 border border-[#221f19] p-6 sm:p-8 rounded-lg"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-[11px] uppercase tracking-widest text-[var(--muted)] mb-2"
                >
                  <span className="text-[var(--acid)] mr-1.5">01</span> Your Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={handleChange}
                  data-testid="contact-input-name"
                  className="w-full bg-[#161410] border border-[#2a261f] focus:border-[var(--acid)] text-[var(--bone)] px-4 py-3 rounded font-sans text-[14px] placeholder-[var(--muted)]/50 outline-none transition-colors"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-[11px] uppercase tracking-widest text-[var(--muted)] mb-2"
                >
                  <span className="text-[var(--acid)] mr-1.5">02</span> Email Address *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  data-testid="contact-input-email"
                  className="w-full bg-[#161410] border border-[#2a261f] focus:border-[var(--acid)] text-[var(--bone)] px-4 py-3 rounded font-sans text-[14px] placeholder-[var(--muted)]/50 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div>
              <label
                htmlFor="contact-subject"
                className="block font-mono text-[11px] uppercase tracking-widest text-[var(--muted)] mb-2"
              >
                <span className="text-[var(--acid)] mr-1.5">03</span> Subject *
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                placeholder="e.g. Project Inquiry / Web Development"
                value={formData.subject}
                onChange={handleChange}
                data-testid="contact-input-subject"
                className="w-full bg-[#161410] border border-[#2a261f] focus:border-[var(--acid)] text-[var(--bone)] px-4 py-3 rounded font-sans text-[14px] placeholder-[var(--muted)]/50 outline-none transition-colors"
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="contact-message"
                className="block font-mono text-[11px] uppercase tracking-widest text-[var(--muted)] mb-2"
              >
                <span className="text-[var(--acid)] mr-1.5">04</span> Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                placeholder="Tell me about your project, timeline, or idea..."
                value={formData.message}
                onChange={handleChange}
                data-testid="contact-input-message"
                className="w-full bg-[#161410] border border-[#2a261f] focus:border-[var(--acid)] text-[var(--bone)] px-4 py-3 rounded font-sans text-[14px] placeholder-[var(--muted)]/50 outline-none transition-colors resize-y min-h-[120px]"
              />
            </div>

            {/* Submit Button & Feedback Message */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                data-testid="contact-submit-button"
                className="group inline-flex items-center gap-4 rounded-full bg-[var(--acid)] text-[var(--ink)] pl-6 pr-2 py-3 font-mono uppercase text-[12px] sm:text-[13px] tracking-widest hover:bg-[var(--bone)] transition-colors disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--ink)] text-[var(--acid)] grid place-items-center group-hover:rotate-45 transition-transform duration-500 font-bold">
                  {status === "sending" ? "…" : "↗"}
                </span>
              </button>

              {feedbackMsg && (
                <p
                  className={`font-mono text-[12px] ${
                    status === "success" ? "text-[var(--acid)]" : "text-[var(--rust)]"
                  }`}
                >
                  {feedbackMsg}
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Contact Info & Socials Sidebar */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-between">
          <div>
            <p className="number-tag mb-4">— Direct Reach</p>
            <p className="font-mono text-[12px] uppercase tracking-widest text-[var(--muted)]">
              Prefer direct email?
            </p>
            <a
              href={PROFILE.gmailComposeUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-email-link"
              className="mt-2 block font-display text-[20px] sm:text-[24px] text-[var(--bone)] hover:text-[var(--acid)] transition-colors break-words underline decoration-1 underline-offset-4 decoration-[#332f26] hover:decoration-[var(--acid)]"
            >
              {PROFILE.email}
            </a>
            <a
              href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
              data-testid="contact-phone-link"
              className="mt-3 inline-block font-mono text-[12px] sm:text-[13px] tracking-widest text-[var(--bone-2)] hover:text-[var(--acid)] transition-colors"
            >
              {PROFILE.phone}
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-[#221f19]">
            <p className="number-tag mb-4">— Elsewhere</p>
            <ul className="space-y-1">
              {PROFILE.socials.map((s, i) => (
                <li key={s.label} className="border-b border-[#221f19]">
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`social-${s.label.toLowerCase().replace(/\s/g, "-")}`}
                    className="group flex items-center justify-between py-3 sm:py-3.5 hover:pl-3 transition-all duration-500"
                  >
                    <span className="flex items-center gap-3 sm:gap-4">
                      <span className="font-mono text-[11px] text-[var(--muted)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[18px] sm:text-[20px] text-[var(--bone)] group-hover:text-[var(--acid)] transition-colors">
                        {s.label}
                      </span>
                    </span>
                    <span className="font-mono uppercase text-[10px] text-[var(--muted)] tracking-widest group-hover:text-[var(--acid)] transition-colors">
                      ↗ Open
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
