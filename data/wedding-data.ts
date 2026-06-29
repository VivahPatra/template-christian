import { WeddingConfig } from '@/types/wedding.types'

export const weddingData: WeddingConfig = {
  brideName: 'Sarah',
  groomName: 'James',
  groomParents: 'Mr. David & Mrs. Mary Thomas',
  brideParents: 'Mr. Robert & Mrs. Catherine D\'Souza',
  weddingDate: new Date('2027-02-14T11:00:00'),
  hashtag: '#JamesAndSarahForever',
  tagline: 'Where the ocean meets forever',
  invitationText:
    'With the blessings of God and the love of our families, Sarah and James joyfully invite you to witness the beginning of their forever by the sea. Your presence will make our celebration truly blessed.',
  heroImage: '/assets/palace.webp',

  events: [
    { id: 'rehearsal', name: 'Rehearsal Dinner', emoji: '🥂', date: 'February 12, 2027', time: '7:00 PM', venue: 'Seaside Pavilion', venueAddress: 'Baga Beach Road, Goa', image: '/assets/events/engagement.webp', color: '#1a8a9a', description: 'An evening of laughter before the big day.' },
    { id: 'mehendi', name: 'Opera Night', emoji: '🌿', date: 'February 13, 2027', time: '4:00 PM', venue: 'Beach Lawns', venueAddress: 'Calangute, Goa', image: '/assets/events/mehendi.webp', color: '#e07050', description: 'Henna, music and sunset by the shore.' },
    { id: 'sangeet', name: 'Beach Party', emoji: '🎶', date: 'February 13, 2027', time: '8:00 PM', venue: 'Tito\'s Beachside', venueAddress: 'Baga Beach, Goa', image: '/assets/events/sangeet.webp', color: '#4a90c0', description: 'Dance under the stars with sand between your toes.' },
    { id: 'ceremony', name: 'Holy Matrimony', emoji: '✝️', date: 'February 14, 2027', time: '11:00 AM', venue: 'Our Lady of the Sea Church', venueAddress: 'Fort Aguada Road, Goa', image: '/assets/events/wedding.webp', color: '#d4a040', description: 'Two hearts united in faith and love.' },
    { id: 'reception', name: 'Beach Reception', emoji: '🌊', date: 'February 14, 2027', time: '6:00 PM', venue: 'Sunset Terrace Resort', venueAddress: 'Candolim Beach, Goa', image: '/assets/events/reception.webp', color: '#e07050', description: 'A sunset celebration of love and joy.' },
  ],

  galleryImages: [
    { src: '/assets/gallery/gallery-1.jpg', alt: 'Couple photo 1', span: 'wide' },
    { src: '/assets/gallery/gallery-2.jpg', alt: 'Couple photo 2', span: 'tall' },
    { src: '/assets/gallery/gallery-3.jpg', alt: 'Couple photo 3', span: 'normal' },
    { src: '/assets/gallery/gallery-4.jpg', alt: 'Couple photo 4', span: 'normal' },
    { src: '/assets/gallery/gallery-5.jpg', alt: 'Couple photo 5', span: 'wide' },
    { src: '/assets/gallery/gallery-6.jpg', alt: 'Couple photo 6', span: 'normal' },
  ],

  coupleStory: [
    { date: 'June 2020', title: 'A Chance Encounter', description: 'A beach bonfire in Goa, a shared playlist, and a conversation that lasted till sunrise. Neither wanted the night to end.', icon: '🔥', image: '/assets/story/story-1.jpg' },
    { date: 'December 2021', title: 'First Date', description: 'A candlelit dinner by the sea, the sound of waves and a promise whispered over dessert.', icon: '🌅', image: '/assets/story/story-2.jpg' },
    { date: 'July 2025', title: 'The Proposal', description: 'On a cliff overlooking the Arabian Sea at sunset, he got down on one knee. She cried. The dolphins celebrated.', icon: '💍', image: '/assets/story/story-3.jpg' },
    { date: 'February 2027', title: 'Forever Begins', description: 'A beach wedding, barefoot vows, and a lifetime of sunsets together. We can\'t wait to celebrate with everyone we love.', icon: '💒', image: '/assets/story/story-4.jpg' },
  ],

  familyBride: [
    { name: 'Robert D\'Souza', relation: 'Father', photo: '/assets/family/bf.jpg', side: 'bride' },
    { name: 'Catherine D\'Souza', relation: 'Mother', photo: '/assets/family/bm.jpg', side: 'bride' },
    { name: 'Michael D\'Souza', relation: 'Brother', photo: '/assets/family/bb.jpg', side: 'bride' },
  ],

  familyGroom: [
    { name: 'David Thomas', relation: 'Father', photo: '/assets/family/gf.jpg', side: 'groom' },
    { name: 'Mary Thomas', relation: 'Mother', photo: '/assets/family/gm.jpg', side: 'groom' },
    { name: 'Emma Thomas', relation: 'Sister', photo: '/assets/family/gs.jpg', side: 'groom' },
  ],

  venue: {
    name: 'Our Lady of the Sea Church',
    address: 'Fort Aguada Road, Sinquerim, Goa — 403519',
    mapUrl: 'https://maps.google.com',
  },

  rsvp: {
    whatsappNumber: '919876543210',
    message: 'Hi! I would like to RSVP for the wedding of Sarah & James on 14th February 2027.',
    deadline: 'January 25, 2027',
  },

  socialLinks: { instagram: 'https://instagram.com' },
}
