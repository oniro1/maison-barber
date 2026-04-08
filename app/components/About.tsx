"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeUp from "./FadeUp";

export default function About() {
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-40 md:py-56 bg-coal overflow-hidden"
    >
      {/* Large background number */}
      <div
        aria-hidden
        className="absolute top-16 left-0 font-display text-[20rem] font-bold leading-none text-white/[0.02] pointer-events-none select-none -translate-x-8"
      >
        01
      </div>

      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* Left — Image */}
          <div className="lg:col-span-5 lg:col-start-1 relative" ref={imgRef}>
            {/* Offset frame */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={imgInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold/20 z-0" />
              <div className="relative z-10 overflow-hidden aspect-[4/5] bg-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={imgInView ? { scale: 1 } : {}}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=85&w=900&auto=format&fit=crop"
                  alt="The craft"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              {/* Gold accent bar */}
              <div className="absolute -bottom-6 right-8 w-16 h-px bg-gold" />
            </motion.div>
          </div>

          {/* Right — Text */}
          <div className="lg:col-span-6 lg:col-start-7 lg:pl-8">
            {/* Label */}
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-6 h-px bg-gold" />
                <span className="font-label text-xs tracking-[0.3em] uppercase text-gold">
                  The Craft
                </span>
              </div>
            </FadeUp>

            {/* Heading */}
            <FadeUp delay={0.2}>
              <h2 className="font-display text-[clamp(2.8rem,5vw,5.5rem)] font-light leading-[1.05] text-cream mb-8">
                We don&apos;t just cut
                <br />
                hair.{" "}
                <span className="italic text-gold-light">
                  We define it.
                </span>
              </h2>
            </FadeUp>

            {/* Body */}
            <FadeUp delay={0.3}>
              <p className="font-body font-light text-base text-muted leading-relaxed max-w-md mb-8">
                MAISON was born from a single conviction: that a great barbershop
                is more than a service — it&apos;s a ritual. Every cut is studied.
                Every line is intentional. We work with the grain of who you are,
                not against it.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="font-body font-light text-base text-muted leading-relaxed max-w-md mb-14">
                Five years of refining our approach, one client at a time. No rush.
                No compromises. Just the quiet confidence of work done well.
              </p>
            </FadeUp>

            {/* Stats row */}
            <FadeUp delay={0.5}>
              <div className="flex items-start gap-12 border-t border-border pt-10">
                {[
                  { num: "5+", label: "Years of craft" },
                  { num: "2K+", label: "Satisfied clients" },
                  { num: "3", label: "Expert barbers" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-4xl font-light text-cream mb-1">
                      {stat.num}
                    </p>
                    <p className="font-label text-[11px] tracking-[0.2em] uppercase text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
