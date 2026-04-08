"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BookingCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="book"
      ref={ref}
      className="relative py-48 md:py-64 bg-black overflow-hidden"
    >
      {/* Horizontal gold line top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left" }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-radial-[at_50%_50%] from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[900px] mx-auto px-8 md:px-16 text-center">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="w-6 h-px bg-gold" />
          <span className="font-label text-xs tracking-[0.35em] uppercase text-gold">
            Reserve Your Time
          </span>
          <div className="w-6 h-px bg-gold" />
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3rem,8vw,8rem)] font-light leading-none text-cream"
          >
            Your chair
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 1, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3rem,8vw,8rem)] font-light leading-none italic text-gold-light"
          >
            is waiting.
          </motion.h2>
        </div>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-body font-light text-base text-muted max-w-sm mx-auto mb-14"
        >
          Walk in or book ahead. Either way, you leave looking exactly
          like yourself — only better.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="tel:+390212345678"
            className="group inline-flex items-center gap-5 bg-gold text-black font-label text-xs tracking-[0.3em] uppercase px-14 py-5 hover:bg-gold-light transition-all duration-400 text-sm"
          >
            Book an Appointment
            <motion.span
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>

        {/* Phone */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-10 font-label text-xs tracking-[0.2em] uppercase text-muted"
        >
          Or call us at{" "}
          <a
            href="tel:+390212345678"
            className="text-cream hover:text-gold transition-colors duration-300"
          >
            +39 02 1234 5678
          </a>
        </motion.p>

      </div>

      {/* Horizontal gold line bottom */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "right" }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />
    </section>
  );
}
