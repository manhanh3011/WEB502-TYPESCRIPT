

function Detail() {
  return (
    <div>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-6">
          {/* Title */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Chi tiết công việc
            </h2>

            <span className="px-3 py-1 text-sm rounded bg-yellow-100 text-yellow-600">
              Chưa hoàn thành
            </span>
          </div>

          {/* Content */}
          <div className="space-y-4">
            {/* Task name */}
            <div>
              <p className="text-sm text-gray-500">Tên công việc</p>
              <p className="text-lg font-medium text-gray-800">
                Học React
              </p>
            </div>

            {/* Due date */}
            <div>
              <p className="text-sm text-gray-500">Ngày hết hạn</p>
              <p className="text-gray-800">
                01 / 03 / 2025
              </p>
            </div>

            {/* Priority */}
            <div>
              <p className="text-sm text-gray-500">Độ ưu tiên</p>
              <span className="inline-block px-2 py-1 text-xs rounded bg-red-100 text-red-600">
                High
              </span>
            </div>

            {/* Status */}
            <div>
              <p className="text-sm text-gray-500">Trạng thái</p>
              <span className="inline-block px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-600">
                Chưa hoàn thành
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-8">
            <a
              href="/tasks"
              className="px-4 py-2 rounded border text-gray-600 hover:bg-gray-100"
            >
              Quay lại
            </a>
            <a
              href="/tasks/edit/1"
              className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
            >
              Chỉnh sửa
            </a>
            <button
              className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
            >
              Xóa
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Detail