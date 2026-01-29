import { useEffect, useState } from "react"
import type { IProduct } from "../../../interfaces/Product"
import { Link, useParams } from "react-router-dom";
import axios from "axios";


function Detail() {
    const [product, setProduct] = useState<IProduct>();
    const {id} = useParams();

    useEffect(() => {
        const getDetail = async () => {
            try {
                if(!id) return;
                const {data} = await axios.get(`http://localhost:3001/products/${id}`);
                if(data) setProduct(data);
            } catch (error) {
                console.log(error);
            }
        }
        getDetail();
    }, [id])

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Chi tiết sản phẩm</h1>

        <div className="flex gap-3">
          <Link to={"/admin/list"} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            ← Quay lại
          </Link>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Sửa sản phẩm
          </button>
        </div>
        </div>
            {product && (
            <div className="bg-white rounded-xl shadow p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    <div className="flex justify-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full max-w-md rounded-lg object-cover border"
                        />
                    </div>
                    
                    <div>
                        <h2 className="text-2xl font-bold mb-2">
                            {product.name}
                        </h2>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Giá bán:</span>
                                <span className="font-semibold text-red-500">
                                    {product.price}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-600">Số lượng:</span>
                                <span className="font-medium">{product.quantity} </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-600">Danh mục:</span>
                                <span className="font-medium">{product.category} </span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Đánh giá:</span>
                                <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                                    {product.rate}
                                </span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold mb-2">Mô tả sản phẩm</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>    
            </div>
        )}
    </div>
  )
}

export default Detail