'use client'

import {
  useState,
  useCallback,
  type ChangeEvent,
  type FormEvent,
} from 'react'
import { useReveal } from '@/hooks/useReveal'
import {
  TRIP_TYPES,
  PARTY_SIZES,
  MONTHS,
  BUDGETS,
  HOW_FOUND_OPTIONS,
} from '@/lib/data'
import type { BookingFormState, FormStatus } from '@/types'

/* ── helpers ──────────────────────────────────────────────────────────────── */

const INITIAL_STATE: BookingFormState = {
  firstName: '', lastName: '', email: '', phone: '',
  age: '', nationality: '', fitnessLevel: '', experience: '',
  tripType: '', partySize: '', preferredMonth: '', budget: '',
  dietaryReqs: '', medicalInfo: '', howFound: '', message: '',
  newsletter: false, termsAccepted: false,
}

type FieldKey = keyof BookingFormState

/* ── sub-components ───────────────────────────────────────────────────────── */

function FieldGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-2">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[#C4903A] text-base" aria-hidden="true">◈</span>
        <h3 className="font-body text-[10px] tracking-[0.35em] text-[#C4903A] uppercase">{title}</h3>
      </div>
      {children}
    </div>
  )
}

function Field({
  label,
  required = false,
  className = '',
  children,
}: {
  label:     string
  required?: boolean
  className?: string
  children:  React.ReactNode
}) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <label className="font-body text-[10px] tracking-[0.3em] text-[#C9A96E] uppercase block">
        {label}
        {required && <span className="text-[#C4903A] ml-1" aria-label="required">*</span>}
      </label>
      {children}
    </div>
  )
}

function DesertSelect({
  value,
  onChange,
  required,
  children,
}: {
  value:    string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      required={required}
      className="desert-input appearance-none cursor-pointer"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23C4903A' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
        backgroundRepeat:   'no-repeat',
        backgroundPosition: 'right 14px center',
        paddingRight:       '36px',
      }}
    >
      {children}
    </select>
  )
}

function CheckRow({
  id,
  checked,
  onChange,
  required,
  children,
}: {
  id:       string
  checked:  boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label htmlFor={id} className="flex items-start gap-3 cursor-pointer group">
      <div
        className={`mt-0.5 w-4 h-4 rounded-sm border flex-shrink-0 flex items-center justify-center transition-all ${
          checked
            ? 'bg-[#C4903A] border-[#C4903A]'
            : 'bg-transparent border-[rgba(196,144,58,0.3)] group-hover:border-[#C4903A]'
        }`}
        aria-hidden="true"
      >
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <polyline points="1,4 3.5,6.5 9,1" stroke="#1A0E02" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </div>
      <input
        id={id}
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
        required={required}
      />
      <span className="font-body text-xs text-[#C9A96E] leading-relaxed">{children}</span>
    </label>
  )
}

/* ── success screen ───────────────────────────────────────────────────────── */

function SuccessScreen() {
  return (
    <div className="text-center py-16 px-8">
      <div className="w-16 h-16 rounded-full border-2 border-[#C4903A] flex items-center justify-center mx-auto mb-8">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4903A" strokeWidth="1.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3 className="font-display text-4xl text-[#F0D898] mb-4">Shukran!</h3>
      <p className="font-arabic text-2xl text-[#D4A843] mb-6">شكراً جزيلاً</p>
      <p className="font-body text-[#C9A96E] text-sm leading-relaxed max-w-sm mx-auto">
        Your expedition request has been received. Our team in Djanet will reach out within 24 hours with a personalised journey proposal.
      </p>
    </div>
  )
}

/* ── main component ───────────────────────────────────────────────────────── */

