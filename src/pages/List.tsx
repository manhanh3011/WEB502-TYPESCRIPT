

function List() {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Danh sách công việc
          </h2>

          <a
            href="/tasks/add"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Thêm công việc
          </a>
        </div>

        {/* Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
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
              {/* Task item */}
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  Học React
                </td>
                <td className="px-6 py-4">
                  01/03/2025
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs rounded bg-red-100 text-red-600">
                    High
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-600">
                    Chưa hoàn thành
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center gap-2">
                    <a
                      href="/tasks/edit/1"
                      className="px-3 py-1 text-sm rounded bg-green-100 text-green-600 hover:bg-green-200"
                    >
                      Sửa
                    </a>
                    <button
                      className="px-3 py-1 text-sm rounded bg-red-100 text-red-600 hover:bg-red-200"
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default List