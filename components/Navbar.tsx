'use client'

import { useState, useEffect, useCallback } from 'react'
import Logo from '@/components/Logo'
import { NAV_LINKS } from '@/lib/data'

function scrollToSection(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const handleNavClick = (target: string) => {
    scrollToSection(target)
    setMenuOpen(false)
  }

  return (
    <>
      {/* ── Desktop / sticky nav ── */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[#1A0E02]/92 backdrop-blur-xl border-b border-[rgba(196,144,58,0.15)]'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
            aria-label="Back to top"
          >
            {/* <Logo /> */}
            <img src="/images/logo.png" alt="logo" width={45} height={45} />
            <div>
              <span className="font-display block text-xl text-[#F0D898] tracking-widest leading-none">
                SEFAR
              </span>
              <span className="font-body block text-[9px] tracking-[0.4em] text-[rgba(196,144,58,0.7)] uppercase">
                Agency · Djanet
              </span>
            </div>
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-10" role="list">
            {NAV_LINKS.map(({ label, target }) => (
              <li key={target}>
                <button
                  className="nav-link"
                  onClick={() => handleNavClick(target)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            className="hidden lg:block btn-gold px-6 py-2.5"
            onClick={() => handleNavClick('contact')}
          >
            Book Expedition
          </button>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={[
                  'block h-px w-6 bg-[#C4903A] transition-all duration-300',
                  i === 0 && menuOpen ? 'rotate-45 translate-y-2'  : '',
                  i === 1 && menuOpen ? 'opacity-0'                 : '',
                  i === 2 && menuOpen ? '-rotate-45 -translate-y-2' : '',
                ].join(' ')}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu overlay ── */}
      <div
        className={[
          'fixed inset-0 z-40 transition-all duration-500',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 bg-[#1A0E02]/97 backdrop-blur-2xl"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={[
            'absolute top-20 left-0 right-0 p-8 transition-all duration-500',
            menuOpen ? 'translate-y-0' : '-translate-y-8',
          ].join(' ')}
        >
          <div className="absolute inset-0 opacity-5 pattern-overlay pointer-events-none" />
          <nav className="flex flex-col items-center gap-8 mt-8" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ label, target }, i) => (
              <button
                key={target}
                className="font-display text-4xl text-[#E8D5A3] hover:text-[#C4903A] transition-colors duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => handleNavClick(target)}
              >
                {label}
              </button>
            ))}
            <button
              className="btn-gold px-8 py-3 mt-4"
              onClick={() => handleNavClick('contact')}
            >
              Book Your Expedition
            </button>
          </nav>
        </div>
      </div>
    </>
  )
}
