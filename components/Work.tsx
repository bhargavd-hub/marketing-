'use client'
import { useState } from 'react'

type Category = 'all' | 'paid' | 'social' | 'email' | 'content' | 'seo'

const FILTERS: { label: string; value: Category; color?: string }[] = [
  { label: 'All Work', value: 'all' },
  { label: 'Paid Media', value: 'paid', color: 'coral' },
  { label: 'Social', value: 'social', color: 'violet' },
  { label: 'Email & CRM', value: 'email', color: 'sky' },
  { label: 'Content', value: 'content', color: 'pink' },
  { label: 'SEO', value: 'seo', color: 'lime' },
]

const CASES = [
  {
    id: 1, category: 'paid', size: 'wide',
    visual: 'cv-coral', label: 'Paid Media', emoji: 'SPARK 🔥',
    tags: [{ text: 'Meta Ads', cls: 'tag-coral' }, { text: 'Google Shopping', cls: 'tag-coral' }, { text: 'DTC', cls: 'tag-coral' }],
    title: 'How We Scaled Spark Skincare from $800K to $8M in 14 Months',
    desc: 'Full-funnel paid strategy combining prospecting, retargeting, and UGC creative that tripled purchase frequency among repeat buyers.',
    metrics: [
      { val: '+910%', key: 'Revenue Growth', color: 'var(--coral)' },
      { val: '4.8×', key: 'ROAS', color: 'var(--coral)' },
      { val: '-38%', key: 'CAC Reduction', color: 'var(--coral)' },
    ],
  },
  {
    id: 2, category: 'social', size: 'med',
    visual: 'cv-violet tall', label: 'Social', emoji: 'LOOM 🧶',
    tags: [{ text: 'TikTok', cls: 'tag-violet' }, { text: 'Instagram', cls: 'tag-violet' }],
    title: "Loom Apparel's Viral TikTok Creator Strategy",
    desc: 'Built a creator program that drove 12M organic impressions and a 280% spike in site traffic in 60 days.',
    metrics: [
      { val: '12M', key: 'Impressions', color: 'var(--violet)' },
      { val: '280%', key: 'Traffic Lift', color: 'var(--violet)' },
    ],
  },
  {
    id: 3, category: 'email', size: 'third',
    visual: 'cv-sky', label: 'Email & CRM', emoji: 'BREW ☕',
    tags: [{ text: 'Klaviyo', cls: 'tag-sky' }, { text: 'Retention', cls: 'tag-sky' }],
    title: 'Brew Box Email Retention Overhaul',
    desc: 'Redesigned 14 flows and revamped segmentation to double repeat-purchase rates.',
    metrics: [
      { val: '2.1×', key: 'Repeat Purchases', color: '#0088aa' },
      { val: '54%', key: 'Open Rate', color: '#0088aa' },
    ],
  },
  {
    id: 4, category: 'content', size: 'third',
    visual: 'cv-pink', label: 'Content', emoji: 'GLOW ✨',
    tags: [{ text: 'Creative', cls: 'tag-pink' }, { text: 'UGC', cls: 'tag-pink' }],
    title: "Glow Labs' 40-Piece Content Machine",
    desc: 'Built a scalable content operation that cut per-piece production costs by 60%.',
    metrics: [
      { val: '-60%', key: 'Cost/Piece', color: 'var(--pink)' },
      { val: '40/mo', key: 'Pieces Out', color: 'var(--pink)' },
    ],
  },
  {
    id: 5, category: 'seo', size: 'third',
    visual: 'cv-lime', label: 'SEO', emoji: 'ROOT 🌿',
    tags: [{ text: 'SEO', cls: 'tag-lime' }, { text: 'Organic', cls: 'tag-lime' }],
    title: "Root Wellness' 10× Organic Traffic Growth",
    desc: 'Category-level SEO strategy reaching page 1 for 340 commercial-intent keywords in 9 months.',
    metrics: [
      { val: '10×', key: 'Organic Traffic', color: '#447700' },
      { val: '340', key: 'P1 Keywords', color: '#447700' },
    ],
  },
]

export default function Work() {
  const [active, setActive] = useState<Category>('all')

  const visible = CASES.filter(c => active === 'all' || c.category === active)

  const getActiveClass = (f: typeof FILTERS[0]) => {
    if (active !== f.value) return 'filter-btn'
    if (!f.color) return 'filter-btn active'
    return `filter-btn active-${f.color}`
  }

  return (
    <>
      <div className="filter-bar" id="work">
        <span className="filter-label">Filter:</span>
        {FILTERS.map(f => (
          <button
            key={f.value}
            className={getActiveClass(f)}
            onClick={() => setActive(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <section className="work">
        <div className="work-grid">
          {visible.map((c, i) => (
            <div
              key={c.id}
              className={`case-card card-${c.size} reveal`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className={`card-visual ${c.visual}`}>
                <div className="card-pattern" />
                <span>{c.emoji}</span>
                <span className="card-badge">{c.label}</span>
              </div>
              <div className="card-body">
                <div className="card-tags">
                  {c.tags.map(t => (
                    <span key={t.text} className={`tag ${t.cls}`}>{t.text}</span>
                  ))}
                </div>
                <div className="card-title">{c.title}</div>
                <p className="card-desc">{c.desc}</p>
                <div className="card-metrics">
                  {c.metrics.map(m => (
                    <div key={m.key}>
                      <div className="metric-val" style={{ color: m.color }}>{m.val}</div>
                      <div className="metric-key">{m.key}</div>
                    </div>
                  ))}
                </div>
                <a href="#" className="card-cta">Read Case Study →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
