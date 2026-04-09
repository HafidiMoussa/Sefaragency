// ── Experience card ───────────────────────────────
export interface Experience {
  id:       number
  title:    string
  subtitle: string
  desc:     string
  image:    string
  duration: string
  tag:      ExperienceTag
}

export type ExperienceTag = 'Signature' | 'Cultural' | 'Premium' | 'Adventure' | 'Luxury'

// ── Gallery photo ─────────────────────────────────
export interface GalleryPhoto {
  src:  string
  alt:  string
  tall: boolean
}

// ── Testimonial ───────────────────────────────────
export interface Testimonial {
  name:   string
  origin: string
  quote:  string
  rating: number
  trip:   string
}

// ── Stat ──────────────────────────────────────────
export interface Stat {
  num:   string
  label: string
}

// ── Booking form state ────────────────────────────
export interface BookingFormState {
  firstName:     string
  lastName:      string
  email:         string
  phone:         string
  age:           string
  nationality:   string
  fitnessLevel:  string
  experience:    string
  tripType:      string
  partySize:     string
  preferredMonth: string
  budget:        string
  dietaryReqs:   string
  medicalInfo:   string
  howFound:      string
  message:       string
  newsletter:    boolean
  termsAccepted: boolean
}

export type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

// ── Nav link ──────────────────────────────────────
export interface NavLink {
  label:  string
  target: string
}
