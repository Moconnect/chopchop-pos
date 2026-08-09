import type { OrderItem as OrderItemType } from '../../types/order'

interface OrderItemProps {
  item: OrderItemType
  onIncrease: () => void
  onDecrease: () => void
  onRemove: () => void
}

function OrderItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: OrderItemProps) {
  const itemTotal = item.product.price * item.quantity

  return (
    <div className="border-b py-4 last:border-b-0">
      <div className="flex justify-between gap-3">
        <div>
          <h3 className="font-medium text-gray-900">
            {item.product.name}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            €{item.product.price.toFixed(2)} each
          </p>
        </div>

        <p className="font-medium text-gray-900">
          €{itemTotal.toFixed(2)}
        </p>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={onDecrease}
            className="flex h-8 w-8 items-center justify-center rounded-lg border hover:bg-gray-100"
          >
            −
          </button>

          <span className="w-6 text-center text-sm font-medium">
            {item.quantity}
          </span>

          <button
            onClick={onIncrease}
            className="flex h-8 w-8 items-center justify-center rounded-lg border hover:bg-gray-100"
          >
            +
          </button>
        </div>

        <button
          onClick={onRemove}
          className="text-sm font-medium text-red-600 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default OrderItem