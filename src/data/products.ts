import type { Product } from '../types/product'

export const products: Product[] = [
  {
    id: '1',
    name: 'Jollof Rice',
    price: 8,
    category: 'Rice',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b',
    available: true,
  },
  {
    id: '2',
    name: 'Fried Rice',
    price: 8.5,
    category: 'Rice',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19',
    available: true,
  },
  {
    id: '3',
    name: 'Fried Chicken',
    price: 5,
    category: 'Chicken',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec',
    available: true,
  },
  {
    id: '4',
    name: 'Coke',
    price: 2,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7',
    available: true,
  },
  {
    id: '5',
    name: 'French Fries',
    price: 4.5,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877',
    available: true,
  },
  {
    id: '6',
    name: 'Chicken Wings',
    price: 7,
    category: 'Chicken',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2',
    available: false,
  },
]