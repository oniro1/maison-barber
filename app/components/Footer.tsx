"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const socials = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Book", href: "#book" },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer ref={ref} className="relative bg-coal border-t border-border">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4"
          >
            <p className="font-display text-3xl font-light tracking-[0.3em] text-cream uppercase mb-4">
              MAISON
            </p>
            <p className="font-body font-light text-sm text-muted leading-relaxed max-w-xs">
              Precision. Style. Identity.
              <br />A luxury barbershop in the heart of Milano.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 md:col-start-6"
          >
            <p className="font-label text-[10px] tracking-[0.3em] uppercase text-gold mb-6">
              Navigate
            </p>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body font-light text-sm text-muted hover:text-cream transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-3 md:col-start-9"
          >
            <p className="font-label text-[10px] tracking-[0.3em] uppercase text-gold mb-6">
              Find Us
            </p>
            <div className="flex flex-col gap-3 mb-8">
              <p className="font-body font-light text-sm text-muted">
                Via della Moda, 1<br />
                20121 Milano, Italy
              </p>
              <a
                href="tel:+390212345678"
                className="font-body font-light text-sm text-muted hover:text-cream transition-colors duration-300"
              >
                +39 02 1234 5678
              </a>
              <a
                href="mailto:hello@maison.it"
                className="font-body font-light text-sm text-muted hover:text-cream transition-colors duration-300"
              >
                hello@maison.it
              </a>
            </div>

            {/* Hours */}
            <p className="font-label text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
              Hours
            </p>
            <div className="flex flex-col gap-1">
              {[
                ["Mon — Fri", "9:00 — 20:00"],
                ["Saturday",  "9:00 — 18:00"],
                ["Sunday",    "Closed"],
              ].map(([day, time]) => (
                <div key={day} className="flex justify-between gap-4 max-w-[220px]">
                  <span className="font-body font-light text-xs text-muted">{day}</span>
                  <span className="font-body font-light text-xs text-dim">{time}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-label text-[10px] tracking-[0.2em] uppercase text-muted">
            © {new Date().getFullYear()} MAISON Barbershop. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="font-label text-[10px] tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors duration-300"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
