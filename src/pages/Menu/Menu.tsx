import { useMemo, useState } from 'react'
import ProductCard from '../../components/menu/ProductCard'
import { products } from '../../data/products'

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    ...new Set(products.map((product) => product.category)),
  ]

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return products
    }

    return products.filter(
      (product) => product.category === selectedCategory,
    )
  }, [selectedCategory])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Menu
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage your restaurant products and categories.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = selectedCategory === category

          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>

      {/* Products */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu