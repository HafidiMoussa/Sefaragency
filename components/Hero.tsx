'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import Image from 'next/image'
import { HERO_STATS } from '@/lib/data'

interface Particle {
  id:       number
  size:     number
  left:     number
  duration: number
  delay:    number
  drift:    number
  opacity:  number
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id:       i,
    size:     Math.random() * 3 + 1,
    left:     Math.random() * 100,
    duration: Math.random() * 12 + 8,
    delay:    Math.random() * 10,
    drift:    (Math.random() - 0.5) * 80,
    opacity:  Math.random() * 0.5 + 0.2,
  }))
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const particles = useMemo(() => generateParticles(28), [])

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)

    const handleMouse = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top  = `${e.clientY}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${e.clientX}px`
        ringRef.current.style.top  = `${e.clientY}px`
      }
    }

    window.addEventListener('mousemove', handleMouse)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Custom cursor — desktop only */}
      <div ref={dotRef}  className="cursor-dot  hidden lg:block" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring hidden lg:block" aria-hidden="true" />

      <section
        id="hero"
        className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background */}
        <div className="absolute inset-0 opacity-50" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1632257996200-cb89e88cac8d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Golden Sahara dunes at dawn — Djanet, Algeria"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A0E02]/72 via-[#1A0E02]/25 to-[#1A0E02]/88" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0E02]/55 via-transparent to-[#1A0E02]/35" />
        </div>

        {/* Scan line */}
        <div
          className="absolute w-full h-px opacity-[0.06] pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(196,144,58,0.9), transparent)',
            animation:  'scanLine 7s linear infinite',
          }}
          aria-hidden="true"
        />

        {/* Sand particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full"
              style={{
                width:     `${p.size}px`,
                height:    `${p.size}px`,
                left:      `${p.left}%`,
                top:       '-10px',
                background: `rgba(240,216,152,${p.opacity})`,
                ['--drift' as string]: `${p.drift}px`,
                ['--op'    as string]: p.opacity,
                animation: `particleFall ${p.duration}s ${p.delay}s ease-in infinite`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div
          className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C4903A]" />
            <span className="font-body text-xs tracking-[0.5em] text-[#C4903A] uppercase">
              Djanet · Algeria · Sahara
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C4903A]" />
          </div>

          {/* Heading */}
          <h1 className="font-display font-light leading-none mb-6">
            <span className="block text-[clamp(48px,8vw,96px)] text-[#F0D898]">Where</span>
            <span className="block text-[clamp(56px,10vw,112px)] text-shimmer italic">Silence Speaks</span>
            <span className="block text-[clamp(36px,6vw,78px)] text-[#E8D5A3] font-extralight">in golden dunes</span>
          </h1>

          <p className="font-body font-light text-[#C9A96E] text-base tracking-wide mb-12 max-w-2xl mx-auto leading-relaxed">
            Exclusive desert expeditions through the world's most spectacular landscape —
            the untamed Tassili n'Ajjer of southern Algeria
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => scrollTo('contact')} className="btn-gold px-10 py-4 w-56">
              Begin Your Journey
            </button>
            <button onClick={() => scrollTo('discover')} className="btn-ghost px-10 py-4 w-56">
              Explore Djanet
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex items-center justify-center gap-12 sm:gap-20">
            {HERO_STATS.map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-3xl sm:text-4xl text-[#D4A843]">{num}</div>
                <div className="font-body text-[10px] tracking-[0.35em] text-[rgba(201,169,110,0.7)] uppercase mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollTo('discover')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Scroll to discover section"
        >
          <span className="font-body text-[9px] tracking-[0.45em] text-[#C4903A] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#C4903A] to-transparent animate-pulse" />
        </button>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(196,144,58,0.38)] to-transparent" />
      </section>
    </>
  )
}
