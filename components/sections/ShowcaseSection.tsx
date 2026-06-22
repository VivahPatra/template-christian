'use client'
import { motion } from 'framer-motion'
import FlowerOverlay from '@/components/ui/FlowerOverlay'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function ShowcaseSection() {
  return (
    <section className="relative overflow-hidden z-[6]" style={{ background: 'var(--color-bg)' }}>
      <FlowerOverlay />

      <div className="relative w-full" style={{ minHeight: 520 }}>

        {/* Top trapezoid */}
        <div className="absolute inset-0" style={{
          clipPath: 'polygon(0 0, 100% 0, 75% 15%, 25% 15%)',
          background: 'linear-gradient(to bottom, rgba(200,220,230,1) 0%, rgba(180,210,225,0.8) 100%)',
        }} />

        {/* Bottom trapezoid — image bottom to outer bottom */}
        <div className="absolute inset-0" style={{
          clipPath: 'polygon(25% 85%, 75% 85%, 100% 100%, 0 100%)',
          background: 'linear-gradient(to top, rgba(200,220,230,1) 0%, rgba(180,210,225,0.8) 100%)',
        }} />

        {/* Left trapezoid */}
        <div className="absolute inset-0" style={{
          clipPath: 'polygon(0 0, 25% 15%, 25% 85%, 0 100%)',
          background: 'linear-gradient(135deg, rgba(170,200,218,1) 0%, rgba(190,215,228,0.9) 30%, rgba(210,225,235,0.7) 100%)',
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          clipPath: 'polygon(0 0, 25% 15%, 25% 85%, 0 100%)',
          background: 'linear-gradient(to right, rgba(0,0,0,0.15) 0%, transparent 60%)',
        }} />

        {/* Right trapezoid */}
        <div className="absolute inset-0" style={{
          clipPath: 'polygon(75% 15%, 100% 0, 100% 100%, 75% 85%)',
          background: 'linear-gradient(225deg, rgba(170,200,218,1) 0%, rgba(190,215,228,0.9) 30%, rgba(210,225,235,0.7) 100%)',
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          clipPath: 'polygon(75% 15%, 100% 0, 100% 100%, 75% 85%)',
          background: 'linear-gradient(to left, rgba(0,0,0,0.15) 0%, transparent 60%)',
        }} />

        {/* Image — fills the inner box exactly */}
        <motion.div
          className="absolute z-10"
          style={{ top: '15%', bottom: '15%', left: '25%', right: '25%' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp} className="w-full h-full">
            <img
              src="/assets/c2.jpg"
              alt="Wedding Celebration"
              className="w-full h-full object-cover block"
              style={{ filter: 'brightness(1.05) saturate(1.1)', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
