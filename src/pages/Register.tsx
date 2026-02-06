

function Register() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow rounded-lg p-6">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Đăng ký tài khoản
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mật khẩu
            </label>
            <input
              type="password"
              placeholder="Tối thiểu 6 ký tự"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Confirm Password (UI only, giúp bài nhìn chuyên nghiệp hơn) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Xác nhận mật khẩu
            </label>
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Error message (UI only) */}
          <div className="text-sm text-red-600">
            {/* Thông báo lỗi sẽ hiển thị ở đây */}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Đăng ký
          </button>
        </form>

        {/* Login link */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Đã có tài khoản?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline"
          >
            Đăng nhập
          </a>
        </p>
      </div>
    </div>
  )
}

export default Register