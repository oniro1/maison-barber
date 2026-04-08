"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words = ["PRECISION.", "STYLE.", "IDENTITY."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 scale-110"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=85&w=1920&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </motion.div>

      {/* Thin vertical line — left */}
      <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-10">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "top" }}
          className="w-px h-24 bg-gold/50"
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="font-label text-[10px] tracking-[0.3em] uppercase text-muted rotate-90 whitespace-nowrap mt-4"
        >
          Est. 2019
        </motion.span>
      </div>

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-[1000px]"
      >
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="w-8 h-px bg-gold" />
          <span className="font-label text-xs tracking-[0.35em] uppercase text-gold">
            Premium Barbershop — Milano
          </span>
          <div className="w-8 h-px bg-gold" />
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden">
          {words.map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.1,
                  delay: 0.5 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-display text-[clamp(3.5rem,12vw,10rem)] font-light leading-[0.9] tracking-[0.05em] text-cream block"
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 font-body font-light text-base md:text-lg text-muted max-w-md mx-auto leading-relaxed"
        >
          Where every cut is a statement. Where craft meets character.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#book"
            className="group inline-flex items-center gap-4 bg-gold text-black font-label text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-gold-light transition-all duration-400"
          >
            Book an Appointment
            <motion.span
              className="inline-block"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </a>
          <a
            href="#about"
            className="font-label text-xs tracking-[0.2em] uppercase text-muted hover:text-cream transition-colors duration-300 underline underline-offset-4 decoration-[#3a3a3a] hover:decoration-gold"
          >
            Discover more
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent"
        />
        <span className="font-label text-[10px] tracking-[0.3em] uppercase text-muted/50">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
