export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-blobs">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>
        <div className="hero-eyebrow">
          <span className="blink">●</span> E-Commerce Marketing Studio
        </div>
        <h1 className="hero-h1">
          <span className="h1-stroke">We Grow</span>
          <span style={{ display: 'block' }}>
            <span className="h1-bg">Carts.</span>
          </span>
          <span className="h1-coral">Not Egos.</span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-desc">
            Full-stack e-commerce marketing — from performance campaigns to brand
            storytelling. We&apos;ve scaled DTC brands from $0 to $50M+ in revenue.
          </p>
          <div className="hero-cta-group">
            <a href="#work" className="btn btn-fill">See Our Work ↓</a>
            <a href="#contact" className="btn btn-outline">Start a Project</a>
          </div>
        </div>
      </section>

      <div className="hero-stats">
        <div className="hstat">
          <div className="hstat-num c1">$240M+</div>
          <div className="hstat-label">Revenue Generated</div>
        </div>
        <div className="hstat">
          <div className="hstat-num c2">180+</div>
          <div className="hstat-label">Brands Scaled</div>
        </div>
        <div className="hstat">
          <div className="hstat-num c3">4.1×</div>
          <div className="hstat-label">Average ROAS</div>
        </div>
        <div className="hstat">
          <div className="hstat-num c4">98%</div>
          <div className="hstat-label">Client Retention</div>
        </div>
      </div>
    </>
  )
}
