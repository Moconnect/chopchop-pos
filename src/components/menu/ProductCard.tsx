import type { Product } from '../../types/product'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <div className="aspect-video overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-gray-900">
              {product.name}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {product.category}
            </p>
          </div>

          <p className="font-semibold text-gray-900">
            €{product.price.toFixed(2)}
          </p>
        </div>

        <div className="mt-4">
          {product.available ? (
            <span className="text-xs font-medium text-green-600">
              Available
            </span>
          ) : (
            <span className="text-xs font-medium text-red-600">
              Unavailable
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard