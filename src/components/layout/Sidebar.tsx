import { NavLink } from 'react-router-dom'

const navigation = [
  {
    name: 'Dashboard',
    path: '/dashboard',
  },
  {
    name: 'New Order',
    path: '/orders/new',
  },
  {
    name: 'Menu',
    path: '/menu',
  },
  {
    name: 'Orders',
    path: '/orders',
  },
]

function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="border-b px-6 py-5">
        <h1 className="text-xl font-bold">
          Restaurant POS
        </h1>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 text-sm font-medium ${
                isActive
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="border-t p-4">
        <button className="w-full rounded-lg px-4 py-3 text-left text-sm text-gray-600 hover:bg-gray-100">
          Logout
        </button>
      </div>
    </aside>
  )
}

export default Sidebar