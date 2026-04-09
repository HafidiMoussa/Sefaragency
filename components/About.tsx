'use client'

import { useReveal } from '@/hooks/useReveal'
import { TESTIMONIALS, ABOUT_STATS } from '@/lib/data'
import type { Testimonial, Stat } from '@/types'

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#D4A843" aria-hidden="true">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  )
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  return (
    <div
      className="reveal glass-card rounded-sm p-6 text-center"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="font-display text-4xl lg:text-5xl text-shimmer mb-2">{stat.num}</div>
      <p className="font-body text-xs text-[#C9A96E] leading-relaxed">{stat.label}</p>
    </div>
  )
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <div
      className="reveal glass-card rounded-sm p-7 space-y-5"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <StarRating count={t.rating} />
      <blockquote className="font-display text-xl italic text-[#E8D5A3] leading-relaxed">
        "{t.quote}"
      </blockquote>
      <footer className="border-t border-[rgba(196,144,58,0.15)] pt-4">
        <cite className="not-italic">
          <p className="font-body font-medium text-sm text-[#D4A843]">{t.name}</p>
          <p className="font-body text-[10px] tracking-widest text-[#C9A96E] uppercase mt-0.5">{t.origin}</p>
          <p className="font-body text-[10px] text-[rgba(196,144,58,0.45)] mt-1 italic">{t.trip}</p>
        </cite>
      </footer>
    </div>
  )
}

export default function About() {
  const ref = useReveal()

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0E02] to-[#210F03]" />
      <div className="absolute inset-0 stars-bg opacity-28" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {ABOUT_STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Testimonials header */}
        <div className="text-center mb-16">
          <div className="reveal ornament mb-6">
            <span className="font-body text-[10px] tracking-[0.5em] text-[#C4903A] uppercase">Traveller Voices</span>
          </div>
          <h2
            id="about-heading"
            className="reveal font-display text-5xl lg:text-6xl text-[#F0D898] leading-tight"
          >
            Stories from the <span className="text-shimmer italic">Sand</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>

        {/* Arabic calligraphy */}
        <div className="reveal text-center mt-24">
          <p className="font-arabic text-[clamp(40px,7vw,80px)] text-[rgba(196,144,58,0.22)] leading-tight">
            الصحراء تنتظرك
          </p>
          <p className="font-body text-[10px] tracking-[0.5em] text-[rgba(201,169,110,0.35)] uppercase mt-3">
            The desert awaits you
          </p>
        </div>
      </div>
    </section>
  )
}
