'use client'

import { useEffect, useState } from 'react'

type Stats = {
  products: number
  categories: number
  orders: number
  isSeeded: boolean
  seededAt: string | null
}

export default function AdminPage() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadStats = async () => {
    try {
      const response = await fetch('/api/admin/stats')
      if (!response.ok) {
        throw new Error('Failed to load database stats.')
      }

      const json = (await response.json()) as Stats
      setStats(json)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error')
    }
  }

  useEffect(() => {
    void loadStats()
  }, [])

  const onSeed = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/admin/seed', { method: 'POST' })

      if (!response.ok) {
        throw new Error('Failed to seed database.')
      }

      await loadStats()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem' }}>
      <section
        style={{
          width: 'min(640px, 100%)',
          background: '#fff',
          borderRadius: 16,
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          textAlign: 'center',
        }}
      >
        <h1 style={{ marginBottom: 12 }}>Welcome to Admin Panel</h1>
        <p style={{ color: '#59647b', marginBottom: 20 }}>
          {stats?.isSeeded
            ? `Database ready: ${stats.products} products, ${stats.categories} categories, ${stats.orders} orders.`
            : 'Your database is empty. Seed it with the existing store catalog to get started.'}
        </p>

        <button
          onClick={onSeed}
          disabled={isLoading}
          style={{
            background: '#ff6b00',
            color: '#fff',
            border: 0,
            borderRadius: 10,
            padding: '12px 20px',
            fontWeight: 700,
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.7 : 1,
          }}
        >
          {isLoading ? 'Seeding…' : 'Seed Database'}
        </button>

        {stats?.seededAt ? (
          <p style={{ marginTop: 14, fontSize: 13, color: '#6b7280' }}>
            Last seeded at: {new Date(stats.seededAt).toLocaleString()}
          </p>
        ) : null}

        {error ? (
          <p style={{ marginTop: 14, color: '#b91c1c', fontSize: 14 }}>
            {error}
          </p>
        ) : null}
      </section>
    </main>
  )
}
