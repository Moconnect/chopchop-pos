const stats = [
  {
    label: "Today's Orders",
    value: '24',
  },
  {
    label: "Today's Sales",
    value: '€420.00',
  },
  {
    label: 'Pending Orders',
    value: '3',
  },
]

function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Here's what's happening today.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border bg-white p-6"
          >
            <p className="text-sm text-gray-500">
              {stat.label}
            </p>

            <p className="mt-2 text-2xl font-bold text-gray-900">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border bg-white p-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Recent Orders
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Your recent orders will appear here.
        </p>
      </div>
    </div>
  )
}

export default Dashboard