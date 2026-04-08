"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import FadeUp from "./FadeUp";

const services = [
  {
    num: "01",
    name: "The Cut",
    description:
      "A precision haircut tailored to your face, lifestyle, and identity. Consultation included. Hot towel finish.",
    detail: "45 — 60 min",
    price: "€ 45",
  },
  {
    num: "02",
    name: "Beard Ritual",
    description:
      "Hot lather, straight razor, sculpted lines. The full beard service — defined, groomed, intentional.",
    detail: "30 — 40 min",
    price: "€ 30",
  },
  {
    num: "03",
    name: "Full Treatment",
    description:
      "The complete experience. Cut, beard, scalp treatment, and hot towel. For the man who wants everything done right.",
    detail: "90 min",
    price: "€ 70",
  },
  {
    num: "04",
    name: "Grey Blending",
    description:
      "A subtle, natural approach to colour that works with your hair, not against it. No harsh lines.",
    detail: "60 — 75 min",
    price: "€ 55",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-40 md:py-56 bg-black overflow-hidden">

      {/* Background number */}
      <div
        aria-hidden
        className="absolute top-16 right-0 font-display text-[20rem] font-bold leading-none text-white/[0.02] pointer-events-none select-none translate-x-8"
      >
        02
      </div>

      <div className="max-w-[1400px] mx-auto px-8 md:px-16">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <FadeUp>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px bg-gold" />
              <span className="font-label text-xs tracking-[0.3em] uppercase text-gold">
                What We Do
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.8rem,5vw,5.5rem)] font-light leading-[1.05] text-cream">
              Services
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="font-body font-light text-base text-muted leading-relaxed max-w-sm self-end mt-auto md:pt-12">
              Each service is performed with the same standard: unhurried, precise,
              and adapted entirely to you.
            </p>
          </FadeUp>
        </div>

        {/* Service list */}
        <div ref={ref}>
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative group cursor-default"
            >
              {/* Hover background */}
              <motion.div
                animate={{ opacity: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-surface pointer-events-none"
              />

              <div className="relative grid grid-cols-12 gap-4 items-center py-8 md:py-10 border-t border-border px-0 md:px-4 transition-all duration-300">
                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <motion.span
                    animate={{ color: hovered === i ? "#b8965a" : "#3a3a3a" }}
                    transition={{ duration: 0.3 }}
                    className="font-display text-2xl font-light"
                  >
                    {s.num}
                  </motion.span>
                </div>

                {/* Name */}
                <div className="col-span-5 md:col-span-3">
                  <motion.h3
                    animate={{ color: hovered === i ? "#f0ece4" : "#888888" }}
                    transition={{ duration: 0.3 }}
                    className="font-display text-2xl md:text-3xl font-light"
                  >
                    {s.name}
                  </motion.h3>
                </div>

                {/* Description — hidden on mobile */}
                <div className="hidden md:block md:col-span-5">
                  <motion.p
                    animate={{ opacity: hovered === i ? 1 : 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="font-body font-light text-sm text-muted leading-relaxed"
                  >
                    {s.description}
                  </motion.p>
                </div>

                {/* Price + duration */}
                <div className="col-span-5 md:col-span-3 text-right">
                  <motion.span
                    animate={{ color: hovered === i ? "#b8965a" : "#f0ece4" }}
                    transition={{ duration: 0.3 }}
                    className="font-display text-2xl font-light block"
                  >
                    {s.price}
                  </motion.span>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-muted">
                    {s.detail}
                  </span>
                </div>

                {/* Arrow */}
                <motion.span
                  animate={{ opacity: hovered === i ? 1 : 0, x: hovered === i ? 0 : -6 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gold text-xl hidden md:block"
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-border" />
        </div>

        {/* Book nudge */}
        <FadeUp delay={0.2} className="mt-16 flex justify-end">
          <a
            href="#book"
            className="inline-flex items-center gap-3 font-label text-xs tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors duration-300 group"
          >
            <span>Book a session</span>
            <motion.span
              className="inline-block"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
