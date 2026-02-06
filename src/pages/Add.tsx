

function Add() {
  return (
    <div>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Thêm công việc mới
          </h2>

          <form className="space-y-5">
            {/* Task title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tên công việc
              </label>
              <input
                type="text"
                placeholder="Nhập tên công việc"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Due date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ngày hết hạn
              </label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Priority */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Độ ưu tiên
              </label>
              <select
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="">-- Chọn độ ưu tiên --</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trạng thái
              </label>

              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="status"
                    className="text-blue-600"
                  />
                  <span className="text-sm text-gray-700">
                    Chưa hoàn thành
                  </span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="status"
                    className="text-blue-600"
                  />
                  <span className="text-sm text-gray-700">
                    Hoàn thành
                  </span>
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4">
              <a
                href="/tasks"
                className="px-4 py-2 rounded border text-gray-600 hover:bg-gray-100"
              >
                Hủy
              </a>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Thêm công việc
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Add