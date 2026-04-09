import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title:       'Sefar Agency — Discover Djanet, Algeria',
  description: "Luxury desert expeditions in Djanet, Algeria. Explore Tassili n'Ajjer, the Sahara dunes, and ancient rock art with Sefar Agency.",
  keywords:    ['Djanet', 'Algeria', 'Sahara', 'desert tours', "Tassili n'Ajjer", 'tourism', 'travel agency'],
  authors:     [{ name: 'Sefar Agency', url: 'https://www.instagram.com/sefaragency/' }],
  openGraph: {
    title:       'Sefar Agency — Discover Djanet, Algeria',
    description: 'Luxury desert expeditions in Djanet, Algeria.',
    type:        'website',
    locale:      'en_US',
  },
  twitter: {
    card:  'summary_large_image',
    title: 'Sefar Agency — Discover Djanet, Algeria',
  },
}

export const viewport: Viewport = {
  themeColor: '#1A0E02',
  width:      'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  )
}
