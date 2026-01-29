import { Link, Outlet } from "react-router-dom"


function AdminLayout() {


  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
        <div className="p-4 text-2xl font-bold text-blue-600">
          WD20306
        </div>
        <nav className="mt-5">
          <Link to={"/admin"} className="block px-4 py-2 hover:bg-blue-50">Dashboard</Link>
          <Link to={"/admin/list"} className="block px-4 py-2 hover:bg-blue-50">Sản phẩm</Link>
          <Link to={"/admin"} className="block px-4 py-2 hover:bg-blue-50">Đơn hàng</Link>
          <Link to={""} className="block px-4 py-2 hover:bg-blue-50">Người dùng</Link>
          <Link to={""} className="block px-4 py-2 hover:bg-blue-50">Cài đặt</Link>
        </nav>
      </aside>
      {/* Content */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <header className="flex items-center justify-between bg-white px-6 py-4 border-b">
          <div className="text-xl font-semibold">Xin chào Admin</div>
          <div className="flex items-center gap-4">
            <input type="text" placeholder="Tìm kiếm..." className="px-3 py-1 border rounded-md focus:outline-none focus:ring" />
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
          </div>
        </header>
        {/* Main content */}
        <main className="p-6 overflow-y-auto">
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout