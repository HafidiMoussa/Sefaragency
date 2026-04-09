'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'
import { EXPERIENCES } from '@/lib/data'
import type { Experience, ExperienceTag } from '@/types'

const TAG_STYLES: Record<ExperienceTag, string> = {
  Signature: 'text-[#D4A843] border-[rgba(212,168,67,0.4)]',
  Cultural:  'text-[#C9A96E] border-[rgba(201,169,110,0.4)]',
  Premium:   'text-[#F0D898] border-[rgba(240,216,152,0.4)]',
  Adventure: 'text-[#E8C87A] border-[rgba(232,200,122,0.4)]',
  Luxury:    'text-[#D4A843] border-[rgba(212,168,67,0.4)]',
}

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  return (
    <article
      className="reveal glass-card rounded-sm overflow-hidden group cursor-pointer"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={exp.image}
          alt={exp.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E02]/80 to-transparent" />
        <span
          className={`absolute top-4 right-4 font-body text-[9px] tracking-[0.28em] uppercase border px-2.5 py-1 rounded-sm backdrop-blur-sm bg-[#1A0E02]/40 ${TAG_STYLES[exp.tag]}`}
        >
          {exp.tag}
        </span>
        <span className="absolute bottom-4 left-4 font-body text-[9px] tracking-widest text-[#C9A96E] uppercase">
          {exp.duration}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-2xl text-[#F0D898] mb-1">{exp.title}</h3>
        <p className="font-body text-[10px] tracking-[0.35em] text-[#C4903A] uppercase mb-3">{exp.subtitle}</p>
        <p className="font-body font-light text-sm text-[#C9A96E] leading-relaxed mb-5">{exp.desc}</p>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="font-body text-[10px] tracking-[0.28em] text-[#D4A843] uppercase hover:text-[#F0D898] transition-colors border-b border-[rgba(212,168,67,0.3)] hover:border-[#D4A843] pb-px"
        >
          Enquire now →
        </button>
      </div>
    </article>
  )
}

export default function Experiences() {
  const ref = useReveal()

  return (
    <section
      id="experiences"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 overflow-hidden"
      aria-labelledby="experiences-heading"
    >
      <div className="absolute inset-0 bg-[#210F03]" />
      <div className="absolute inset-0 stars-bg opacity-35" />
      <div className="absolute inset-0 pattern-overlay opacity-18" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="reveal ornament mb-6">
            <span className="font-body text-[10px] tracking-[0.5em] text-[#C4903A] uppercase">Curated Journeys</span>
          </div>
          <h2
            id="experiences-heading"
            className="reveal font-display text-5xl lg:text-7xl text-[#F0D898] mb-6 leading-tight"
          >
            Desert <span className="text-shimmer italic">Experiences</span>
          </h2>
          <p className="reveal font-body font-light text-[#C9A96E] text-sm max-w-xl mx-auto leading-relaxed" style={{ transitionDelay: '100ms' }}>
            Every journey is a living story — shaped by the wind, the sand, and the ancient wisdom of the Tuareg people.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
