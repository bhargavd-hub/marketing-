import { NextResponse } from 'next/server'
import { getDatabaseStats } from '@/lib/database'

export async function GET() {
  const stats = await getDatabaseStats()
  return NextResponse.json(stats)
}
