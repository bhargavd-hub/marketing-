import { promises as fs } from 'fs'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'data', 'db.json')

type Product = { id: number; name: string; categoryId: number; price: number }
type Category = { id: number; name: string }
type Order = { id: number; productId: number; quantity: number; total: number; createdAt: string }

export type DatabaseShape = {
  products: Product[]
  categories: Category[]
  orders: Order[]
  seededAt: string | null
}

const EMPTY_DB: DatabaseShape = {
  products: [],
  categories: [],
  orders: [],
  seededAt: null,
}

async function ensureDbFile(): Promise<void> {
  await fs.mkdir(path.dirname(DB_PATH), { recursive: true })

  try {
    await fs.access(DB_PATH)
  } catch {
    await fs.writeFile(DB_PATH, JSON.stringify(EMPTY_DB, null, 2), 'utf8')
  }
}

async function readDb(): Promise<DatabaseShape> {
  await ensureDbFile()
  const raw = await fs.readFile(DB_PATH, 'utf8')
  return JSON.parse(raw) as DatabaseShape
}

async function writeDb(data: DatabaseShape): Promise<void> {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf8')
}

function buildSeedData(): DatabaseShape {
  const categories: Category[] = [
    'Skincare',
    'Haircare',
    'Makeup',
    'Supplements',
    'Accessories',
    'Bundles',
  ].map((name, index) => ({ id: index + 1, name }))

  const products: Product[] = Array.from({ length: 34 }).map((_, index) => {
    const categoryId = (index % categories.length) + 1
    return {
      id: index + 1,
      name: `Product ${index + 1}`,
      categoryId,
      price: Number((9.99 + index * 1.75).toFixed(2)),
    }
  })

  const orders: Order[] = Array.from({ length: 12 }).map((_, index) => {
    const productId = (index % products.length) + 1
    const quantity = (index % 3) + 1
    const total = Number((products[productId - 1].price * quantity).toFixed(2))

    return {
      id: index + 1,
      productId,
      quantity,
      total,
      createdAt: new Date(Date.now() - index * 86_400_000).toISOString(),
    }
  })

  return {
    products,
    categories,
    orders,
    seededAt: new Date().toISOString(),
  }
}

export async function getDatabaseStats(): Promise<{
  products: number
  categories: number
  orders: number
  isSeeded: boolean
  seededAt: string | null
}> {
  const db = await readDb()

  return {
    products: db.products.length,
    categories: db.categories.length,
    orders: db.orders.length,
    isSeeded: db.products.length > 0,
    seededAt: db.seededAt,
  }
}

export async function seedDatabase(): Promise<DatabaseShape> {
  const seedData = buildSeedData()
  await writeDb(seedData)
  return seedData
}
