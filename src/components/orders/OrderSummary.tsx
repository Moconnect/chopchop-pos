interface OrderSummaryProps {
  subtotal: number
  tax: number
  total: number
  onContinue: () => void
}

function OrderSummary({
  subtotal,
  tax,
  total,
  onContinue,
}: OrderSummaryProps) {
  return (
    <div className="border-t pt-5">
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">
            Subtotal
          </span>

          <span className="font-medium">
            €{subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Tax
          </span>

          <span className="font-medium">
            €{tax.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between border-t pt-3 text-lg">
          <span className="font-semibold">
            Total
          </span>

          <span className="font-bold">
            €{total.toFixed(2)}
          </span>
        </div>
      </div>

      <button
        onClick={onContinue}
        disabled={total === 0}
        className="mt-5 w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Continue to Payment
      </button>
    </div>
  )
}

export default OrderSummary