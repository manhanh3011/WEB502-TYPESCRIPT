import type { IProduct } from '../interfaces/Product';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Product() {
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
  
  return (
    <div>
      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Tiêu đề */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Tất cả sản phẩm</h1>
          <p className="text-gray-500 mt-1">Khám phá các sản phẩm mới nhất của chúng tôi</p>
        </div>
        {/* Danh sách sản phẩm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products && products.map((item) => (
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition" key={item.id}>
              <img src={item.image} alt={item.name} className="w-full h-52 object-cover rounded-t-xl" />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {item.category}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-green-600 font-bold text-lg">
                    {item.price}
                  </span>
                  <Link to={`/product/${item.id}`} className="px-3 py-1.5 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </main>
    </div>
  )
}

export default Product