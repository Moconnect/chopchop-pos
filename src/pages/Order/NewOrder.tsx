import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { products } from '../../data/products'
import type { OrderItem } from '../../types/order'
import OrderItemComponent from '../../components/orders/OrderItem'
import OrderSummary from '../../components/orders/OrderSummary'

function NewOrder() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const [search, setSearch] = useState('')

  const navigate = useNavigate()


  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase()),
    )
  }, [search])

  const addProduct = (productId: string) => {
    const product = products.find(
      (item) => item.id === productId,
    )

    if (!product) return

    setOrderItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.id === product.id,
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          product,
          quantity: 1,
        },
      ]
    })
  }

  const increaseQuantity = (productId: string) => {
    setOrderItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    )
  }

  const decreaseQuantity = (productId: string) => {
    setOrderItems((currentItems) =>
      currentItems
        .map((item) =>
          item.product.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (productId: string) => {
    setOrderItems((currentItems) =>
      currentItems.filter(
        (item) => item.product.id !== productId,
      ),
    )
  }

  const subtotal = useMemo(() => {
    return orderItems.reduce(
      (total, item) =>
        total + item.product.price * item.quantity,
      0,
    )
  }, [orderItems])

  const tax = subtotal * 0.1

  const total = subtotal + tax

  const handleContinueToPayment = () => {
  if (orderItems.length === 0) return

  navigate('/payment', {
    state: {
      items: orderItems,
      subtotal,
      tax,
      total,
    },
  })
}

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          New Order
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Create a new customer order.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        {/* Products */}
        <div className="rounded-xl border bg-white p-5">
          <div className="mb-5">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-gray-900"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts
              .filter((product) => product.available)
              .map((product) => (
                <button
                  key={product.id}
                  onClick={() => addProduct(product.id)}
                  className="overflow-hidden rounded-xl border text-left transition hover:border-gray-900 hover:shadow-sm"
                >
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between gap-2">
                      <h3 className="font-medium text-gray-900">
                        {product.name}
                      </h3>

                      <span className="font-semibold">
                        €{product.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-gray-500">
                      {product.category}
                    </p>
                  </div>
                </button>
              ))}
          </div>
        </div>

        {/* Current Order */}
        <div className="flex flex-col rounded-xl border bg-white p-5">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Current Order
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {orderItems.length} item
              {orderItems.length !== 1 ? 's' : ''}
            </p>
          </div>

          {orderItems.length === 0 ? (
            <div className="flex flex-1 items-center justify-center py-16 text-center">
              <div>
                <p className="font-medium text-gray-900">
                  No items yet
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Select a product to add it to the order.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex-1">
              {orderItems.map((item) => (
                <OrderItemComponent
                  key={item.product.id}
                  item={item}
                  onIncrease={() =>
                    increaseQuantity(item.product.id)
                  }
                  onDecrease={() =>
                    decreaseQuantity(item.product.id)
                  }
                  onRemove={() =>
                    removeItem(item.product.id)
                  }
                />
              ))}
            </div>
          )}

          <OrderSummary
            subtotal={subtotal}
            tax={tax}
            total={total}
            onContinue={handleContinueToPayment}
          />
        </div>
      </div>
    </div>
  )
}

export default NewOrder