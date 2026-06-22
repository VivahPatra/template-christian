'use client'
import { useRef } from 'react'
import FlowerOverlay from '@/components/ui/FlowerOverlay'
import { motion, useScroll, useTransform } from 'framer-motion'
import { weddingData } from '@/data/wedding-data'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { formatShortDate } from '@/lib/utils'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const bgY     = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen xl:min-h-[220vh] flex flex-col items-center justify-start overflow-hidden pt-12 sm:pt-16 md:pt-20 lg:pt-14">
      <FlowerOverlay />

      {/* Beach sky gradient + christian image layered */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale, y: bgY }}>
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, #87ceeb 0%, #5bb8d4 20%, #3aa0c0 40%, #1a8a9a 60%, #e0a050 78%, #e8c080 88%, var(--color-bg) 100%)',
        }} />
        <div className="absolute inset-0 flex items-end justify-center pb-[18%] sm:pb-[7%] md:pb-[13%]">
          <img
            src="/assets/christian.png"
            alt=""
            className="w-[95%] sm:w-[55%] md:w-[50%]"
            style={{ height: 'auto', opacity: 1, mixBlendMode: 'overlay' }}
          />
        </div>
      </motion.div>

      {/* Sun glow */}
      <div className="absolute pointer-events-none" style={{ top: '8%', left: '50%', transform: 'translateX(-50%)' }} aria-hidden>
        <div className="w-48 h-48 rounded-full blur-[80px]"
          style={{ background: 'radial-gradient(circle, rgba(255,220,120,0.6) 0%, rgba(255,180,80,0.2) 50%, transparent 75%)' }} />
      </div>

      {/* Animated waves at bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '12%' }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <path fill="rgba(250,248,244,0.5)">
            <animate attributeName="d" dur="6s" repeatCount="indefinite"
              values="M0,50 C360,20 720,65 1080,35 C1260,22 1380,45 1440,35 L1440,80 L0,80Z;
                      M0,35 C360,60 720,20 1080,50 C1260,40 1380,25 1440,45 L1440,80 L0,80Z;
                      M0,50 C360,20 720,65 1080,35 C1260,22 1380,45 1440,35 L1440,80 L0,80Z" />
          </path>
          <path fill="rgba(250,248,244,0.8)">
            <animate attributeName="d" dur="5s" repeatCount="indefinite"
              values="M0,60 C300,45 600,70 900,48 C1100,38 1300,55 1440,48 L1440,80 L0,80Z;
                      M0,48 C300,65 600,40 900,60 C1100,52 1300,38 1440,55 L1440,80 L0,80Z;
                      M0,60 C300,45 600,70 900,48 C1100,38 1300,55 1440,48 L1440,80 L0,80Z" />
          </path>
        </svg>
      </div>

      {/* Text */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{ y: textY, opacity }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={fadeUp} className="text-3xl sm:text-4xl mb-2"
          style={{ color: 'rgba(255,255,255,0.85)', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.12))' }}>
          ✝
        </motion.p>

        <motion.p variants={fadeUp}
          className="font-sans text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-2"
          style={{ color: 'rgba(255,255,255,0.85)', textShadow: '0 1px 6px rgba(0,0,0,0.12)' }}>
          ✦ &nbsp; A Celebration of Love &nbsp; ✦
        </motion.p>

        <motion.div variants={fadeUp} className="mb-2">
          <h1 className="font-display leading-none" style={{ fontSize: 'clamp(2.2rem, 8vw, 5.5rem)', color: '#fff', textShadow: '0 2px 20px rgba(0,0,0,0.12)' }}>
            {weddingData.groomName}
          </h1>
          <span className="block my-1 float-slow font-display"
            style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(1rem, 2.5vw, 1.8rem)' }}>
            &amp;
          </span>
          <h1 className="font-display leading-none" style={{ fontSize: 'clamp(2.2rem, 8vw, 5.5rem)', color: '#fff', textShadow: '0 2px 20px rgba(0,0,0,0.12)' }}>
            {weddingData.brideName}
          </h1>
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-2">
          <div className="h-px w-12 sm:w-16 md:w-24" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.5))' }} />
          <span className="font-sans text-xs sm:text-sm tracking-[0.25em] uppercase" style={{ color: 'rgba(255,255,255,0.8)' }}>
            {formatShortDate(weddingData.weddingDate)}
          </span>
          <div className="h-px w-12 sm:w-16 md:w-24" style={{ background: 'linear-gradient(to left, transparent, rgba(255,255,255,0.5))' }} />
        </motion.div>

        <motion.p variants={fadeUp}
          className="font-serif italic text-sm sm:text-base tracking-widest"
          style={{ color: 'rgba(255,255,255,0.6)' }}>
          {weddingData.tagline}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-6 sm:mt-8 md:mt-14 flex flex-col items-center gap-2" style={{ opacity: 0.5 }}>
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.7)' }}>Scroll</span>
          <motion.div className="w-px h-8 sm:h-10"
            style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)' }}
            animate={{ scaleY: [1, 0.3, 1], opacity: [0.6, 0.1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
