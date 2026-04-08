"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import FadeUp from "./FadeUp";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef(null);
  const inView = useInView(imgRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-40 md:py-56 bg-coal overflow-hidden"
    >
      {/* Background number */}
      <div
        aria-hidden
        className="absolute top-16 left-0 font-display text-[20rem] font-bold leading-none text-white/[0.02] pointer-events-none select-none -translate-x-8"
      >
        03
      </div>

      <div className="max-w-[1400px] mx-auto px-8 md:px-16">

        {/* Section header */}
        <div className="mb-20">
          <FadeUp>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px bg-gold" />
              <span className="font-label text-xs tracking-[0.3em] uppercase text-gold">
                The Experience
              </span>
            </div>
          </FadeUp>
        </div>

        {/* Main layout: image left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Image block */}
          <div className="lg:col-span-7 relative" ref={imgRef}>
            <div className="relative overflow-hidden aspect-[16/11] bg-surface">
              <motion.img
                style={{ y: imgY }}
                initial={{ scale: 1.05 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=85&w=1400&auto=format&fit=crop"
                alt="The MAISON experience"
                className="w-full h-[115%] object-cover -mt-[7.5%]"
              />
              <div className="absolute inset-0 bg-black/30" />

              {/* Overlay quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-8 left-8 right-8"
              >
                <p className="font-display text-2xl md:text-3xl italic font-light text-cream/90 leading-snug max-w-sm">
                  &ldquo;The chair is where character
                  is carved.&rdquo;
                </p>
              </motion.div>
            </div>

            {/* Gold accent corner */}
            <div className="absolute -bottom-px -right-px w-16 h-16 border-b border-r border-gold/30" />
          </div>

          {/* Text block */}
          <div className="lg:col-span-5">
            <FadeUp delay={0.1}>
              <h2 className="font-display text-[clamp(2.5rem,4vw,4.5rem)] font-light leading-[1.05] text-cream mb-10">
                More than
                <br />
                a haircut.
                <br />
                <span className="italic text-gold-light">A ritual.</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="font-body font-light text-base text-muted leading-relaxed mb-8">
                From the moment you sit down, you&apos;re in capable hands.
                The consultation, the silence of focused work, the weight of a hot
                towel — every detail is deliberate.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="font-body font-light text-base text-muted leading-relaxed mb-14">
                We use only professional-grade products. We take our time.
                We don&apos;t rush you out. MAISON is a space where quality speaks
                for itself, quietly.
              </p>
            </FadeUp>

            {/* Feature list */}
            <FadeUp delay={0.4}>
              <div className="flex flex-col gap-5">
                {[
                  "Complimentary consultation",
                  "Hot towel & scalp massage",
                  "Premium product finish",
                  "Private, unhurried atmosphere",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-4 h-px bg-gold flex-shrink-0" />
                    <span className="font-body font-light text-sm text-muted">
                      {item}
                    </span>
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
