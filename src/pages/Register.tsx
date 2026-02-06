import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import type { RegisterInput } from "../interface/User"
import toast from "react-hot-toast";
import axios from "axios";

function Register() {

  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm<RegisterInput>();

  const nav = useNavigate();

  const onSubmit = async (value: RegisterInput) => {
    try {
      value.rePassword = undefined;
      const res = await axios.post(`http://localhost:3000/register`, value);
      if(res.status === 201){
        toast.success("Đăng kí thành công");
        nav("/login")
      }
    } catch (error) {
      console.log(error);
      toast.error("đăng kí thất bại")
    }
  }

  return (
    <div className="min-h-scree  flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Đăng ký tài khoản
        </h2>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tên
            </label>
            <input {...register("name", {
              required: "Tên không được để trống"
            })}
              type="text"
              placeholder="Tran Van A"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
            {errors.name && (<span className="text-red-500">{errors.name.message} </span>)}
          </div>
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

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Xác nhận mật khẩu
            </label>
            <input {...register("rePassword", {
              required: "Xác nhận Mật khẩu không được để trống",
              validate: (value) => {
                return value == watch("password") ? true : "Mật khẩu không khớp"
              }
            })}
              type="password"
              placeholder="Nhập lại mật khẩu"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
            {errors.rePassword && (<span className="text-red-500">{errors.rePassword.message} </span>)}
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
          <Link
            to="/login"
            className="text-blue-600 hover:underline"
          >
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register