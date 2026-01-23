

function Home() {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-16">
        {/* ===== SẢN PHẨM ĐÁNH GIÁ CAO ===== */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            ⭐ Sản phẩm đánh giá cao nhất
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Card */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
              <img src="https://via.placeholder.com/300x200" className="rounded-t-xl w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Tên sản phẩm</h3>
                <p className="text-sm text-gray-500">⭐⭐⭐⭐⭐ (5.0)</p>
                <p className="text-green-600 font-bold mt-2">1.200.000₫</p>
              </div>
            </div>
            {/* Copy thêm card (4 card / section) */}
            <div className="bg-white rounded-xl shadow" />
            <div className="bg-white rounded-xl shadow" />
            <div className="bg-white rounded-xl shadow" />
          </div>
        </section>
        {/* ===== SẢN PHẨM ĐẮT NHẤT ===== */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            💰 Sản phẩm đắt nhất
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
              <img src="https://via.placeholder.com/300x200" className="rounded-t-xl w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Tên sản phẩm</h3>
                <p className="text-gray-500 text-sm">Danh mục</p>
                <p className="text-red-600 font-bold mt-2">5.500.000₫</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow" />
            <div className="bg-white rounded-xl shadow" />
            <div className="bg-white rounded-xl shadow" />
          </div>
        </section>
        {/* ===== SẢN PHẨM SỐ LƯỢNG ÍT ===== */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            📦 Sản phẩm sắp hết hàng
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
              <img src="https://via.placeholder.com/300x200" className="rounded-t-xl w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Tên sản phẩm</h3>
                <p className="text-sm text-gray-500">Còn lại: 3 sản phẩm</p>
                <p className="text-orange-600 font-bold mt-2">890.000₫</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow" />
            <div className="bg-white rounded-xl shadow" />
            <div className="bg-white rounded-xl shadow" />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home