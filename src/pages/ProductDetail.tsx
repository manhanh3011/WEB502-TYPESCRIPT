import { useEffect, useState } from "react";
import type { IProduct } from "../interfaces/Product";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


function ProductDetail() {
    const [product, setProduct] = useState<IProduct>();
    const {id} = useParams<string>();

    useEffect(() => {
        const getDetailProduct = async() => {
            try {
                if(!id) return;
                const {data} = await axios.get(`http://localhost:3001/products/${id}`);
                if(data) setProduct(data);
            } catch (error) {
                console.log(error);
            }
            }
        getDetailProduct();
    }, [id])

  return (
    <div>
          <main className="max-w-7xl mx-auto px-6 py-10">
              {/* Breadcrumb (tuỳ chọn) */}
              <nav className="text-sm text-gray-500 mb-6">
                  <Link to="/" className="hover:text-green-600">Trang chủ</Link> /
                  <Link to={'/product'} className="hover:text-green-600">Sản phẩm</Link> /
                  <span className="text-gray-700">Chi tiết</span>
              </nav>
              {/* Nội dung chính */}
              <div className="bg-white rounded-xl shadow p-6 md:p-10">
                {product && (
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {/* Ảnh sản phẩm */}
                      <div>
                          <img src={product.image} alt={product.name} className="w-full object-cover rounded-xl" />
                      </div>
                      {/* Thông tin sản phẩm */}
                      <div className="space-y-4">
                          {/* Name */}
                          <h1 className="text-3xl font-bold text-gray-800">
                             {product.name}
                          </h1>
                          {/* Category */}
                          <p className="text-sm text-gray-500">
                              Danh mục:
                              <span className="text-gray-700 font-medium"> {product.category} </span>
                          </p>
                          {/* Rate */}
                          <div className="flex items-center space-x-2">
                              <span className="text-yellow-400 text-lg">★★★★★</span>
                              <span className="text-sm text-gray-600">({product.rate} / 5)</span>
                          </div>
                          {/* Price */}
                          <p className="text-3xl font-bold text-green-600">
                              Giá: {product.price}
                          </p>
                          {/* Quantity */}
                          <p className="text-sm text-gray-600">
                              Số lượng còn lại: 
                              <span className="font-semibold text-gray-800"> {product.quantity} </span>
                          </p>
                          {/* Description */}
                          <div>
                              <h3 className="font-semibold text-lg mb-2">Mô tả sản phẩm</h3>
                              <p className="text-gray-600 leading-relaxed">
                                  {product.description}
                              </p>
                          </div>
                          {/* Action */}
                          <div className="flex space-x-4 pt-4">
                              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                                  Thêm vào giỏ hàng
                              </button>
                              <button className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition">
                                  Mua ngay
                              </button>
                          </div>
                      </div>
                  </div>
                )}
                 
              </div>
          </main>

    </div>
  )
}

export default ProductDetail;