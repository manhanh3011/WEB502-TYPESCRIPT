import { useEffect, useState } from "react"
import type { ITasks } from "../interface/Task"
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


function List() {

  const [tasks, setTasks] = useState<ITasks[]>([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/tasks`);
        console.log(data);         
        if (data)
          setTasks(data);
      } catch (error) {
        console.log(error);

      }
    }
    getAll();
  }, [])

  const handleDelete = async (id: string) => {
    try {
      // console.log(id);
      if(!id) return;
      if(window.confirm("Bạn có chắc chắn muốn xoá không")){
        const res = await axios.delete(`http://localhost:3000/tasks/${id}`);
        if(res.status == 200){
          toast.success("Xoá thành công");
          setTasks((prev: ITasks[]) => {
            return prev.filter((item: ITasks) => item.id != id)
          })
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Xoá thất bại")
    }
    
  }

  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Danh sách công việc
          </h2>

          <Link
            to="/tasks/add"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Thêm công việc
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
                  Tên công việc
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">
                  Ngày hết hạn
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">
                  Độ ưu tiên
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">
                  Trạng thái
                </th>
                <th className="px-6 py-3 text-center font-medium text-gray-600">
                  Hành động
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {tasks && tasks.map((item: ITasks, index: number) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    {index+1}
                  </td>
                  <td className="px-6 py-4">
                    {item.title}
                  </td>
                  <td className="px-6 py-4">
                    {item.dueDate}
                  </td>
                   <td className="px-6 py-4">
                    {item.priority}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded ${item.status ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                      {item.status ? "Hoàn thành" : "Chưa hoàn thành"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <Link
                        to={`/tasks/edit/${item.id}`}
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