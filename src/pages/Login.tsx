import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import type { LoginInput } from "../interface/User"
import toast from "react-hot-toast";
import axios from "axios";

function Register() {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginInput>();

  const nav = useNavigate();

  const onSubmit = async (value: LoginInput) => {
    try {
      const res = await axios.post(`http://localhost:3000/login`, value);
      if(res.status === 200){
        toast.success("Đăng nhập thành công");
        localStorage.setItem("token", res.data.accessToken)
        nav("/tasks")
      }
    } catch (error) {
      console.log(error);
      toast.error("đăng nhập thất bại")
    }
  }

  return (
    <div className="min-h-scree  flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Đăng nhập
        </h2>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input {...register("email", {
              required: "Email không được để trống",
              pattern: {
                value: /^\S+@\S+\.\S+$/,  
                message: "Email không đúng định dạng"
              }
            })}
              type="email"
              placeholder="example@gmail.com"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
            {errors.email && (<span className="text-red-500">{errors.email.message} </span>)}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mật khẩu
            </label>
            <input {...register("password", {
              required: "Mật khẩu không được để trống",
              minLength: {
                value: 6,
                message: "Mật khẩu tối thiểu 6 kí tự"
              }
            })}
              type="password"
              placeholder="Tối thiểu 6 ký tự"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
            {errors.password && (<span className="text-red-500">{errors.password.message} </span>)}
          </div>

         {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Đăng nhập
          </button>
        </form>

        {/* Login link */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Chưa có tài khoản?{" "}
          <Link
            to="/register"
            className="text-green-600 hover:underline"
          >
            Đăng ký
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register