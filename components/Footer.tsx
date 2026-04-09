import Logo from '@/components/Logo'
import { NAV_LINKS } from '@/lib/data'

// Pure server component — no interactivity needed
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative py-20 overflow-hidden border-t border-[rgba(196,144,58,0.13)]"
      aria-label="Site footer"
    >
      <div className="absolute inset-0 bg-[#0F0801]" />
      <div className="absolute inset-0 pattern-overlay opacity-18" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* <Logo /> */}
              <img src="/images/logo.png" alt="logo" width={45} height={45} />``
              <div>
                <span className="font-display block text-xl text-[#F0D898] tracking-widest leading-none">SEFAR</span>
                <span className="font-body block text-[9px] tracking-[0.4em] text-[rgba(196,144,58,0.65)] uppercase">Agency · Djanet</span>
              </div>
            </div>
            <p className="font-body font-light text-sm text-[#C9A96E] leading-relaxed mb-6 max-w-xs">
              Licensed Algerian tourism operator specialising in exclusive Saharan expeditions from Djanet since 2012.
            </p>

            {/* Socials */}
            <div className="flex gap-3" aria-label="Social media links">
              <a
                href="https://www.instagram.com/sefaragency/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-9 h-9 border border-[rgba(196,144,58,0.25)] rounded-sm flex items-center justify-center text-[#C9A96E] hover:border-[#C4903A] hover:text-[#D4A843] transition-all"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://wa.me/213000000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="w-9 h-9 border border-[rgba(196,144,58,0.25)] rounded-sm flex items-center justify-center text-[#C9A96E] hover:border-[#C4903A] hover:text-[#D4A843] transition-all"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="font-body text-[10px] tracking-[0.4em] text-[#C4903A] uppercase mb-6">Explore</h3>
            <ul className="space-y-3" role="list">
              {NAV_LINKS.map(({ label, target }) => (
                <li key={target}>
                  <a
                    href={`#${target}`}
                    className="font-body text-sm text-[#C9A96E] hover:text-[#D4A843] transition-colors tracking-wide"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="font-body text-sm text-[#C9A96E] hover:text-[#D4A843] transition-colors tracking-wide"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h3 className="font-body text-[10px] tracking-[0.4em] text-[#C4903A] uppercase mb-6">Find Us</h3>
            <ul className="space-y-4 text-sm text-[#C9A96E]" role="list">
              <li className="flex gap-3">
                <span className="text-[#C4903A] shrink-0 mt-0.5" aria-hidden="true">◈</span>
                <span className="font-body leading-relaxed">
                  Djanet, Illizi Province<br />Algeria — 33000
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C4903A] shrink-0 mt-0.5" aria-hidden="true">◈</span>
                <a href="mailto:contact@sefaragency.dz" className="font-body hover:text-[#D4A843] transition-colors">
                  contact@sefaragency.dz
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C4903A] shrink-0 mt-0.5" aria-hidden="true">◈</span>
                <a href="tel:+213000000000" className="font-body hover:text-[#D4A843] transition-colors">
                  +213 (0) 000 000 000
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C4903A] shrink-0 mt-0.5" aria-hidden="true">◈</span>
                <a
                  href="https://www.instagram.com/sefaragency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body hover:text-[#D4A843] transition-colors"
                >
                  @sefaragency
                </a>
              </li>
            </ul>
          </address>
        </div>

        {/* Bottom bar */}
        <div className="hr-desert mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[11px] text-[rgba(201,169,110,0.45)] tracking-wide">
            © {year} Sefar Agency · Djanet, Algeria. All rights reserved.
          </p>
          <p className="font-arabic text-lg text-[rgba(196,144,58,0.35)]" lang="ar">
            الصحراء تنتظرك
          </p>
          <div className="flex gap-6 text-[10px] tracking-widest text-[rgba(201,169,110,0.38)] uppercase">
            <button className="hover:text-[#C9A96E] transition-colors">Privacy</button>
            <button className="hover:text-[#C9A96E] transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
