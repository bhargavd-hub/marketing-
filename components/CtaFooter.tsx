export function CTA() {
  return (
    <div className="cta-strip" id="contact">
      <div className="cta-text reveal">
        <h2>Ready to Scale?</h2>
        <p>We take on 3–4 new brands per quarter. If you&apos;re serious about growth, let&apos;s talk before the spots fill up.</p>
      </div>
      <div className="cta-actions reveal">
        <a href="mailto:hello@cart.studio" className="btn btn-white">Get a Proposal →</a>
        <a href="#work" className="btn btn-outline-white">See More Work</a>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="footer-logo">CART<span>°</span></div>
      <p>© 2026 Cart Studio. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">LinkedIn</a></li>
      </ul>
    </footer>
  )
}
