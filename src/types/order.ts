import type { Product } from './product'

export interface OrderItem {
  product: Product
  quantity: number
}

export type PaymentMethod = 'cash' | 'card'

export type OrderStatus =
  | 'pending'
  | 'paid'
  | 'cancelled'

export interface Order {
  id: string
  items: OrderItem[]
  subtotal: number
  tax: number
  total: number
  paymentMethod?: PaymentMethod
  status: OrderStatus
}