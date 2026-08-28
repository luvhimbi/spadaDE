import { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/logo.jpg'
import exteriorFacade from './assets/exterior-facade.jpeg'
import exteriorCourtyard from './assets/exterior-courtyard.jpeg'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import roomBedroomAngle from './assets/room-bedroom-angle.jpeg'
import roomBedroom from './assets/room-bedroom.jpeg'
import roomDiningArea from './assets/room-dining-area.jpeg'
import spadadeCollage from './assets/spadade-collage.jpeg'
import hallwayDecor from './assets/hallway-decor.jpg'
import diningNookArt from './assets/dining-nook-art.jpg'
import wallPlanters from './assets/wall-planters.jpg'
import bathroomMarble from './assets/bathroom-marble.jpg'
import galleryAdd1 from './assets/gallery-addition-1.jpg'
import galleryAdd2 from './assets/gallery-addition-2.jpg'
import galleryAdd3 from './assets/gallery-addition-3.jpg'
import northcliffRidge from './assets/northcliff-ridge.jpg'
import walterSisulu from './assets/walter-sisulu.jpg'
import kloofendal from './assets/kloofendal.jpg'

/* ===== ICONS (inline SVG) ===== */
const Shield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)
const Heart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)
const Sun = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)
const Bed = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>
  </svg>
)
const Wifi = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>
  </svg>
)
const Shower = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a1 1 0 0 0 1 1h6"/><path d="M18 8v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8"/>
    <line x1="10" y1="12" x2="10" y2="12.01"/><line x1="14" y1="12" x2="14" y2="12.01"/>
  </svg>
)
const Coffee = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>
  </svg>
)
const Parking = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>
  </svg>
)
const Expand = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
    <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
  </svg>
)
const X = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)
const ChevL = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
)
const ChevR = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
)
const MapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const Phone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)
const Mail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
)

const ArrowR = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

/* =============================================
   APP
   ============================================= */
function App() {
  const [view, setView] = useState<'home' | 'terms' | 'privacy'>(() => {
    const path = window.location.pathname
    if (path.includes('/terms')) return 'terms'
    if (path.includes('/privacy')) return 'privacy'
    return 'home'
  })
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)

  // Handle URL path changes (browser navigation)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname
      if (path.includes('/terms')) setView('terms')
      else if (path.includes('/privacy')) setView('privacy')
      else setView('home')
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const gallery = [
    { src: exteriorCourtyard, alt: 'Courtyard with wrought-iron balcony', cls: 'wide' },
    { src: roomBedroom, alt: 'Bedroom with modern furnishings', cls: '' },
    { src: bathroomMarble, alt: 'Marble-tiled bathroom', cls: 'tall' },
    { src: exteriorFacade, alt: 'Front facade at night', cls: '' },
    { src: diningNookArt, alt: 'Dining nook with African art', cls: '' },
    { src: wallPlanters, alt: 'Wooden wall planters', cls: '' },
    { src: galleryAdd1, alt: 'Spadade View BnB Gallery Image', cls: 'wide' },
    { src: galleryAdd2, alt: 'Spadade View BnB detail', cls: '' },
    { src: galleryAdd3, alt: 'Spadade View BnB interior', cls: '' },
  ]

  const scrollGallery = (dir: 'left' | 'right') => {
    const el = document.getElementById('gallery-track')
    if (el) {
      const scrollAmount = window.innerWidth > 768 ? 400 : 280;
      el.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
    }
  }

  // Scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Intersection Observer for scroll reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen || lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen, lightbox])

  // Lightbox keyboard
  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox(p => p !== null ? (p + 1) % gallery.length : null)
      if (e.key === 'ArrowLeft') setLightbox(p => p !== null ? (p - 1 + gallery.length) % gallery.length : null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, gallery.length])

  const navigateTo = (path: 'home' | 'terms' | 'privacy') => {
    const url = path === 'home' ? '/' : `/${path}`
    window.history.pushState({}, '', url)
    setView(path)
    window.scrollTo(0, 0)
  }

  const goTo = (id: string) => {
    setMenuOpen(false)
    if (view !== 'home') {
      navigateTo('home')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* =========== NAVBAR =========== */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo" onClick={e => { e.preventDefault(); navigateTo('home') }}>
            <img src={logo} alt="Spadade View BnB Logo" />
            <div className="nav-logo-text">
              <span className="nav-logo-name">Spadade View</span>
              <span className="nav-logo-sub">BnB</span>
            </div>
          </a>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={e => { e.preventDefault(); goTo('about') }}>Our Story</a>
            <a href="#rooms" onClick={e => { e.preventDefault(); goTo('rooms') }}>Rooms</a>
            <a href="#activities" onClick={e => { e.preventDefault(); goTo('activities') }}>Things to Do</a>
            <a href="#gallery" onClick={e => { e.preventDefault(); goTo('gallery') }}>Gallery</a>
            <a href="https://www.booking.com/hotel/za/spadade-view.en-gb.html" target="_blank" rel="noopener noreferrer" className="nav-cta">Book Now</a>
          </div>

          <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />

      {view === 'home' ? (
        <>
          {/* =========== HERO =========== */}
          <section className="hero" id="hero">
        <div className="hero-bg">
          <img src={exteriorCourtyard} alt="Spadade View BnB Premium Spaces" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1>Your Restful Haven of<br /><span>Comfort</span> &amp; Warmth</h1>
          <p className="hero-sub">
            Discover a premium sanctuary in Cosmo City featuring beautifully curated rooms, private en-suite bathrooms, free Wi-Fi, and secure parking. The perfect retreat for rest and business.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => goTo('rooms')}>
              <span>Explore Rooms</span> <ArrowR />
            </button>
            <button className="btn-secondary" onClick={() => goTo('about')}>
              <span>Our Story</span>
            </button>
          </div>
        </div>

        {/* Wave: Hero → About */}
        <div className="wave-divider wave-hero-to-about">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,72 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* =========== ABOUT =========== */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-img reveal-left">
              <img src={spadadeCollage} alt="Courtyard at Spadade View BnB" />
            </div>
            <div className="about-text reveal-right">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">The Spadade Legacy</h2>
              <hr className="section-divider" />
              <p className="about-body">
                <strong>Elias Ceku Yende</strong>, affectionately known as Spadade, was a man of quiet but profound strength.
                Like many of his generation under the oppressive apartheid regime, his intelligence was
                dismissed and undermined in formal work. Yet he found purpose and meaning as a
                guardian and provider, raising and supporting his family through honest work.
              </p>
              <p className="about-body">
                With his bicycle, he sold milk in Alexandra township and later flowers in Soweto,
                sharing beauty, life, and care with his community. Spadade loved plants and flowers,
                believing that nurturing growth&mdash;whether in nature or in people&mdash;is a true act of freedom.
              </p>
              <div className="about-quote">
                <p>
                  "He encouraged those around him to think deeply, reflect critically,
                  and never take issues at face value. His life was a testament to integrity,
                  moral courage, and the power of conscious living."
                </p>
                <cite>The Spadade Legacy</cite>
              </div>
              <p className="about-body">
                Spadade View BnB carries this legacy&mdash;a place to rest, reflect, and be inspired
                by truth, dignity, and growth. When you stay with us, you're not just booking
                accommodation; you're stepping into a space that honours the values Spadade embodied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave: About → Values */}
      <div className="wave-divider wave-about-to-values">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,40 C240,100 480,10 720,60 C960,110 1200,20 1440,50 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* =========== VALUES =========== */}
      <section className="values" id="values">
        <div className="container">
          <div className="values-head reveal">
            <h2 className="section-title">Built on Values That Matter</h2>
            <hr className="section-divider" />
            <br />
            <p className="section-subtitle">
              Every corner of Spadade View BnB reflects the principles that guided
              Elias Ceku Yende's life.
            </p>
          </div>
          <div className="values-row stagger-children">
            <div className="value-item reveal">
              <span className="value-num">01</span>
              <div className="value-icon-wrap"><Shield /></div>
              <h3>Courage</h3>
              <p>
                We believe in standing for what is right, even when it's difficult.
                Our space welcomes guests who value authenticity and integrity.
              </p>
            </div>
            <div className="value-item reveal">
              <span className="value-num">02</span>
              <div className="value-icon-wrap"><Heart /></div>
              <h3>Dignity</h3>
              <p>
                Every guest is treated with respect and care. We create an environment
                where everyone feels valued and welcome.
              </p>
            </div>
            <div className="value-item reveal">
              <span className="value-num">03</span>
              <div className="value-icon-wrap"><Sun /></div>
              <h3>Freedom</h3>
              <p>
                We celebrate the freedom to be yourself, to think critically, and to grow.
                This is a space for reflection and renewal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave: Values → Rooms */}
      <div className="wave-divider wave-values-to-rooms">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,80 C320,20 640,100 960,40 C1120,16 1300,60 1440,32 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* =========== ROOMS =========== */}
      <section className="rooms" id="rooms">
        <div className="container">
          <div className="rooms-head reveal">
            <span className="section-label">Accommodation</span>
            <h2 className="section-title">Your Comfortable Retreat</h2>
            <hr className="section-divider" />
            <br />
            <p className="section-subtitle">
              Each space is thoughtfully furnished with warmth, care, and African artistry.
            </p>
          </div>

          {/* Featured Room */}
          <div className="room-featured reveal">
            <div className="room-featured-img">
              <img src={roomBedroom} alt="The Spadade Suite" />
            </div>
            <div className="room-featured-body">
              <span className="room-tag">Featured Room</span>
              <h3>The Spadade Suite</h3>
              <p>
                A bright, airy room with a comfortable double bed, modern blinds,
                artisan wall decor, and a private en-suite bathroom. Your sanctuary
                for rest and renewal in the heart of Cosmo City.
              </p>
              <div className="room-features">
                <span className="room-feat"><Bed /> Double Bed</span>
                <span className="room-feat"><Wifi /> Free Wi-Fi</span>
                <span className="room-feat"><Shower /> En-Suite</span>
                <span className="room-feat"><Coffee /> Tea &amp; Coffee</span>
                <span className="room-feat"><Parking /> Parking</span>
              </div>
            </div>
          </div>

          {/* Room Cards Grid */}
          <div className="rooms-grid stagger-children">
            <div className="room-card reveal">
              <div className="room-card-img">
                <img src={roomDiningArea} alt="Private dining nook" />
              </div>
              <div className="room-card-body">
                <h3>Private Dining Nook</h3>
                <p>
                  A cosy in-room dining space with a glass table, designer chairs,
                  and curated African artwork.
                </p>
                <div className="room-card-feats">
                  <span className="room-feat"><Coffee /> Kitchenette</span>
                </div>
              </div>
            </div>
            <div className="room-card reveal">
              <div className="room-card-img">
                <img src={roomBedroomAngle} alt="Restful bedroom" />
              </div>
              <div className="room-card-body">
                <h3>Restful Bedroom</h3>
                <p>
                  Quality linens, a wooden-slatted headboard, and a teal throw
                  for added warmth and comfort.
                </p>
                <div className="room-card-feats">
                  <span className="room-feat"><Bed /> Queen Bed</span>
                  <span className="room-feat"><Wifi /> Wi-Fi</span>
                </div>
              </div>
            </div>
            <div className="room-card reveal">
              <div className="room-card-img">
                <img src={hallwayDecor} alt="Hallway with African art" />
              </div>
              <div className="room-card-body">
                <h3>Artisan Hallway</h3>
                <p>
                  Thoughtfully decorated with African art and macram&eacute;
                  accents connecting each space.
                </p>
                <div className="room-card-feats">
                  <span className="room-feat"><Heart /> Artisan Decor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave: Rooms → Things to Do */}
      <div className="wave-divider wave-rooms-to-things">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,40 C240,100 480,10 720,60 C960,110 1200,20 1440,50 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* =========== THINGS TO DO =========== */}
      <section className="things-to-do" id="activities">
        <div className="container">
          <div className="things-head reveal">
            <span className="section-label">Local Attractions</span>
            <h2 className="section-title">Things to Do Nearby</h2>
            <hr className="section-divider" />
            <br />
            <p className="section-subtitle">
              Make the most of your stay! Whether you have a few hours or a full day, 
              discover the best local spots just a short drive from Spadade View BnB.
            </p>
          </div>
          <div className="things-grid">
            <div className="thing-card reveal">
              <div className="thing-img">
                <img src="https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=800&auto=format&fit=crop" alt="Local Malls and Food" loading="lazy" />
              </div>
              <div className="thing-body">
                <h3>Local Malls & Food</h3>
                <p className="thing-desc">Quickly grab a bite to eat, buy drinks, or catch a movie before or after checking in.</p>
                <ul className="thing-list">
                  <li><span>Clearwater Mall</span></li>
                  <li><span>Blueberry Square</span></li>
                </ul>
              </div>
            </div>
            <div className="thing-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="thing-img thing-slideshow">
                <img src={walterSisulu} alt="Walter Sisulu Botanical Garden" loading="lazy" />
                <img src={northcliffRidge} alt="Northcliff Ridge Eco Park" loading="lazy" />
                <img src={kloofendal} alt="Kloofendal Nature Reserve" loading="lazy" />
              </div>
              <div className="thing-body">
                <h3>Scenic & Romantic Spots</h3>
                <p className="thing-desc">Perfect for a beautiful picnic or watching the sunset on the ridge.</p>
                <ul className="thing-list">
                  <li><span>Walter Sisulu Botanical Garden</span> <em>~25 min</em></li>
                  <li><span>Northcliff Ridge Eco Park</span> <em>~25 min</em></li>
                  <li><span>Kloofendal Nature Reserve</span> <em>~20 min</em></li>
                </ul>
              </div>
            </div>
            <div className="thing-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="thing-img">
                <img src="https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=800&auto=format&fit=crop" alt="Entertainment Hubs" loading="lazy" />
              </div>
              <div className="thing-body">
                <h3>Entertainment Hubs</h3>
                <p className="thing-desc">Ideal for a fun day out, dinner, or a comedy show nearby.</p>
                <ul className="thing-list">
                  <li><span>Montecasino</span> <em>~15 min</em></li>
                  <li><span>Croc City Crocodile Park</span> <em>~15 min</em></li>
                  <li><span>Apartheid Museum</span> <em>~35 min</em></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== GALLERY =========== */}
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="gallery-head reveal">
            <span className="section-label">Gallery</span>
            <h2 className="section-title">Explore Our Spaces</h2>
            <hr className="section-divider" />
            <br />
            <p className="section-subtitle">
              From the wrought-iron balcony to marble-tiled bathrooms, every detail
              is crafted with care.
            </p>
          </div>
          <div className="gallery-carousel">
            <button className="carousel-btn prev-btn" onClick={() => scrollGallery('left')} aria-label="Previous image"><ChevL /></button>
            <div className="gallery-track" id="gallery-track">
              {gallery.map((img, i) => (
                <div key={i} className={`carousel-cell ${img.cls}`} onClick={() => setLightbox(i)}>
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <div className="carousel-cell-overlay"><Expand /></div>
                </div>
              ))}
            </div>
            <button className="carousel-btn next-btn" onClick={() => scrollGallery('right')} aria-label="Next image"><ChevR /></button>
          </div>
        </div>
      </section>

      {/* Wave: Gallery → Contact */}
      <div className="wave-divider wave-gallery-to-contact">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,80 C320,20 640,100 960,40 C1120,16 1300,60 1440,32 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* =========== LIGHTBOX =========== */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close"><X /></button>
          <button className="lightbox-arrow lightbox-prev" onClick={e => { e.stopPropagation(); setLightbox((lightbox - 1 + gallery.length) % gallery.length) }} aria-label="Previous"><ChevL /></button>
          <div className="lightbox-img-wrap" onClick={e => e.stopPropagation()}>
            <img src={gallery[lightbox].src} alt={gallery[lightbox].alt} />
          </div>
          <button className="lightbox-arrow lightbox-next" onClick={e => { e.stopPropagation(); setLightbox((lightbox + 1) % gallery.length) }} aria-label="Next"><ChevR /></button>
          <span className="lightbox-counter">{lightbox + 1} / {gallery.length}</span>
        </div>
      )}

      {/* =========== CONTACT =========== */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-wrapper">
            {/* Booking.com CTA Card */}
            <div className="booking-cta-card reveal">
              <h3>Secure Your Booking</h3>
              <p>
                We partner with Booking.com to provide a secure and seamless reservation experience. Click below to view live availability and instantly book your stay.
              </p>
              <a href="https://www.booking.com/hotel/za/spadade-view.en-gb.html" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span>Book on Booking.com</span> <ArrowR />
              </a>
            </div>

            {/* Inquiry Card */}
            <div className="inquiry-card reveal">
              <div className="inquiry-card-header">
                <h3>General Inquiries</h3>
                <p>Have questions about our rooms, location, or amenities? Send us a message.</p>
              </div>
              <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Phone / WhatsApp</label>
                  <input type="tel" id="phone" placeholder="Your Phone Number" />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="How can we help you?" required style={{ minHeight: '120px' }}></textarea>
                </div>
                <button type="submit" className="btn-primary form-btn" style={{ alignSelf: 'center', padding: '16px 48px', width: '100%', maxWidth: '280px', justifyContent: 'center' }}>
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map Card */}
            <div className="map-card reveal">
              <iframe
                title="Google Map Location"
                src="https://maps.google.com/maps?q=9733%20Laos%20Crescent,%20Cosmo%20City,%20Gauteng&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Wave: Contact → Footer */}
      <div className="wave-divider wave-contact-to-footer">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,80 C320,20 640,100 960,40 C1120,16 1300,60 1440,32 L1440,120 L0,120 Z" />
        </svg>
      </div>
        </>
      ) : view === 'terms' ? (
        <Terms />
      ) : (
        <Privacy />
      )}

      {/* =========== FOOTER =========== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-brand-logo">
                <img src={logo} alt="Spadade View BnB Logo" />
                <span>Spadade View BnB</span>
              </div>
              <p>
                A home rooted in courage, dignity, and freedom. Honouring the legacy
                of Elias Ceku Yende&mdash;a man who shared beauty and care with his community.
              </p>
            </div>
            <div className="footer-col">
              <h4>Navigate</h4>
              <ul>
                <li><a href="#hero" onClick={e => { e.preventDefault(); goTo('hero') }}>Home</a></li>
                <li><a href="#about" onClick={e => { e.preventDefault(); goTo('about') }}>Our Story</a></li>
                <li><a href="#values" onClick={e => { e.preventDefault(); goTo('values') }}>Values</a></li>
                <li><a href="#rooms" onClick={e => { e.preventDefault(); goTo('rooms') }}>Rooms</a></li>
                <li><a href="#gallery" onClick={e => { e.preventDefault(); goTo('gallery') }}>Gallery</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="https://www.booking.com/hotel/za/spadade-view.en-gb.html" target="_blank" rel="noopener noreferrer">Book Now</a></li>
                <li><a href="#contact" onClick={e => { e.preventDefault(); goTo('contact') }}>Contact Us</a></li>
                <li><a href="/terms" onClick={e => { e.preventDefault(); navigateTo('terms') }}>Terms of Service</a></li>
                <li><a href="/privacy" onClick={e => { e.preventDefault(); navigateTo('privacy') }}>Privacy Policy</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <div className="footer-contact-row"><MapPin /><span>9733 Laos Crescent, Ext 8, Cosmo City</span></div>
              <div className="footer-contact-row"><Phone /><span>075 945 2562</span></div>
              <div className="footer-contact-row"><Mail /><span>info@spadadeviewbnb.co.za</span></div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Spadade View BnB. All rights reserved. A legacy of courage, dignity, and freedom.</p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/profile.php?id=61577062197011" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/spadadeview_bnb/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://wa.me/27759452562" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
      </a>
            </div>
          </div>
        </div>
      </footer>

      {/* =========== FLOATING WHATSAPP =========== */}
      <a
        href="https://wa.me/27759452562"
        className="whatsapp-floating"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>
    </>
  )
}

export default App
