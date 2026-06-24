'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { weddingData as defaultData } from '@/data/wedding-data'
import { WeddingConfig } from '@/types/wedding.types'

const WeddingDataContext = createContext<WeddingConfig>(defaultData)

/** Editor form data shape sent via postMessage from the showcase editor */
interface EditorFormData {
  groomName?: string
  brideName?: string
  groomParents?: string
  brideParents?: string
  groomSubtitle?: string
  brideSubtitle?: string
  weddingDate?: string
  hashtag?: string
  tagline?: string
  invitationText?: string
  heroImage?: string
  bridePhoto?: string
  groomPhoto?: string
  backgroundMusic?: string
  galleryImages?: Array<{ src: string; alt?: string; span?: string }>
  events?: Array<{
    id: string
    name: string
    emoji?: string
    date: string
    time: string
    venue: string
    venueAddress: string
    venueMapLink?: string
    description?: string
    color?: string
  }>
  coupleStory?: Array<{
    date: string
    title: string
    description: string
    icon?: string
    image?: string
  }>
  familyBride?: Array<{ name: string; relation: string; photo?: string; side?: string }>
  familyGroom?: Array<{ name: string; relation: string; photo?: string; side?: string }>
  venueName?: string
  venueAddress?: string
  venueMapUrl?: string
  rsvpPhone?: string
  rsvpMessage?: string
  rsvpDeadline?: string
  instagram?: string
  sections?: Record<string, unknown>
}

/** Only override a string field when the incoming value is non-empty */
function str<T>(incoming: string | undefined, fallback: T): T | string {
  return incoming && incoming.trim() !== '' ? incoming : fallback
}

function mapEditorToConfig(editor: EditorFormData, base: WeddingConfig): WeddingConfig {
  const merged: WeddingConfig = { ...base }

  // Simple string fields
  merged.groomName = str(editor.groomName, base.groomName) as string
  merged.brideName = str(editor.brideName, base.brideName) as string
  merged.groomParents = str(editor.groomParents, base.groomParents) as string | undefined
  merged.brideParents = str(editor.brideParents, base.brideParents) as string | undefined
  merged.hashtag = str(editor.hashtag, base.hashtag) as string
  merged.tagline = str(editor.tagline, base.tagline) as string
  merged.invitationText = str(editor.invitationText, base.invitationText) as string

  // Media fields
  merged.heroImage = str(editor.heroImage, base.heroImage) as string

  // Wedding date: convert string to Date
  if (editor.weddingDate && editor.weddingDate.trim() !== '') {
    const parsed = new Date(editor.weddingDate)
    if (!isNaN(parsed.getTime())) {
      merged.weddingDate = parsed
    }
  }

  // Gallery images: editor sends {src, alt, span}
  if (editor.galleryImages && editor.galleryImages.length > 0) {
    const mapped = editor.galleryImages
      .filter((img) => img.src && img.src.trim() !== '')
      .map((img) => ({
        src: img.src,
        alt: img.alt || '',
        span: (img.span === 'wide' || img.span === 'tall' ? img.span : 'normal') as 'normal' | 'wide' | 'tall',
      }))
    if (mapped.length > 0) {
      merged.galleryImages = mapped
    }
  }

  // Events
  if (editor.events && editor.events.length > 0) {
    merged.events = editor.events.map((editorEvent, i) => {
      const baseEvent = base.events[i]
      return {
        id: editorEvent.id || baseEvent?.id || `event-${i}`,
        name: str(editorEvent.name, baseEvent?.name || '') as string,
        emoji: str(editorEvent.emoji, baseEvent?.emoji || '') as string,
        date: str(editorEvent.date, baseEvent?.date || '') as string,
        time: str(editorEvent.time, baseEvent?.time || '') as string,
        venue: str(editorEvent.venue, baseEvent?.venue || '') as string,
        venueAddress: str(editorEvent.venueAddress, baseEvent?.venueAddress || '') as string,
        image: baseEvent?.image,
        color: str(editorEvent.color, baseEvent?.color || '#c8922a') as string,
        description: str(editorEvent.description, baseEvent?.description) as string | undefined,
      }
    })
  }

  // Couple story
  if (editor.coupleStory && editor.coupleStory.length > 0) {
    merged.coupleStory = editor.coupleStory.map((editorItem, i) => {
      const baseItem = base.coupleStory[i]
      return {
        date: str(editorItem.date, baseItem?.date || '') as string,
        title: str(editorItem.title, baseItem?.title || '') as string,
        description: str(editorItem.description, baseItem?.description || '') as string,
        icon: str(editorItem.icon, baseItem?.icon || '') as string,
        image: str(editorItem.image, baseItem?.image) as string | undefined,
      }
    })
  }

  // Family
  if (editor.familyBride && editor.familyBride.length > 0) {
    merged.familyBride = editor.familyBride.map((m) => ({
      name: m.name || '',
      relation: m.relation || '',
      photo: m.photo || '',
      side: 'bride' as const,
    }))
  }
  if (editor.familyGroom && editor.familyGroom.length > 0) {
    merged.familyGroom = editor.familyGroom.map((m) => ({
      name: m.name || '',
      relation: m.relation || '',
      photo: m.photo || '',
      side: 'groom' as const,
    }))
  }

  // Venue
  if (editor.venueName || editor.venueAddress || editor.venueMapUrl) {
    merged.venue = {
      name: str(editor.venueName, base.venue.name) as string,
      address: str(editor.venueAddress, base.venue.address) as string,
      mapUrl: str(editor.venueMapUrl, base.venue.mapUrl) as string,
    }
  }

  // RSVP
  if (editor.rsvpPhone || editor.rsvpMessage || editor.rsvpDeadline) {
    merged.rsvp = {
      whatsappNumber: str(editor.rsvpPhone, base.rsvp.whatsappNumber) as string,
      message: str(editor.rsvpMessage, base.rsvp.message) as string,
      deadline: str(editor.rsvpDeadline, base.rsvp.deadline) as string,
    }
  }

  // Social links
  if (editor.instagram) {
    merged.socialLinks = {
      ...base.socialLinks,
      instagram: str(editor.instagram, base.socialLinks?.instagram) as string | undefined,
    }
  }

  return merged
}

export function WeddingDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<WeddingConfig>(defaultData)

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === 'VIVAHPATRA_UPDATE' && event.data.data) {
        const editorData = event.data.data as EditorFormData
        setData((prev) => mapEditorToConfig(editorData, prev))
      }
    }

    window.addEventListener('message', handleMessage)
// Signal parent that we're ready to receive data    if (window.parent !== window) {      window.parent.postMessage({ type: 'VIVAHPATRA_READY' }, '*')    }
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <WeddingDataContext.Provider value={data}>
      {children}
    </WeddingDataContext.Provider>
  )
}

export function useWeddingData(): WeddingConfig {
  return useContext(WeddingDataContext)
}
