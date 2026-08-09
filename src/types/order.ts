import type { Product } from './product'

export interface OrderItem {
  product: Product
  quantity: number
}

export interface Order {
  id: string
  items: OrderItem[]
  subtotal: number
  tax: number
  total: number
  paymentMethod?: 'cash' | 'card'
  status: 'pending' | 'paid' | 'cancelled'
}