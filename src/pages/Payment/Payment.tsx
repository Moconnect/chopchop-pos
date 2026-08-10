import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { PaymentMethod } from '../../types/order'

interface PaymentState {
  items: {
    product: {
      id: string
      name: string
      price: number
      category: string
      image: string
      available: boolean
    }
    quantity: number
  }[]
  subtotal: number
  tax: number
  total: number
}

function Payment() {
  const navigate = useNavigate()
  const location = useLocation()

  const order = location.state as PaymentState | null

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod | null>(null)

  const [isProcessing, setIsProcessing] = useState(false)

  if (!order) {
    return (
      <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900">
          No Order Found
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          Please create an order before making a payment.
        </p>

        <button
          onClick={() => navigate('/orders/new')}
          className="mt-6 rounded-xl bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          Create New Order
        </button>
      </div>
    )
  }

  const handlePayment = () => {
    if (!paymentMethod) return

    setIsProcessing(true)

    setTimeout(() => {
      navigate('/receipt', {
        state: {
          ...order,
          paymentMethod,
          status: 'paid',
        },
      })
    }, 1000)
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Checkout
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Complete the payment to finalize the order.
        </p>
      </div>

      {/* Total */}
      <div className="rounded-2xl border bg-white p-8 text-center shadow-sm">
        <p className="text-sm text-gray-500">Amount Due</p>
        <p className="mt-2 text-5xl font-bold text-gray-900 tracking-tight">
          €{order.total.toFixed(2)}
        </p>
      </div>

      {/* Payment Methods */}
      <div className="rounded-2xl border bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">
          Select Payment Method
        </h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {/* Cash */}
          <button
            type="button"
            onClick={() => setPaymentMethod('cash')}
            className={`rounded-2xl border p-6 text-left transition shadow-sm ${
              paymentMethod === 'cash'
                ? 'border-gray-900 bg-gray-50 ring-2 ring-gray-900'
                : 'hover:border-gray-400'
            }`}
          >
            <div className="text-4xl">💵</div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Cash
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Customer pays with cash.
            </p>
          </button>

          {/* Card */}
          <button
            type="button"
            onClick={() => setPaymentMethod('card')}
            className={`rounded-2xl border p-6 text-left transition shadow-sm ${
              paymentMethod === 'card'
                ? 'border-gray-900 bg-gray-50 ring-2 ring-gray-900'
                : 'hover:border-gray-400'
            }`}
          >
            <div className="text-4xl">💳</div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Card
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Customer pays by card.
            </p>
          </button>
        </div>
      </div>

      {/* Order Summary */}
      <div className="rounded-2xl border bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">
          Order Summary
        </h2>

        <div className="mt-5 space-y-4">
          {order.items.map((item) => (
            <div
              key={item.product.id}
              className="flex justify-between text-sm"
            >
              <span className="text-gray-700">
                {item.product.name} × {item.quantity}
              </span>
              <span className="font-medium text-gray-900">
                €{(item.product.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          <div className="border-t pt-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium text-gray-900">
                €{order.subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Tax</span>
              <span className="font-medium text-gray-900">
                €{order.tax.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between border-t pt-4 text-lg font-bold">
              <span>Total</span>
              <span>€{order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Button */}
      <button
        onClick={handlePayment}
        disabled={!paymentMethod || isProcessing}
        className="w-full rounded-xl bg-gray-900 px-6 py-4 text-lg font-semibold text-white shadow-sm transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isProcessing
          ? 'Processing Payment...'
          : `Complete ${
              paymentMethod === 'cash'
                ? 'Cash'
                : paymentMethod === 'card'
                ? 'Card'
                : ''
            } Payment`}
      </button>

      {/* Back Button */}
      <button
        onClick={() => navigate('/orders/new')}
        className="w-full rounded-xl border bg-white px-6 py-4 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
      >
        Back to Order
      </button>
    </div>
  )
}

export default Payment
