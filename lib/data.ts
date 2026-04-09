import type { Experience, GalleryPhoto, Testimonial, Stat, NavLink } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Discover',     target: 'discover'     },
  { label: 'Experiences',  target: 'experiences'  },
  { label: 'Gallery',      target: 'gallery'      },
  { label: 'About',        target: 'about'        },
  { label: 'Contact',      target: 'contact'      },
]

export const HERO_STATS: Stat[] = [
  { num: '12+',  label: 'Years Experience' },
  { num: '500+', label: 'Expeditions'      },
  { num: '40+',  label: 'Destinations'    },
]

export const EXPERIENCES: Experience[] = [
  {
    id:       1,
    title:    'Dune Expeditions',
    subtitle: 'Erg Admer · Erg Tihodaine',
    desc:     'Traverse the sculpted golden seas of the Grand Erg Oriental. Camel trekking, sandboarding, and stargazing under an infinite sky.',
    image:    'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80&auto=format',
    duration: '3–7 days',
    tag:      'Signature',
  },
  {
    id:       2,
    title:    'Tassili Rock Art',
    subtitle: 'UNESCO World Heritage',
    desc:     'Journey into the Tassili plateau to witness prehistoric cave paintings dating back 12,000 years — the world\'s greatest open-air museum.',
    image:    'https://images.unsplash.com/photo-1586558284562-adf3af9e0f35?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '5–10 days',
    tag:      'Cultural',
  },
  {
    id:       3,
    title:    'Sahara Stargazing',
    subtitle: 'Night Sky Expeditions',
    desc:     'Experience the Milky Way as your ancestors did — unobstructed, brilliant, and humbling. Expert astro-guides, telescopes, and desert campfires.',
    image:   'https://images.unsplash.com/photo-1649451376338-8e9a113f7f64?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '2–4 nights',
    tag:      'Premium',
  },
  {
    id:       4,
    title:    'Hoggar Mountains',
    subtitle: 'Tamanrasset Region',
    desc:     'The volcanic moonscape of the Hoggar — dramatic rock spires, hidden oases, and the hermitage of Charles de Foucauld atop the Assekrem.',
    image:    'https://images.unsplash.com/photo-1703854877634-e6437179525e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '7–14 days',
    tag:      'Adventure',
  },
  {
    id:       5,
    title:    'Tuareg Culture',
    subtitle: 'Immersive Village Stays',
    desc:     'Live alongside the nomadic Kel Ajjer — share meals, learn silver craftsmanship, hear ancient Tifinagh poetry, and feel the pulse of the desert.',
    image:    'https://images.unsplash.com/photo-1703856973890-9d28ae141595?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '4–8 days',
    tag:      'Cultural',
  },
  {
    id:       6,
    title:    'Luxury Desert Camp',
    subtitle: 'Private Bivouac Experience',
    desc:     'Curated glamping in the heart of the Sahara. Hand-woven Tuareg tents, gourmet Algerian cuisine, and the deepest silence on Earth.',
    image:    'https://images.unsplash.com/photo-1631991179267-d1812bdc6a8f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '1–5 nights',
    tag:      'Luxury',
  },
]

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  { src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80&auto=format', alt: 'Golden dunes at dawn',          tall: true  },
  { src: 'https://images.unsplash.com/photo-1548407260-da850faa41e3?w=800&q=80&auto=format', alt: 'Sahara sunset',                   tall: false },
  { src: 'https://images.unsplash.com/photo-1476080819537-ed919e571031?w=800&q=80&auto=format', alt: 'Milky Way over the Sahara',    tall: false },
  { src: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80&auto=format', alt: 'Camel caravan at sunset',      tall: true  },
  { src: 'https://images.unsplash.com/photo-1518729371765-043a9e0b7e84?w=800&q=80&auto=format', alt: 'Hoggar volcanic mountains',    tall: false },
  { src: 'https://images.unsplash.com/photo-1499552674705-b23a4c3b2c5b?w=800&q=80&auto=format', alt: 'Tassili rock formations',     tall: false },

]

export const TESTIMONIALS: Testimonial[] = [
  {
    name:   'Sophie Marchand',
    origin: 'Paris, France',
    quote:  'Sefar Agency transformed my idea of travel entirely. Seven days in Tassili left me speechless — the guides, the silence, the ancient art. Nothing compares.',
    rating: 5,
    trip:   'Tassili Rock Art Journey',
  },
  {
    name:   'Marco Bellini',
    origin: 'Rome, Italy',
    quote:  'Camel trekking through the Erg Admer dunes as the sun melted into gold — Sefar gave me what no luxury resort ever could: genuine awe.',
    rating: 5,
    trip:   'Dune Expedition',
  },
  {
    name:   'Yuki Tanaka',
    origin: 'Tokyo, Japan',
    quote:  'The stargazing night was beyond imagination. Lying in the desert under a sky thick with stars, guided by people who know every constellation in Tamasheq.',
    rating: 5,
    trip:   'Sahara Stargazing',
  },
]

export const ABOUT_STATS: Stat[] = [
  { num: '12+',  label: 'Years guiding in the Algerian Sahara'    },
  { num: '98%',  label: 'Guest satisfaction across all expeditions' },
  { num: '500+', label: 'Successful desert journeys completed'     },
  { num: '4',    label: 'Languages: Arabic, French, English, Tamasheq' },
]

export const TRIP_TYPES = [
  'Dune Expedition (3–7 days)',
  'Tassili Rock Art Journey',
  'Sahara Stargazing',
  'Hoggar Mountains Trek',
  'Tuareg Cultural Immersion',
  'Luxury Desert Camp',
  'Custom Private Expedition',
] as const

export const PARTY_SIZES = [
  'Solo traveler',
  '2 people',
  '3–5 people',
  '6–10 people',
  '11+ people (group)',
] as const

export const MONTHS = [
  'January','February','March','April',
  'May','June','July','August',
  'September','October','November','December',
] as const

export const BUDGETS = ['< €500', '€500–€1,000', '€1,000–€2,500', '€2,500+'] as const

export const HOW_FOUND_OPTIONS = [
  'Instagram',
  'Google',
  'Friend / Word of mouth',
  'Travel blog',
  'Travel agency',
  'Other',
] as const
