import { useEffect, useState } from 'react'
import type { IBook } from '../interface/Book'
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

function List() {

  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const {data} = await axios.get(`http://localhost:3000/books`);
        console.log(data);        
        if(data)
          setBooks(data);
      } catch (error) {
        console.log(error);      
      }
    }
    getAllBooks();
  }, [])

  const handleDelete = async (id: string) => {
    try {
      if(!id)
        return;

      if(window.confirm("Bạn có chắc chắn muốn xoá không?")){
        const res = await axios.delete(`http://localhost:3000/books/${id}`);
        if(res.status == 200){
          toast.success("Xoá thành công");
          setBooks((prev: IBook[]) => {
            return prev.filter((item: IBook) => item.id != id)
          })
        }
      }
    } catch (error) {
      toast.error("Xoá thất bại");
      console.log(error);     
    }
  }

  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Danh sách Book
          </h2>

          <Link
            to="/books/add"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Thêm book
          </Link>
        </div>

        {/* Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-600">
                  STT
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">
                  Tên sách
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">
                  Năm xuất bản
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">
                  Số lượng
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">
                  Trạng thái sách
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">
                  Hình ảnh
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">
                  Danh mục
                </th>
                <th className="px-6 py-3 text-center font-medium text-gray-600">
                  Hành động
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {books && books.map((item: IBook, index: number) => (
                <tr className="hover:bg-gray-50" key={item.id}>
                  <td className="px-6 py-4" >
                    {index+1}
                  </td>
                  <td className="px-6 py-4">
                    {item.titleBook}
                  </td>
                  <td className="px-6 py-4">
                    {item.publishedYear}
                  </td>
                  <td className="px-6 py-4">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4">
                    {item.isNew == true ? "Mới" : "Cũ" } 
                  </td>
                  <td className="px-6 py-4">
                    <img src={item.image} alt={item.titleBook} />
                  </td>
                  <td className="px-6 py-4">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <Link
                        to={`/books/edit/${item.id}`}
                        className="px-3 py-1 text-sm rounded bg-green-100 text-green-600 hover:bg-green-200"
                      >
                        Sửa
                      </Link>
                      <button onClick={() => {handleDelete(item.id)}}
                        className="px-3 py-1 text-sm rounded bg-red-100 text-red-600 hover:bg-red-200"
                      >
                        Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default List