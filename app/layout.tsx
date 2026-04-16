import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CART° — E-Commerce Marketing Team',
  description: 'Full-stack e-commerce marketing. We scale DTC brands from $0 to $50M+ in revenue.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
