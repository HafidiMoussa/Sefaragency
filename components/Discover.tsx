'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

const FEATURES = [
  'Official licensed Algerian tourism operator',
  "Native Tuareg guides & cultural immersion",
  "UNESCO World Heritage site access — Tassili n'Ajjer",
  'Sustainable & community-led expeditions',
]

export default function Discover() {
  const ref = useReveal()

  return (
    <section
      id="discover"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 overflow-hidden"
      aria-labelledby="discover-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0E02] to-[#210F03]" />
      <div className="absolute inset-0 pattern-overlay opacity-25" />

      {/* Decorative rotating ring */}
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#C4903A] opacity-[0.04]"
        style={{ animation: 'spin 50s linear infinite' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal text-center mb-16">
          <div className="ornament mb-4">
            <span className="font-body text-[10px] tracking-[0.5em] text-[#C4903A] uppercase">Our Story</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image side */}
          <div className="reveal">
            <div className="geo-border relative max-w-md mx-auto lg:mx-0 aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1689366041146-24df22d8cc9c?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sahara sunset over the dunes near Djanet"
                fill
                className="object-cover rounded-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E02]/60 to-transparent rounded-sm" />

              {/* Year badge */}
              <div className="absolute -top-6 -left-6 glass-card p-4 rounded-sm">
                <p className="font-body text-[9px] tracking-[0.3em] text-[#C4903A] uppercase mb-1">Est.</p>
                <p className="font-display text-3xl text-[#F0D898]">2012</p>
              </div>

              {/* Arabic badge */}
              <div className="absolute -bottom-8 -right-8 glass-card p-5 rounded-sm w-52">
                <p className="font-arabic text-2xl text-[#D4A843] mb-2">صفار</p>
                <p className="font-body text-xs text-[#C9A96E] leading-relaxed">
                  In Tuareg, <em>Sefar</em> means "city of ghosts" — ancient formations that have witnessed millennia of Saharan life.
                </p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal space-y-8" style={{ transitionDelay: '200ms' }}>
            <div>
              <h2
                id="discover-heading"
                className="font-display text-5xl lg:text-6xl text-[#F0D898] leading-tight mb-4"
              >
                The Heartbeat of<br />
                <span className="text-shimmer italic">Ancient Algeria</span>
              </h2>
              <div className="h-px w-20 bg-[#C4903A]" />
            </div>

            <p className="font-body font-light text-[#C9A96E] text-sm leading-relaxed">
              Sefar Agency was born from a deep love for the Algerian Sahara — its silence, its grandeur,
              its timelessness. Based in Djanet, gateway to the Tassili n'Ajjer National Park, we craft
              journeys that connect travellers with one of Earth's most awe-inspiring landscapes.
            </p>

            <p className="font-body font-light text-[#C9A96E] text-sm leading-relaxed">
              From the towering dunes of the Erg Admer to the prehistoric rock art galleries of Tassili,
              every expedition with Sefar is a passage through deep time — guided by our expert Tuareg team
              who have called this desert home for generations.
            </p>

            <ul className="space-y-4">
              {FEATURES.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-[#C4903A] shrink-0" aria-hidden="true" />
                  <span className="font-body text-sm text-[#E8D5A3] leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ghost px-8 py-3"
            >
              Our Experiences →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