export default function BookingForm() {
  const ref                  = useReveal()
  const [form, setForm]      = useState<BookingFormState>(INITIAL_STATE)
  const [status, setStatus]  = useState<FormStatus>('idle')

  const setField = useCallback(
    (field: FieldKey) =>
      (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const value =
          e.target instanceof HTMLInputElement && e.target.type === 'checkbox'
            ? (e.target as HTMLInputElement).checked
            : e.target.value
        setForm((prev) => ({ ...prev, [field]: value }))
      },
    []
  )

  const setBudget = useCallback((value: string) => {
    setForm((prev) => ({ ...prev, budget: value }))
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.termsAccepted) return
    setStatus('sending')

    try {
      // Replace with your real API endpoint, e.g. a Next.js Server Action or /api/booking route
      await new Promise<void>((resolve) => setTimeout(resolve, 1600))
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 bg-[#210F03]" />
      <div className="absolute inset-0 pattern-overlay opacity-28" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(196,144,58,0.38)] to-transparent" />

      {/* Decorative bg image */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.08] hidden xl:block"
        style={{
          backgroundImage:      'url(https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800)',
          backgroundSize:       'cover',
          backgroundPosition:   'center',
          maskImage:            'linear-gradient(to right, transparent, black)',
          WebkitMaskImage:      'linear-gradient(to right, transparent, black)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal ornament mb-6">
            <span className="font-body text-[10px] tracking-[0.5em] text-[#C4903A] uppercase">Begin Here</span>
          </div>
          <h2
            id="contact-heading"
            className="reveal font-display text-5xl lg:text-7xl text-[#F0D898] leading-tight mb-4"
          >
            Reserve Your<br />
            <span className="text-shimmer italic">Desert Story</span>
          </h2>
          <p
            className="reveal font-body font-light text-[#C9A96E] text-sm max-w-lg mx-auto leading-relaxed"
            style={{ transitionDelay: '100ms' }}
          >
            Fill in your details and one of our expedition specialists will craft a personalised
            itinerary for you within 24 hours.
          </p>
        </div>

        {/* Card wrapper */}
        <div className="reveal max-w-5xl mx-auto glass-card rounded-sm p-8 lg:p-12">
          {status === 'sent' ? (
            <SuccessScreen />
          ) : (
            <form onSubmit={handleSubmit} noValidate>

              {/* ── 01 Personal Information ── */}
              <FieldGroup title="01 — Personal Information">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="First Name" required>
                    <input
                      type="text"
                      placeholder="Your first name"
                      className="desert-input"
                      value={form.firstName}
                      onChange={setField('firstName')}
                      required
                      autoComplete="given-name"
                    />
                  </Field>

                  <Field label="Last Name" required>
                    <input
                      type="text"
                      placeholder="Your last name"
                      className="desert-input"
                      value={form.lastName}
                      onChange={setField('lastName')}
                      required
                      autoComplete="family-name"
                    />
                  </Field>

                  <Field label="Email Address" required>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="desert-input"
                      value={form.email}
                      onChange={setField('email')}
                      required
                      autoComplete="email"
                    />
                  </Field>

                  <Field label="Phone / WhatsApp" required>
                    <input
                      type="tel"
                      placeholder="+213 000 000 000"
                      className="desert-input"
                      value={form.phone}
                      onChange={setField('phone')}
                      required
                      autoComplete="tel"
                    />
                  </Field>

                  <Field label="Age" required>
                    <input
                      type="number"
                      placeholder="Your age"
                      min={18}
                      max={99}
                      className="desert-input"
                      value={form.age}
                      onChange={setField('age')}
                      required
                    />
                  </Field>

                  <Field label="Nationality">
                    <input
                      type="text"
                      placeholder="Your country"
                      className="desert-input"
                      value={form.nationality}
                      onChange={setField('nationality')}
                      autoComplete="country-name"
                    />
                  </Field>
                </div>
              </FieldGroup>

              <div className="hr-desert" />

              {/* ── 02 Fitness & Experience ── */}
              <FieldGroup title="02 — Fitness & Experience">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Physical Fitness Level">
                    <DesertSelect value={form.fitnessLevel} onChange={setField('fitnessLevel')}>
                      <option value="">Select level</option>
                      <option>Beginner — light walking</option>
                      <option>Moderate — regular exercise</option>
                      <option>Active — hike regularly</option>
                      <option>Advanced — excellent endurance</option>
                    </DesertSelect>
                  </Field>

                  <Field label="Desert / Outdoors Experience">
                    <DesertSelect value={form.experience} onChange={setField('experience')}>
                      <option value="">Select experience</option>
                      <option>First time in a desert</option>
                      <option>Some camping experience</option>
                      <option>Several desert treks</option>
                      <option>Experienced desert traveller</option>
                    </DesertSelect>
                  </Field>
                </div>
              </FieldGroup>

              <div className="hr-desert" />

              {/* ── 03 Trip Preferences ── */}
              <FieldGroup title="03 — Trip Preferences">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <Field label="Experience Type" required>
                    <DesertSelect value={form.tripType} onChange={setField('tripType')} required>
                      <option value="">Choose experience</option>
                      {TRIP_TYPES.map((t) => <option key={t}>{t}</option>)}
                    </DesertSelect>
                  </Field>

                  <Field label="Party Size">
                    <DesertSelect value={form.partySize} onChange={setField('partySize')}>
                      <option value="">Number of travellers</option>
                      {PARTY_SIZES.map((p) => <option key={p}>{p}</option>)}
                    </DesertSelect>
                  </Field>

                  <Field label="Preferred Month">
                    <DesertSelect value={form.preferredMonth} onChange={setField('preferredMonth')}>
                      <option value="">Select month</option>
                      {MONTHS.map((m) => <option key={m}>{m}</option>)}
                    </DesertSelect>
                  </Field>
                </div>

                {/* Budget radio tiles */}
                <Field label="Estimated Budget (per person)" className="mt-5">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-2">
                    {BUDGETS.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`border rounded-sm py-2.5 px-3 font-body text-[10px] tracking-widest uppercase transition-all ${
                          form.budget === b
                            ? 'border-[#C4903A] bg-[rgba(196,144,58,0.12)] text-[#D4A843]'
                            : 'border-[rgba(196,144,58,0.2)] text-[#C9A96E] hover:border-[rgba(196,144,58,0.42)]'
                        }`}
                        aria-pressed={form.budget === b}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </Field>
              </FieldGroup>

              <div className="hr-desert" />

              {/* ── 04 Additional Details ── */}
              <FieldGroup title="04 — Additional Details">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Dietary Requirements">
                    <input
                      type="text"
                      placeholder="e.g. Vegetarian, Halal, Gluten-free…"
                      className="desert-input"
                      value={form.dietaryReqs}
                      onChange={setField('dietaryReqs')}
                    />
                  </Field>

                  <Field label="Medical / Health Considerations">
                    <input
                      type="text"
                      placeholder="Allergies, conditions we should know…"
                      className="desert-input"
                      value={form.medicalInfo}
                      onChange={setField('medicalInfo')}
                    />
                  </Field>

                  <Field label="How Did You Hear About Us?">
                    <DesertSelect value={form.howFound} onChange={setField('howFound')}>
                      <option value="">Select source</option>
                      {HOW_FOUND_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                    </DesertSelect>
                  </Field>

                  <Field label="Message / Special Requests">
                    <textarea
                      rows={3}
                      placeholder="Any additional wishes or questions…"
                      className="desert-input resize-none"
                      value={form.message}
                      onChange={setField('message')}
                    />
                  </Field>
                </div>
              </FieldGroup>

              <div className="hr-desert" />

              {/* Checkboxes */}
              <div className="space-y-4 mb-8">
                <CheckRow
                  id="newsletter"
                  checked={form.newsletter}
                  onChange={setField('newsletter')}
                >
                  Receive exclusive desert travel updates, seasonal offers, and Sahara stories from our team in Djanet.
                </CheckRow>

                <CheckRow
                  id="terms"
                  checked={form.termsAccepted}
                  onChange={setField('termsAccepted')}
                  required
                >
                  I agree to Sefar Agency's booking terms and privacy policy, and understand that trips are subject to availability.{' '}
                  <span className="text-[#C4903A]" aria-hidden="true">*</span>
                </CheckRow>
              </div>

              {/* Error message */}
              {status === 'error' && (
                <p role="alert" className="font-body text-xs text-red-400 mb-4">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}

              {/* Submit row */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'sending' || !form.termsAccepted}
                  className="btn-gold px-10 py-4 w-full sm:w-auto flex items-center justify-center gap-3"
                  aria-busy={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <span
                        className="w-3 h-3 border border-[#1A0E02] border-t-transparent rounded-full animate-spin"
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : (
                    'Submit Expedition Request'
                  )}
                </button>
                <p className="font-body text-xs text-[rgba(201,169,110,0.5)] text-center sm:text-left">
                  No payment required. We'll contact you within 24 h.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
