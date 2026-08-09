import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from '../pages/Dashboard/Dashboard'
import NewOrder from '../pages/Order/NewOrder'
import Orders from '../pages/Order/Orders'
import Menu from '../pages/Menu/Menu'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        <Route element={<DashboardLayout />}>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/orders/new"
            element={<NewOrder />}
          />

          <Route
            path="/orders"
            element={<Orders />}
          />

          <Route
            path="/menu"
            element={<Menu />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes