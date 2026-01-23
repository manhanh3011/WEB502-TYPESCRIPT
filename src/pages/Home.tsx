import type { IProduct } from '../interfaces/Product';
import axios from 'axios';
import { useEffect, useState } from 'react'


function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const {data} = await axios.get("http://localhost:3000/products");
        if(data) setProducts(data);
      } catch (error) {
        console.log(error)
      }
    }
    getAllProducts();
  }, [])

  const topRateProducts = products.slice().sort((a, b) => b.rate - a.rate).slice(0, 4);
  const topPriceProducts = products.slice().sort((a, b) => b.price - a.price).slice(0, 4);
  const lowQuantityProducts = products.slice().sort((a, b) => a.quantity - b.quantity).slice(0, 4);                        

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
            {topRateProducts && topRateProducts.map((product) => (
               <div key={product.id} className="bg-white rounded-xl shadow hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="rounded-t-xl w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg"> {product.name} </h3>
                <p className="text-sm text-gray-500">⭐⭐⭐⭐⭐ {product.rate} / (5.0)</p>
                <p className="text-green-600 font-bold mt-2"> {product.price} </p>
              </div>
            </div>
            ))}
          </div>
        </section>
        {/* ===== SẢN PHẨM ĐẮT NHẤT ===== */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            💰 Sản phẩm đắt nhất
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {topPriceProducts && topPriceProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="rounded-t-xl w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg"> {product.name} </h3>
                <p className="text-gray-500 text-sm">Danh mục: {product.category} </p>
                <p className="text-red-600 font-bold mt-2"> {product.price} </p>
              </div>
            </div>
            ))}  
          </div>
        </section>
        {/* ===== SẢN PHẨM SỐ LƯỢNG ÍT ===== */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            📦 Sản phẩm sắp hết hàng
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {lowQuantityProducts && lowQuantityProducts.map((p) => (
              <div key={p.id} className="bg-white rounded-xl shadow hover:shadow-lg transition">
              <img src={p.image} alt={p.name} className="rounded-t-xl w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-sm text-gray-500">Còn lại: {p.quantity} sản phẩm</p>
                <p className="text-orange-600 font-bold mt-2">{p.price} </p>
              </div>
            </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home