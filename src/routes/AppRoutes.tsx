import { BrowserRouter, Routes, Route } from 'react-router-dom'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/orders" element={<div>Orders</div>} />
        <Route path="/orders/new" element={<div>New Order</div>} />
        <Route path="/menu" element={<div>Menu</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes