import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">WEB502</h1>
          <nav className="space-x-4">
            <Link to={"/tasks"} className="text-gray-600 hover:text-blue-600">Danh sách</Link>
            <Link to={"/tasks/add"} className="text-gray-600 hover:text-blue-600">Thêm mới</Link>
            <Link to={"/register"} className="text-gray-600 hover:text-blue-600">Đăng ký</Link>
            <Link to={"/login"} className="text-gray-600 hover:text-blue-600">Đăng nhập</Link>
          </nav>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      {/* Footer */}
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          © 2026 WEB502. All rights reserved.
        </div>
      </footer>
    </div>

  )
}

export default Layout