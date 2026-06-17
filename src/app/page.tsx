'use client';

import './globals.css';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Gallery items
  const galleryItems = [
    {
      img: "/gallery/bc440e23-1ff3-4169-af77-40c874848a1b.jpg",
      caption: "Corporate LED Wall & Stage",
      number: "01"
    },
    {
      img: "/gallery/19b57f7c-e740-4d10-80f1-7e226abafcfd.jpg",
      caption: "Conference Audio Systems",
      number: "02"
    },
    {
      img: "/gallery/7900fd62-19bf-4ca3-aa5c-5a20b7b7b2b5.jpg",
      caption: "Boardroom AV",
      number: "03"
    },
    {
      img: "/gallery/7894e275-c490-404a-b279-a4366824bd16.jpg",
      caption: "Exhibition Displays",
      number: "04"
    },
    {
      img: "/gallery/0fffa344-8289-404e-bec4-1fb754115443.jpg",
      caption: "Event Production",
      number: "05"
    },
    {
      img: "/gallery/30bdfd59-7b60-4b0c-b87d-20193dedff55.jpg",
      caption: "Lighting & Rigging",
      number: "06"
    },
    {
      img: "/gallery/432d250b-2aca-433c-8a97-2261da7f376a.jpg",
      caption: "Display Systems",
      number: "07"
    },
    {
      img: "/gallery/8f52f091-e10a-4dd9-b06c-be58925150b4.jpg",
      caption: "Corporate Setup",
      number: "08"
    },
    {
      img: "/gallery/11f99473-86af-4540-a76f-ecb6983817c9.jpg",
      caption: "Technical Support",
      number: "09"
    },
    {
      img: "/gallery/e88e9f35-4aa0-46fc-87e6-9698d8297471.jpg",
      caption: "On-Site Execution",
      number: "10"
    },
    {
      img: "/gallery/c4b439fe-114e-4322-a8b4-c694e440fe49.jpg",
      caption: "Premium Lighting",
      number: "11"
    },
    {
      img: "/gallery/d02eea4a-448b-41ef-b4d2-ab51063d38e9.jpg",
      caption: "Venue Preparation",
      number: "12"
    }
  ];

  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
      if (window.scrollY > 50) {
        headerRef.current?.classList.add('is-scrolled');
      } else {
        headerRef.current?.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrevGallery = () => {
    setGalleryIndex(prev => prev === 0 ? galleryItems.length - 1 : prev - 1);
  };

  const handleNextGallery = () => {
    setGalleryIndex(prev => prev === galleryItems.length - 1 ? 0 : prev + 1);
  };

  return (
    <div>
      <a className="skip-link" href="#main">Skip to content</a>

      {/* Header */}
      <header className="site-header" data-header ref={headerRef}>
        <a className="brand" href="#home" aria-label="AV-TEC home">
          <img
            className="brand-logo"
            src="/logo/av-tec-logo-web.png"
            alt="AV-TEC Audio Visual Technology"
            width="180"
            height="95"
          />
          <span>
            <strong>AV-TEC</strong>
            <small>Since 1992</small>
          </span>
        </a>
        <nav
          className={`primary-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary navigation"
        >
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#equipment" onClick={() => setMenuOpen(false)}>Equipment</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
          <a href="#news" onClick={() => setMenuOpen(false)}>News</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="nav-actions">
          <a className="icon-link" href="tel:+919876543210" aria-label="Call AV-TEC">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></svg>
          </a>
          <a className="btn btn-primary" href="#quote">Get a Quote</a>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* Main */}
      <main id="main">
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-media" aria-hidden="true">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/gallery/bc440e23-1ff3-4169-af77-40c874848a1b.jpg"
            >
              <source src="/video/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="light-beam beam-one"></div>
            <div className="light-beam beam-two"></div>
          </div>
          <div className="hero-content reveal">
            <p className="eyebrow">Sound / Lighting / LED / Event Rentals</p>
            <h1>AV support that stays calm when the room is full.</h1>
            <p className="hero-copy">Since 1992, AV-TEC has helped teams run conferences, weddings, launches, exhibitions, and live programs with clear sound, clean lighting, reliable screens, and crew who stay until the last cue.</p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-large" href="#quote">Get a Quote</a>
              <a className="btn btn-ghost btn-large" href="tel:+919876543210">Call Now</a>
            </div>
            <div className="hero-proof" aria-label="Company achievements">
              <span><strong>30+</strong> Years</span>
              <span><strong>4000+</strong> Events</span>
              <span><strong>24/7</strong> Support</span>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="trust-strip" aria-label="Service strengths">
          <div className="section-video-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="none" poster="/gallery/bc440e23-1ff3-4169-af77-40c874848a1b.jpg">
              <source src="/video/equipment-video.mp4" type="video/mp4" />
            </video>
          </div>
          <span>Corporate Events</span>
          <span>Conferences</span>
          <span>Concerts</span>
          <span>Exhibitions</span>
          <span>Weddings</span>
          <span>Institutions</span>
        </section>

        {/* Why Section */}
        <section className="section why" id="why">
          <div className="section-video-bg why-video-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="none" poster="/gallery/bc440e23-1ff3-4169-af77-40c874848a1b.jpg">
              <source src="/video/why-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="section-heading reveal">
            <p className="eyebrow">Why AV-TEC</p>
            <h2>We plan the technical side before it becomes urgent.</h2>
            <p>Site checks, cable routes, power needs, rehearsal timing, backup equipment, and crew calls are handled early, so show day feels controlled.</p>
          </div>
          <div className="metrics-grid">
            <article className="metric reveal"><strong data-count-up data-target="30" data-suffix="+">30+</strong><span>Years Experience</span></article>
            <article className="metric reveal"><strong data-count-up data-target="1000" data-suffix="s">1000s</strong><span>Successful Events</span></article>
            <article className="metric reveal"><strong>Pro</strong><span>Technical Team</span></article>
            <article className="metric reveal"><strong>Tier 1</strong><span>Premium Equipment</span></article>
            <article className="metric reveal"><strong>End-to-End</strong><span>Event Support</span></article>
            <article className="metric reveal"><strong>24/7</strong><span>Assistance</span></article>
          </div>
        </section>

        {/* Services Section */}
        <section className="section services" id="services">
          <div className="section-video-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="none" poster="/gallery/19b57f7c-e740-4d10-80f1-7e226abafcfd.jpg">
              <source src="/video/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="section-heading reveal">
            <p className="eyebrow">Services</p>
            <h2>Practical AV support for real venues, real timelines, and real guests.</h2>
          </div>
          <div className="services-grid">
            <article className="service-card reveal">
              <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80" alt="Professional sound system at a live event" />
              <div><span className="service-icon">01</span><h3>Sound Systems</h3><p>PA, monitors, wireless microphones, mixers, and tuning for speech, music, and hybrid rooms.</p><a href="#quote">Learn More</a></div>
            </article>
            <article className="service-card reveal">
              <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80" alt="Stage lighting beams in a concert venue" />
              <div><span className="service-icon">02</span><h3>Stage Lighting</h3><p>Wash lights, moving heads, profiles, ambience, and looks matched to the room and program flow.</p><a href="#quote">Learn More</a></div>
            </article>
            <article className="service-card reveal">
              <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80" alt="Large LED wall at an event" />
              <div><span className="service-icon">03</span><h3>LED Video Walls</h3><p>Panels, processors, playback, switching, rigging, and operators for clean on-screen delivery.</p><a href="#quote">Learn More</a></div>
            </article>
            <article className="service-card reveal">
              <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=80" alt="Conference AV setup with projection" />
              <div><span className="service-icon">04</span><h3>Conference AV</h3><p>Projectors, displays, stage management, livestreaming, laptop switching, and speaker support.</p><a href="#quote">Learn More</a></div>
            </article>
            <article className="service-card reveal">
              <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80" alt="Elegant wedding event production" />
              <div><span className="service-icon">05</span><h3>Wedding Production</h3><p>Sound, lighting, LED, staging, and crew support that respects the schedule and the mood of the day.</p><a href="#quote">Learn More</a></div>
            </article>
            <article className="service-card reveal">
              <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1559223607-b4d0555ae227?auto=format&fit=crop&w=900&q=80" alt="Technician operating an AV control station" />
              <div><span className="service-icon">06</span><h3>Rental & Installation</h3><p>Short-term rentals, fixed installs, setup, testing, handover, and support when plans change.</p><a href="#quote">Learn More</a></div>
            </article>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section projects" id="projects">
          <div className="section-video-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="none" poster="/gallery/bc440e23-1ff3-4169-af77-40c874848a1b.jpg">
              <source src="/video/equipment-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="section-heading reveal">
            <p className="eyebrow">Featured Projects</p>
            <h2>Different events, same discipline: arrive early, test properly, stay ready.</h2>
          </div>
          <div className="project-grid">
            <article className="project-card large reveal">
              <img loading="lazy" decoding="async" src="/gallery/bc440e23-1ff3-4169-af77-40c874848a1b.jpg" alt="Corporate ballroom event with LED wall, stage lighting, speakers, and seating" />
              <div><span>Corporate Conference</span><h3>Global Leadership Summit</h3><p>Multi-screen projection, keynote audio, live camera relay, and full show calling.</p></div>
            </article>
            <article className="project-card reveal">
              <img loading="lazy" decoding="async" src="/gallery/7894e275-c490-404a-b279-a4366824bd16.jpg" alt="Exhibition booth setup with display screens and illuminated panels" />
              <div><span>Exhibitions</span><h3>Tech Expo Bengaluru</h3></div>
            </article>
            <article className="project-card reveal">
              <img loading="lazy" decoding="async" src="/gallery/19b57f7c-e740-4d10-80f1-7e226abafcfd.jpg" alt="Premium boardroom conference setup with microphones and display screen" />
              <div><span>Conferences</span><h3>Executive AV Setup</h3></div>
            </article>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section gallery-section" id="gallery">
          <div className="section-video-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="none" poster="/gallery/7900fd62-19bf-4ca3-aa5c-5a20b7b7b2b5.jpg">
              <source src="/video/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="section-heading reveal">
            <p className="eyebrow">Event Gallery</p>
            <h2>Real AV-TEC setups from conferences, exhibitions, meetings, and productions.</h2>
          </div>
          <div className="gallery-slider reveal" data-gallery ref={galleryRef}>
            <div className="gallery-viewport">
              <div className="gallery-track" data-gallery-track style={{ transform: `translateX(-${galleryIndex * 100}%)` }}>
                {galleryItems.map((item, index) => (
                  <figure key={index} className={`gallery-item ${index === galleryIndex ? 'is-active' : ''}`}>
                    <img loading="lazy" src={item.img} alt={item.caption} />
                    <figcaption><span>{item.number}</span>{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div className="gallery-controls" aria-label="Gallery controls">
              <button
                className="gallery-button"
                type="button"
                data-gallery-prev
                aria-label="Previous gallery image"
                onClick={handlePrevGallery}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button
                className="gallery-button"
                type="button"
                data-gallery-next
                aria-label="Next gallery image"
                onClick={handleNextGallery}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="section equipment" id="equipment">
          <div className="section-video-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="none" poster="/gallery/7894e275-c490-404a-b279-a4366824bd16.jpg">
              <source src="/video/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="section-heading reveal">
            <p className="eyebrow">Equipment Inventory</p>
            <h2>Professional-grade technology, maintained for show-day confidence.</h2>
          </div>
          <div className="equipment-grid">
            <article className="equipment-card reveal"><span>Speakers</span><p>Line arrays, point-source systems, wedges, subs</p></article>
            <article className="equipment-card reveal"><span>Mixers</span><p>Digital consoles, stage boxes, recording interfaces</p></article>
            <article className="equipment-card reveal"><span>Microphones</span><p>Wireless handhelds, lavaliers, headsets, podium mics</p></article>
            <article className="equipment-card reveal"><span>Lighting Fixtures</span><p>Moving heads, pars, profiles, blinders, controllers</p></article>
            <article className="equipment-card reveal"><span>LED Walls</span><p>High-resolution panels, processors, playback systems</p></article>
            <article className="equipment-card reveal"><span>Projectors</span><p>Laser projection, screens, switchers, scalers</p></article>
            <article className="equipment-card reveal"><span>Trussing Systems</span><p>Rigging, structures, hoists, stage safety hardware</p></article>
            <article className="equipment-card reveal"><span>Stage Equipment</span><p>Decks, risers, barricades, control platforms</p></article>
          </div>
        </section>

        {/* Logo Cloud */}
        <section className="section clients">
          <div className="section-video-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="none" poster="/gallery/7894e275-c490-404a-b279-a4366824bd16.jpg">
              <source src="/video/why-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="section-heading reveal">
            <p className="eyebrow">Trusted By</p>
            <h2>Called in by planners, venues, institutions, and corporate teams.</h2>
          </div>
          <div className="logo-cloud reveal" aria-label="Client categories">
            <span>Aurora Hotels</span>
            <span>Nexus Events</span>
            <span>Summit Corp</span>
            <span>Metro Convention</span>
            <span>EduSphere</span>
            <span>Govt. Programs</span>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section testimonials">
          <div className="section-video-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="none" poster="/gallery/432d250b-2aca-433c-8a97-2261da7f376a.jpg">
              <source src="/video/equipment-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="testimonial-marquee-wrap reveal">
            <div className="testimonial-copy">
              <p className="eyebrow">Testimonials</p>
              <h2>What clients usually notice: fewer surprises.</h2>
              <p>Clear communication, tested equipment, tidy cabling, backup planning, and crew who understand that timing matters.</p>
              <div className="testimonial-score" aria-label="Client satisfaction rating">
                <strong>4.9</strong>
                <span>Average event support rating</span>
              </div>
            </div>
            <div className="testimonial-stage" aria-label="Client testimonials">
              <div className="testimonial-tilt">
                <div className="marquee-column">
                  <div className="marquee-stack">
                    <article className="review-card"><div className="review-head"><span>PM</span><div><strong>Priya Menon</strong><small>Event Director</small></div></div><p>Sound was clean, the LED wall looked exceptional, and the team solved every detail before we had to ask.</p></article>
                    <article className="review-card"><div className="review-head"><span>RK</span><div><strong>Rahul Kapoor</strong><small>Conference Lead</small></div></div><p>Setup was on time, microphones were flawless, and the show calling felt calm and professional.</p></article>
                    <article className="review-card"><div className="review-head"><span>SM</span><div><strong>Sana Mehta</strong><small>Brand Manager</small></div></div><p>The lighting and video wall made our product launch feel premium from the first guest arrival.</p></article>
                    <article className="review-card"><div className="review-head"><span>AT</span><div><strong>Arjun Thomas</strong><small>Hotel Events</small></div></div><p>Fast response, clean installation, and technical support throughout the event.</p></article>
                  </div>
                  <div className="marquee-stack" aria-hidden="true">
                    <article className="review-card"><div className="review-head"><span>PM</span><div><strong>Priya Menon</strong><small>Event Director</small></div></div><p>Sound was clean, the LED wall looked exceptional, and the team solved every detail before we had to ask.</p></article>
                    <article className="review-card"><div className="review-head"><span>RK</span><div><strong>Rahul Kapoor</strong><small>Conference Lead</small></div></div><p>Setup was on time, microphones were flawless, and the show calling felt calm and professional.</p></article>
                    <article className="review-card"><div className="review-head"><span>SM</span><div><strong>Sana Mehta</strong><small>Brand Manager</small></div></div><p>The lighting and video wall made our product launch feel premium from the first guest arrival.</p></article>
                    <article className="review-card"><div className="review-head"><span>AT</span><div><strong>Arjun Thomas</strong><small>Hotel Events</small></div></div><p>Fast response, clean installation, and technical support throughout the event.</p></article>
                  </div>
                </div>
                <div className="marquee-column reverse">
                  <div className="marquee-stack">
                    <article className="review-card"><div className="review-head"><span>NK</span><div><strong>Nisha Kumar</strong><small>Wedding Planner</small></div></div><p>The ambience, audio, and stage lights were elegant without ever feeling overdone.</p></article>
                    <article className="review-card"><div className="review-head"><span>DV</span><div><strong>Dev Varma</strong><small>Expo Organizer</small></div></div><p>Displays, cabling, and support crew were exactly where they needed to be.</p></article>
                    <article className="review-card"><div className="review-head"><span>IA</span><div><strong>Irfan Ali</strong><small>Production Head</small></div></div><p>AV-TEC understood the brief quickly and delivered a stable, polished technical setup.</p></article>
                    <article className="review-card"><div className="review-head"><span>LT</span><div><strong>Leela Thomas</strong><small>Institution Events</small></div></div><p>Professional team, clear communication, and excellent backup planning.</p></article>
                  </div>
                  <div className="marquee-stack" aria-hidden="true">
                    <article className="review-card"><div className="review-head"><span>NK</span><div><strong>Nisha Kumar</strong><small>Wedding Planner</small></div></div><p>The ambience, audio, and stage lights were elegant without ever feeling overdone.</p></article>
                    <article className="review-card"><div className="review-head"><span>DV</span><div><strong>Dev Varma</strong><small>Expo Organizer</small></div></div><p>Displays, cabling, and support crew were exactly where they needed to be.</p></article>
                    <article className="review-card"><div className="review-head"><span>IA</span><div><strong>Irfan Ali</strong><small>Production Head</small></div></div><p>AV-TEC understood the brief quickly and delivered a stable, polished technical setup.</p></article>
                    <article className="review-card"><div className="review-head"><span>LT</span><div><strong>Leela Thomas</strong><small>Institution Events</small></div></div><p>Professional team, clear communication, and excellent backup planning.</p></article>
                  </div>
                </div>
                <div className="marquee-column">
                  <div className="marquee-stack">
                    <article className="review-card"><div className="review-head"><span>GC</span><div><strong>Govt. Coordinator</strong><small>Public Event</small></div></div><p>Clear audio coverage and disciplined execution for a high-pressure program.</p></article>
                    <article className="review-card"><div className="review-head"><span>RS</span><div><strong>Rohan Shah</strong><small>Corporate Admin</small></div></div><p>The crew was sharp, respectful of the venue, and prepared for every change.</p></article>
                    <article className="review-card"><div className="review-head"><span>EP</span><div><strong>Event Partner</strong><small>Agency Team</small></div></div><p>Reliable equipment and excellent coordination with stage, decor, and venue teams.</p></article>
                    <article className="review-card"><div className="review-head"><span>VM</span><div><strong>Venue Manager</strong><small>Convention Center</small></div></div><p>They left the room clean, tested, and ready well before rehearsal.</p></article>
                  </div>
                  <div className="marquee-stack" aria-hidden="true">
                    <article className="review-card"><div className="review-head"><span>GC</span><div><strong>Govt. Coordinator</strong><small>Public Event</small></div></div><p>Clear audio coverage and disciplined execution for a high-pressure program.</p></article>
                    <article className="review-card"><div className="review-head"><span>RS</span><div><strong>Rohan Shah</strong><small>Corporate Admin</small></div></div><p>The crew was sharp, respectful of the venue, and prepared for every change.</p></article>
                    <article className="review-card"><div className="review-head"><span>EP</span><div><strong>Event Partner</strong><small>Agency Team</small></div></div><p>Reliable equipment and excellent coordination with stage, decor, and venue teams.</p></article>
                    <article className="review-card"><div className="review-head"><span>VM</span><div><strong>Venue Manager</strong><small>Convention Center</small></div></div><p>They left the room clean, tested, and ready well before rehearsal.</p></article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section process" id="process">
          <div className="section-video-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="none" poster="/gallery/8f52f091-e10a-4dd9-b06c-be58925150b4.jpg">
              <source src="/video/why-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="section-heading reveal">
            <p className="eyebrow">Process</p>
            <h2>A simple workflow that keeps everyone aligned.</h2>
          </div>
          <div className="process-track">
            <article className="process-step reveal"><span>1</span><h3>Brief</h3><p>Understand the event, venue, audience size, schedule, and must-not-fail moments.</p></article>
            <article className="process-step reveal"><span>2</span><h3>Site Check</h3><p>Confirm power, access, rigging points, control position, sightlines, and cable paths.</p></article>
            <article className="process-step reveal"><span>3</span><h3>Plan</h3><p>Build the equipment list, crew call, setup timing, and backup approach.</p></article>
            <article className="process-step reveal"><span>4</span><h3>Setup</h3><p>Load in, rig, cable, tune, focus, label, and test before rehearsal.</p></article>
            <article className="process-step reveal"><span>5</span><h3>Show</h3><p>Operate calmly, watch cues, solve changes, and keep communication clear.</p></article>
            <article className="process-step reveal"><span>6</span><h3>Wrap</h3><p>Pack down cleanly, clear the venue, and stay reachable for any follow-up.</p></article>
          </div>
        </section>

        {/* About Section */}
        <section className="section about" id="about">
          <div className="section-video-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="none" poster="/gallery/30bdfd59-7b60-4b0c-b87d-20193dedff55.jpg">
              <source src="/video/equipment-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="about-image reveal">
            <img src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=80" alt="Event production lighting and audience" />
          </div>
          <div className="about-copy reveal">
            <p className="eyebrow">About AV-TEC</p>
            <h2>Three decades of event technology experience, built on trust.</h2>
            <p>AV-TEC has been delivering professional audio visual and event technology solutions since 1992. With over three decades of industry experience, the team has supported corporate events, conferences, concerts, exhibitions, weddings, and large-scale productions with dependable equipment and steady technical support.</p>
            <a className="btn btn-secondary" href="#quote">Schedule a Consultation</a>
          </div>
        </section>

        {/* News Section */}
        <section className="section news" id="news">
          <div className="section-video-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="none" poster="/gallery/11f99473-86af-4540-a76f-ecb6983817c9.jpg">
              <source src="/video/why-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="section-heading reveal">
            <p className="eyebrow">News & Updates</p>
            <h2>Get the latest on our projects and industry insights.</h2>
          </div>
          <div className="news-grid">
            <article className="news-card reveal">
              <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80" alt="Concert with professional sound and lighting" />
              <div className="news-content">
                <span className="news-date">June 10, 2026</span>
                <h3>AV-TEC & New D&B GSL System Rock Major Festival</h3>
                <p>{"We were proud to provide sound and lighting for one of India's largest music festivals this year, featuring the new D&B audiotechnik GSL system for exceptional clarity and coverage."}</p>
                <a href="#quote" className="news-link">Read More →</a>
              </div>
            </article>
            <article className="news-card reveal">
              <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&w=900&q=80" alt="LED wall at an event" />
              <div className="news-content">
                <span className="news-date">May 25, 2026</span>
                <h3>{"World's First: AV-TEC Gets New D&B SL Series"}</h3>
                <p>{"We're excited to be the first company in the world to receive the new revolutionary sound system from D&B audiotechnik, the SL Series, after 5 years of development."}</p>
                <a href="#quote" className="news-link">Read More →</a>
              </div>
            </article>
            <article className="news-card reveal">
              <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80" alt="Corporate event with AV setup" />
              <div className="news-content">
                <span className="news-date">April 15, 2026</span>
                <h3>{"Our New 20' x 60' LED Wall Steals the Show"}</h3>
                <p>Our brand new massive LED wall was the star of a recent high-profile product launch, delivering larger-than-life visuals that wowed the audience.</p>
                <a href="#quote" className="news-link">Read More →</a>
              </div>
            </article>
          </div>
        </section>

        <span className="anchor-target" id="quote" aria-hidden="true"></span>

        {/* Contact Section */}
        <section className="section contact" id="contact">
          <div className="section-video-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="none" poster="/gallery/e88e9f35-4aa0-46fc-87e6-9698d8297471.jpg">
              <source src="/video/equipment-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="contact-info reveal">
            <p className="eyebrow">Contact</p>
            <h2>{"Tell us what you are planning. We'll shape the technical solution."}</h2>
            <div className="contact-cards">
              <a href="tel:+919876543210">+91 98765 43210</a>
              <a href="mailto:hello@av-tec.in">hello@av-tec.in</a>
              <span>Bengaluru / Available across India</span>
              <span>Business Hours: Mon-Sat, 9:00 AM-8:00 PM</span>
            </div>
            <iframe title="AV-TEC map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Bengaluru%20Karnataka&output=embed"></iframe>
          </div>
          <form className="quote-form reveal" action="https://formspree.io/f/your-form-id-here" method="POST">
            <p className="form-title">Tell us about the event</p>
            <input type="hidden" name="_subject" value="New AV-TEC Quote Inquiry" />
            <input type="hidden" name="_next" value="#contact" />
            <div className="form-grid">
              <label>Name<input name="name" required placeholder="Your name" /></label>
              <label>Company Name<input name="company" placeholder="Company or organization" /></label>
              <label>Phone Number<input name="phone" required placeholder="+91" /></label>
              <label>Email<input name="email" type="email" placeholder="you@example.com" /></label>
              <label>Event Date<input name="date" type="date" /></label>
              <label>Event Location<input name="location" placeholder="City or venue" /></label>
            </div>
            <label>Requirements<textarea name="requirements" rows={5} placeholder="Tell us about your event, audience size, equipment needs, and schedule."></textarea></label>
            <button className="btn btn-primary btn-large" type="submit">Submit Inquiry</button>
            <p className="form-note" data-form-note>We usually respond within one business hour.</p>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer cinematic-footer">
        <div className="footer-cinematic-panel">
          <div className="footer-center">
            <p className="eyebrow">Ready For Show Day?</p>
            <h2>Send the basics. We will help you shape the setup.</h2>
            <p>Venue, date, audience size, program type, and any must-have equipment are enough to begin. AV-TEC will recommend the right sound, lighting, screen, and crew plan.</p>
            <div className="footer-action-row">
              <a className="footer-pill footer-pill-primary" href="#quote">
                <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18"><path d="M4 4h16v12H7.7L4 19.7V4Zm4 5h8M8 12h5"/></svg>
                Request a Quote
              </a>
              <a className="footer-pill" href="tel:+919876543210">
                <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></svg>
                Call Now
              </a>
              <a className="footer-pill" href="https://wa.me/919876543210?text=Hi%20AV-TEC%2C%20I%20would%20like%20a%20quote">
                <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18"><path d="M20.5 3.5A11.8 11.8 0 0 0 1.9 17.6L1 23l5.5-1.4A11.8 11.8 0 0 0 20.5 3.5Zm-8.7 16.2a9.6 9.6 0 0 1-4.9-1.3l-.4-.2-3.2.8.9-3.1-.2-.4a9.7 9.7 0 1 1 7.8 4.2Zm5.3-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.4.2-.7.1a7.9 7.9 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.5.1-.7l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L9 4.9c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.1-1.3-.1-.1-.2-.2-.5-.3Z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
          <div className="footer-main">
            <div className="footer-brand">
              <a className="brand footer-logo-link" href="#home"><img className="brand-logo footer-logo" src="/logo/av-tec-logo-web.png" alt="AV-TEC Audio Visual Technology" width="220" height="116" /><span><strong>AV-TEC</strong><small>Exceptional AV Since 1992</small></span></a>
              <p>Audio, lighting, LED, rental, installation, and on-site technical support for events across India.</p>
              <div className="footer-badges" aria-label="Company highlights">
                <span>30+ Years</span>
                <span>24/7 Support</span>
                <span>Pan-India Events</span>
              </div>
            </div>
            <div className="footer-col">
              <h3>Explore</h3>
              <a href="#services">Services</a>
              <a href="#projects">Featured Projects</a>
              <a href="#gallery">Event Gallery</a>
              <a href="#equipment">Equipment</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <h3>Services</h3>
              <a href="#services">Sound Systems</a>
              <a href="#services">Lighting Solutions</a>
              <a href="#services">LED Video Walls</a>
              <a href="#services">Equipment Rental</a>
              <a href="#services">Technical Support</a>
            </div>
            <div className="footer-col footer-contact">
              <h3>Contact</h3>
              <a href="tel:+919876543210">+91 98765 43210</a>
              <a href="mailto:hello@av-tec.in">hello@av-tec.in</a>
              <span>Bengaluru / Available across India</span>
              <span>Mon-Sat, 9:00 AM-8:00 PM</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 AV-TEC. All rights reserved.</p>
          <div className="footer-social">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">YouTube</a>
            <a href="#">Facebook</a>
          </div>
          <button
            className="footer-top"
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 15 6-6 6 6"/></svg>
          </button>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a className="whatsapp-float" href="https://wa.me/919876543210?text=Hi%20AV-TEC%2C%20I%20would%20like%20a%20quote" aria-label="Chat with AV-TEC on WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 1.9 17.6L1 23l5.5-1.4A11.8 11.8 0 0 0 20.5 3.5Zm-8.7 16.2a9.6 9.6 0 0 1-4.9-1.3l-.4-.2-3.2.8.9-3.1-.2-.4a9.7 9.7 0 1 1 7.8 4.2Zm5.3-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.4.2-.7.1a7.9 7.9 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.5.1-.7l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L9 4.9c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.1-1.3-.1-.1-.2-.2-.5-.3Z"/></svg>
      </a>

      {/* Chatbot */}
      <div className={`chatbot ${chatOpen ? 'is-open' : ''}`} data-chatbot>
        <button
          className="chat-toggle"
          type="button"
          aria-label="Open AV-TEC quick enquiry"
          onClick={() => setChatOpen(!chatOpen)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"/></svg>
        </button>
        <section className="chat-window" aria-label="AV-TEC quick enquiry">
          <header>
            <strong>AV-TEC Quick Enquiry</strong>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setChatOpen(false)}
            >
              &times;
            </button>
          </header>
          <div className="chat-body" data-chat-body>
            <p className="bot">Share your event date, city, audience size, and what you need. The team can suggest a practical setup.</p>
          </div>
          <form className="chat-form" data-chat-form onSubmit={(e) => e.preventDefault()}>
            <input aria-label="Message" placeholder="Ask about equipment or bookings..." />
            <button type="submit">Send</button>
          </form>
        </section>
      </div>
    </div>
  );
}
