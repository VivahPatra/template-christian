'use client'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { WeddingDataProvider } from '@/context/WeddingDataContext'
import CustomCursor from '@/components/layout/CustomCursor'
import LoadingScreen from '@/components/layout/LoadingScreen'
import FloatingFABs from '@/components/layout/FloatingFABs'
import ShowerDivider from '@/components/ui/ShowerDivider'
import ParallaxLanterns from '@/components/ui/ParallaxLanterns'
import PondStrip from '@/components/ui/PondStrip'
import HeroSection from '@/components/sections/HeroSection'
import InvitationSection from '@/components/sections/InvitationSection'
import EventsSection from '@/components/sections/EventsSection'
import CoupleStory from '@/components/sections/CoupleStory'
import GallerySection from '@/components/sections/GallerySection'
import RSVPSection from '@/components/sections/RSVPSection'
import CountdownSection from '@/components/sections/CountdownSection'
import FooterSection from '@/components/sections/FooterSection'
import SectionGate from '@/components/ui/SectionGate'

export default function Page() {
  const [loaded, setLoaded] = useState(false)

  return (
    <WeddingDataProvider>
      <CustomCursor />
      <AnimatePresence>
        {!loaded && <LoadingScreen key="loading" onComplete={() => setLoaded(true)} />}
      </AnimatePresence>
      {loaded && (
        <>
          <FloatingFABs />
          <ParallaxLanterns />
          <div className="relative overflow-x-hidden">
            <main>
              <SectionGate name="hero">
                <HeroSection />
                <ShowerDivider />
              </SectionGate>

              <SectionGate name="invitation">
                <InvitationSection />
                <PondStrip />
              </SectionGate>

              <SectionGate name="coupleStory">
                <CoupleStory />
                <PondStrip />
              </SectionGate>

              <SectionGate name="gallery">
                <GallerySection />
                <PondStrip />
              </SectionGate>

              <SectionGate name="events">
                <EventsSection />
                <PondStrip />
              </SectionGate>

              <SectionGate name="rsvp">
                <RSVPSection />
                <PondStrip />
              </SectionGate>

              <SectionGate name="countdown">
                <CountdownSection />
                <PondStrip />
              </SectionGate>

              <SectionGate name="footer">
                <FooterSection />
              </SectionGate>
            </main>
          </div>
        </>
      )}
    </WeddingDataProvider>
  )
}
