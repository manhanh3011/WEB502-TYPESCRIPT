import axios from "axios";
import { useEffect, useState } from "react";
import type { IProduct } from "../../../interfaces/Product";
import { Link } from "react-router-dom";


function List() {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const getAll = async () => {
            try {
                const {data} = await axios.get("http://localhost:3001/products");
                if(data) setProducts(data);
            } catch (error) {
                console.log(error);
            }
        }
        getAll();
    }, [])

    const handleDelete = async () => {

    }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Danh sách sản phẩm</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 border text-left">STT</th>
              <th className="px-4 py-3 border text-left">Tên sản phẩm</th>
              <th className="px-4 py-3 border text-left">Hình ảnh</th>
              <th className="px-4 py-3 border text-center">Giá</th>
              <th className="px-4 py-3 border text-center">Số lượng</th>
              <th className="px-4 py-3 border text-center">Đánh giá</th>
              <th className="px-4 py-3 border text-center">Danh mục</th>
              <th className="px-4 py-3 border text-center">Hành động</th>
            </tr>
          </thead>

          <tbody>
            {products && products.map((item, index) => (
                <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{index+1}</td>
                <td className="px-4 py-2 border">{item.name} </td>
                <td className="px-4 py-2 border">
                    <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                    />
                </td>
                <td className="px-4 py-2 border text-center">{item.price} </td>
                <td className="px-4 py-2 border text-center">{item.quantity}</td>
                <td className="px-4 py-2 border text-center">{item.rate} </td>
                <td className="px-4 py-2 border text-center">{item.category} </td>

                <td className="px-4 py-2 border text-center">
                    <div className="flex justify-center gap-2">
                        <Link to={`/admin/detail/${item.id}`} className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                            Chi tiết
                        </Link>
                        <button className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600">
                            Sửa
                        </button>
                        <button onClick={() => {handleDelete()}} className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                            Xóa
                        </button>
                    </div>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default List