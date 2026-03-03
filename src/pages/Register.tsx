
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import type { RegisterInput } from '../interface/User';

function Register() {

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<RegisterInput>();

  const nav = useNavigate();

  const onSubmit = async (value: RegisterInput) => {
    try {
      const res = await axios.post(`http://localhost:3000/register`, value)
      if(res.status == 201){
        toast.success("Đăng kí thành công");
        nav("/login")
      }
    } catch (error) {
      toast.error("Đăng kí thất bại");
      console.log(error);     
    }
  }
  
  return (
    <div>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Đăng kí
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Task title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input {...register("email", {
                required: "Email là bắt buộc",
                pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Email không đúng định dạng"
                }
              })}
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
              {errors.email && (<span className='text-red-500'>{errors.email.message} </span>)}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input {...register("password", {
                required: "Mật khẩu là bắt buộc",
                minLength: {
                    value: 6,
                    message: "Mật khẩu tối thiểu 6 kí tự"
                }
              })}
                type="password"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
              {errors.password && (<span className='text-red-500'>{errors.password.message} </span>)}
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
                Đăng kí
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Register