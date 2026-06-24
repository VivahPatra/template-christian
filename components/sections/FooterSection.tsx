'use client'
import { motion } from 'framer-motion'
import { useEditMode } from '@/context/EditModeContext'
import LotusDivider from '@/components/ui/LotusDivider'
import EditableText from '@/components/ui/EditableText'

export default function FooterSection() {
  const { data: weddingData } = useEditMode()
  return (
    <footer id="footer" className="py-20 px-6 text-center font-serif" style={{ background: 'var(--color-surface2)', color: '#2a2420' }}>
      <div className="max-w-2xl mx-auto">
        <LotusDivider className="mb-10" />

        <p className="shimmer-text font-display mb-1" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
          <EditableText field="brideName" tag="span">
            {weddingData.brideName}
          </EditableText>
          {' '}&amp;{' '}
          <EditableText field="groomName" tag="span">
            {weddingData.groomName}
          </EditableText>
        </p>
        <p className="font-sans text-xs tracking-[0.4em] uppercase mb-8" style={{ color: 'var(--color-accent)', opacity: 0.6 }}>
          20 December 2026
        </p>

        <EditableText field="tagline" tag="p" className="font-serif italic text-sm mb-8" style={{ color: 'var(--color-muted)' }}>
          {weddingData.tagline}
        </EditableText>

        <EditableText field="hashtag" tag="p" className="font-sans text-xs tracking-widest" style={{ color: 'var(--color-accent)', opacity: 0.5 }}>
          {weddingData.hashtag}
        </EditableText>

        <LotusDivider className="mt-10" />

        <p className="font-sans text-xs mt-8 opacity-30" style={{ color: 'var(--color-muted)' }}>
          Made with love · Beach Wedding Vibes
        </p>
      </div>
    </footer>
  )
}
