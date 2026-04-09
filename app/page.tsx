import Navbar      from '@/components/Navbar'
import Hero        from '@/components/Hero'
import Discover    from '@/components/Discover'
import Experiences from '@/components/Experiences'
import Gallery     from '@/components/Gallery'
import About       from '@/components/About'
import BookingForm from '@/components/BookingForm'
import Footer      from '@/components/Footer'

// Server component — no 'use client' needed at this level
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Discover />
      <Experiences />
      <Gallery />
      <About />
      <BookingForm />
      <Footer />
    </main>
  )
}
