export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav>
        <div className="logo">👑 PYNK</div>
        <div>
          <a href="#legacy">Legacy</a>
          <a href="#values">Values</a>
          <a href="#join">Join Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>PYNK</h1>
        <p className="hero-tagline">We Don't Make Promises.</p>
        <p className="hero-tagline" style={{ color: 'white', fontSize: '1.5rem' }}>We Set Standards.</p>
        <p>Built with Purpose. Driven by Passion. Created for Generations.</p>
        <button className="hero-cta">Discover More</button>
      </section>

      <div className="divider"></div>

      {/* Movement Banner */}
      <section className="banner">
        <span className="banner-gold">✨ A MOVEMENT ✨</span>
        <p style={{ marginTop: '1rem', fontSize: '1rem' }}>Founded on years of work, sacrifice, vision, and determination</p>
      </section>

      <div className="divider"></div>

      {/* Legacy Standard Section */}
      <section className="legacy-section" id="legacy">
        <h2>The PYNK Legacy Standard</h2>
        <p className="legacy-subtitle">Built With Purpose. Driven By Passion. Created For Generations.</p>
        
        <p className="legacy-intro">
          PYNK stands on a foundation of unwavering principles. These aren't aspirations—they're the backbone of everything we build.
        </p>

        <div className="values-grid" id="values">
          <div className="value-card">
            <div className="value-icon">✨</div>
            <h3>Faith Over Fear</h3>
            <p>We believe in the power of conviction and trust in our vision, even when the path ahead is uncertain.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">👨‍👩‍👧‍👦</div>
            <h3>Family Over Fame</h3>
            <p>Legacy is built for the generations that come after us. Every decision reflects our commitment to family.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">💪</div>
            <h3>Discipline Over Excuses</h3>
            <p>Consistency and commitment separate dreamers from builders. We choose discipline every single day.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h3>Ownership Over Dependence</h3>
            <p>We take full responsibility for our success and our challenges. We don't wait for permission.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">📈</div>
            <h3>Growth Over Comfort</h3>
            <p>Comfort is the enemy of greatness. We continuously evolve, learn, and push beyond our limits.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">👑</div>
            <h3>Legacy Over Trends</h3>
            <p>Trends fade. Legacy endures. We build for Nevaeh, for Truie, and for generations to come.</p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Promise Section */}
      <section className="promise-section">
        <div className="promise-statement">
          <p>We don't make <strong>promises.</strong></p>
          <p style={{ marginTop: '1rem' }}>We set <strong>standards.</strong></p>
        </div>
      </section>

      <div className="divider"></div>

      {/* Call to Action */}
      <section className="cta-section" id="join">
        <h2>Join the Movement</h2>
        <p>Be part of something built to last. Something built on purpose.</p>
        <button className="cta-button">Start Your Journey</button>
      </section>

      {/* Footer */}
      <footer>
        <p className="footer-gold">👑 PYNK 👑</p>
        <p>Built on years of work, sacrifice, vision, and determination.</p>
        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', opacity: 0.9 }}>Created with purpose for generations to come.</p>
      </footer>
    </main>
  )
}
