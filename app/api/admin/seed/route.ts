import { NextResponse } from 'next/server'
import { seedDatabase } from '@/lib/database'

export async function POST() {
  const data = await seedDatabase()

  return NextResponse.json({
    message: 'Database seeded successfully.',
    counts: {
      products: data.products.length,
      categories: data.categories.length,
      orders: data.orders.length,
    },
    seededAt: data.seededAt,
  })
}
