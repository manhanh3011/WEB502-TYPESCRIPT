
import { Link, Outlet } from 'react-router-dom';

function ClientLayout() {
  return (
    <div>
        <header className="bg-white shadow-md">
              <div className="max-w-7xl mx-auto px-6">
                  <div className="flex items-center justify-between h-16">
                      {/* Logo */}
                      <div className="text-xl font-bold text-green-600">
                          WD20306
                      </div>
                      {/* Menu */}
                      <nav className="hidden md:flex space-x-6">
                          <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">Trang chủ</Link>
                          <Link to="/product" className="text-gray-700 hover:text-green-600 font-medium">Sản phẩm</Link>
                          <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium">Giới thiệu</Link>
                          <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium">Liên hệ</Link>
                      </nav>
                      {/* Account */}
                      <div>
                          <Link to="/account" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                              Tài khoản
                          </Link>
                      </div>
                  </div>
              </div>
        </header>

        <div className='container mx-auto'>
            <Outlet/>
        </div>

          <footer className="bg-gray-900 text-gray-300 mt-10">
              <div className="max-w-7xl mx-auto px-6 py-10">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                      {/* Logo + mô tả */}
                      <div>
                          <h2 className="text-xl font-bold text-white mb-3">WD20306</h2>
                          <p className="text-sm">
                              Nền tảng bán hàng trực tuyến uy tín, cung cấp sản phẩm chất lượng
                              với giá tốt nhất cho khách hàng.
                          </p>
                      </div>
                      {/* Menu */}
                      <div>
                          <h3 className="text-lg font-semibold text-white mb-3">Liên kết</h3>
                          <ul className="space-y-2">
                              <li><a href="#" className="hover:text-green-500">Trang chủ</a></li>
                              <li><a href="#" className="hover:text-green-500">Sản phẩm</a></li>
                              <li><a href="#" className="hover:text-green-500">Giới thiệu</a></li>
                              <li><a href="#" className="hover:text-green-500">Liên hệ</a></li>
                          </ul>
                      </div>
                      {/* Hỗ trợ */}
                      <div>
                          <h3 className="text-lg font-semibold text-white mb-3">Hỗ trợ</h3>
                          <ul className="space-y-2">
                              <li><a href="#" className="hover:text-green-500">Chính sách bảo mật</a></li>
                              <li><a href="#" className="hover:text-green-500">Điều khoản sử dụng</a></li>
                              <li><a href="#" className="hover:text-green-500">Hướng dẫn mua hàng</a></li>
                          </ul>
                      </div>
                      {/* Liên hệ */}
                      <div>
                          <h3 className="text-lg font-semibold text-white mb-3">Liên hệ</h3>
                          <p className="text-sm">📍 Hà Nội, Việt Nam</p>
                          <p className="text-sm">📞 0123 456 789</p>
                          <p className="text-sm">✉️ support@myshop.com</p>
                      </div>
                  </div>
                  {/* Copyright */}
                  <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                      © 2026 WEB502-WD20306. All rights reserved.
                  </div>
              </div>
          </footer>

    </div>
  )
}

export default ClientLayout