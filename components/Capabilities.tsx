const CAPS = [
  { num: '01', icon: '🎯', title: 'Paid Media', desc: 'Meta, Google, TikTok, Pinterest. Full-funnel build-outs with creative strategy baked in from day one.', accent: 'acc-coral' },
  { num: '02', icon: '📱', title: 'Social & Community', desc: 'Organic social strategy, creator programs, and community management that turns followers into buyers.', accent: 'acc-lime' },
  { num: '03', icon: '✉️', title: 'Email & CRM', desc: 'Klaviyo, Attentive, Postscript. Flows, campaigns, and segmentation that maximize LTV.', accent: 'acc-sky' },
  { num: '04', icon: '🎬', title: 'Content & Creative', desc: 'UGC, video ads, photography briefs, and copy — all optimized for conversion, not awards.', accent: 'acc-pink' },
  { num: '05', icon: '🌱', title: 'SEO & Content Marketing', desc: 'Technical SEO, category pages, and link building that compounds over 12–24 months.', accent: 'acc-violet' },
  { num: '06', icon: '📊', title: 'Analytics & Attribution', desc: "MTA models, cohort analysis, and dashboards that show where every dollar goes — and where it should.", accent: 'acc-yellow' },
]

export default function Capabilities() {
  return (
    <section className="capabilities" id="capabilities">
      <div className="cap-header reveal">
        <div className="cap-title">
          What We<br /><span>Actually Do</span>
        </div>
        <p className="cap-sub">Six specialisms, one team, zero silos. We execute in-house so nothing gets lost in translation.</p>
      </div>
      <div className="cap-list">
        {CAPS.map((c, i) => (
          <div
            key={c.num}
            className="cap-item reveal"
            style={{ transitionDelay: `${(i % 3) * 0.07}s` }}
          >
            <div className={`cap-accent ${c.accent}`} />
            <div className="cap-num">{c.num}</div>
            <span className="cap-icon">{c.icon}</span>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
