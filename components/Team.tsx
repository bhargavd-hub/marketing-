const TEAM = [
  { initials: 'ZP', mvClass: 'mv-0', badge: 'Founder', name: 'Zoe Park', title: 'Founder & Head of Strategy', skills: [{ text: 'Paid Media', cls: 'sc-coral' }, { text: 'Brand', cls: 'sc-coral' }] },
  { initials: 'MR', mvClass: 'mv-1', badge: 'Creative', name: 'Marco Reyes', title: 'Creative Director', skills: [{ text: 'UGC', cls: 'sc-violet' }, { text: 'Video', cls: 'sc-violet' }] },
  { initials: 'AO', mvClass: 'mv-2', badge: 'Growth', name: 'Aisha Osei', title: 'Head of Growth & SEO', skills: [{ text: 'SEO', cls: 'sc-sky' }, { text: 'Analytics', cls: 'sc-sky' }] },
  { initials: 'LW', mvClass: 'mv-3', badge: 'CRM', name: 'Leo Walsh', title: 'Email & Retention Lead', skills: [{ text: 'Klaviyo', cls: 'sc-lime' }, { text: 'LTV', cls: 'sc-lime' }] },
]

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="section-eyebrow reveal">The People Behind the Results</div>
      <div className="section-title reveal">
        Senior team.<br />No juniors left<br />unsupervised.
      </div>
      <div className="team-grid">
        {TEAM.map((m, i) => (
          <div
            key={m.name}
            className="member-card reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className={`member-visual ${m.mvClass}`}>
              <span>{m.initials}</span>
              <span className="mbadge">{m.badge}</span>
            </div>
            <div className="member-info">
              <div className="member-name">{m.name}</div>
              <div className="member-title">{m.title}</div>
              <div className="member-skills">
                {m.skills.map(s => (
                  <span key={s.text} className={`sc ${s.cls}`}>{s.text}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
