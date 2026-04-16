'use client'
import { useEffect, useState } from 'react'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: "Let's Talk" },
]

export default function Navbar() {
  const [active, setActive] = useState('work')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'capabilities', 'team', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="nav">
      <div className="logo">
        CART<span className="logo-dot" />
      </div>
      <div className="nav-pills">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`nav-pill${active === href.slice(1) ? ' active' : ''}`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
