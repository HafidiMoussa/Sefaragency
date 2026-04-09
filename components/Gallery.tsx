'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'
import { GALLERY_PHOTOS } from '@/lib/data'
import type { GalleryPhoto } from '@/types'

function GalleryItem({
  photo,
  index,
  onOpen,
}: {
  photo:   GalleryPhoto
  index:   number
  onOpen:  (photo: GalleryPhoto) => void
}) {
  return (
    <button
      className={`reveal break-inside-avoid relative overflow-hidden rounded-sm cursor-pointer group ${
        photo.tall ? 'aspect-[3/4]' : 'aspect-video'
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
      onClick={() => onOpen(photo)}
      aria-label={`View photo: ${photo.alt}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#1A0E02]/0 group-hover:bg-[#1A0E02]/38 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="font-body text-xs text-[#F0D898] tracking-widest">{photo.alt}</span>
      </div>
      <div className="absolute inset-0 border border-[rgba(196,144,58,0)] group-hover:border-[rgba(196,144,58,0.48)] transition-colors duration-300 rounded-sm" />
    </button>
  )
}

export default function Gallery() {
  const ref = useReveal()
  const [active, setActive] = useState<GalleryPhoto | null>(null)

  return (
    <section
      id="gallery"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      <div className="absolute inset-0 bg-[#1A0E02]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="reveal ornament mb-6">
            <span className="font-body text-[10px] tracking-[0.5em] text-[#C4903A] uppercase">Visual Journey</span>
          </div>
          <h2
            id="gallery-heading"
            className="reveal font-display text-5xl lg:text-7xl text-[#F0D898] leading-tight"
          >
            The <span className="text-shimmer italic">Sahara</span> Awaits
          </h2>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_PHOTOS.map((photo, i) => (
            <GalleryItem key={photo.src} photo={photo} index={i} onOpen={setActive} />
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="reveal text-center mt-16">
          <a
            href="https://www.instagram.com/sefaragency/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-3 px-8 py-3"
            aria-label="Follow Sefar Agency on Instagram"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            Follow @sefaragency
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo: ${active.alt}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A0E02]/96 backdrop-blur-xl p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-4xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              className="object-contain"
              quality={90}
            />
          </div>
          <button
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 text-[#C9A96E] hover:text-[#F0D898] text-2xl w-10 h-10 flex items-center justify-center border border-[rgba(196,144,58,0.3)] rounded-sm transition-colors"
            aria-label="Close lightbox"
          >
            ×
          </button>
        </div>
      )}
    </section>
  )
}
