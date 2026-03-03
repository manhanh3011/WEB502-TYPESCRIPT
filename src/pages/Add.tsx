
import { useForm } from 'react-hook-form'
import type { BookInput } from '../interface/Book'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

function Add() {

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<BookInput>();

  const nav = useNavigate();

  const onSubmit = async (value: BookInput) => {
    try {
      const res = await axios.post(`http://localhost:3000/books`, {
        ...value,
        isNew: value.isNew == "true" ? true : false
      })
      if(res.status == 201){
        toast.success("Thêm thành công");
        nav("/books")
      }
    } catch (error) {
      toast.error("Thêm thất bại");
      console.log(error);     
    }
  }
  
  return (
    <div>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Thêm book mới
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Task title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tên sách
              </label>
              <input {...register("titleBook", {
                required: "Tên sách là bắt buộc",
              })}
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
              {errors.titleBook && (<span className='text-red-500'>{errors.titleBook.message} </span>)}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Số lượng
              </label>
              <input {...register("quantity", {
                required: "Số lượng là bắt buộc",
              })}
                type="number"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
              {errors.quantity && (<span className='text-red-500'>{errors.quantity.message} </span>)}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Năm xuất bản
              </label>
              <input {...register("publishedYear", {
                required: "Năm xuất bản là bắt buộc",
                min: {
                  value: 0,
                  message: "Số lượng phải lớn hơn hoặc bằng 0"
                }
              })}
                type="number"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
              {errors.publishedYear && (<span className='text-red-500'>{errors.publishedYear.message} </span>)}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trạng thái sách
              </label>

              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input {...register("isNew", {
                    required: "Trạng thái sách là bắt buộc",
                  })}
                    type="radio"
                    value={"true"}
                    name="isNew"
                    className="text-blue-600"
                  />
                  <span className="text-sm text-gray-700">
                    Mới
                  </span>
                </label>

                <label className="flex items-center gap-2">
                  <input {...register("isNew", {
                    required: "Trạng thái sách là bắt buộc",
                  })}
                    type="radio"
                    value={"false"}
                    name="isNew"
                    className="text-blue-600"
                  />
                  <span className="text-sm text-gray-700">
                    Cũ
                  </span>
                </label>
              {errors.isNew && (<span className='text-red-500'>{errors.isNew.message} </span>)}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hình ảnh
              </label>
              <input {...register("image", {
                required: "Hình ảnh là bắt buộc",
              })}
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
              {errors.image && (<span className='text-red-500'>{errors.image.message} </span>)}
            </div>

            {/* Priority */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Danh mục
              </label>
              <select {...register("category", {
                    required: "Danh mục là bắt buộc",
                  })}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="">-- Chọn thể loại --</option>
                <option value="Văn học">Văn học</option>
                <option value="Tiểu thuyết">Tiểu thuyết</option>
                <option value="Thiếu nhi">Thiếu nhi</option>
              </select>
              {errors.category && (<span className='text-red-500'>{errors.category.message} </span>)}
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
                Thêm book
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Add