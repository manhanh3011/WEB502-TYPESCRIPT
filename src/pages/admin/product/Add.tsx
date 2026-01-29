import type { ProductAdd } from "../../../interfaces/Product";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function Add() {
    const { register, handleSubmit, formState: {errors}} = useForm<ProductAdd>();

    const nav = useNavigate();

    const onSubmit = async (value: ProductAdd) => {
        try {
            const res = await axios.post(`http://localhost:3001/products`,value);
            if(res.status == 201){
                toast.success("Thêm thành công");
                nav("/admin/list");
            }
        } catch (error) {
            console.log(error);         
        }
    }

  return (
    <div className="max-w-3xl mx-auto mt-2 bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        ➕ Thêm mới sản phẩm
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} >
        {/* Tên sản phẩm */}
        <div>
          <label className="block mb-1 font-medium text-gray-600">
            Tên sản phẩm
          </label>
          <input {...register("name",{
            required: "Không được để trống tên sản phẩm",
            minLength: {
              value: 5,
              message: "Tên sản phẩm cần tối thiểu 5 ký tự"
            }
          })} type="text" placeholder="Nhập tên sản phẩm" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

          {errors.name && (<span className='text-red-500'>{errors.name.message}</span>)}
        </div>
        {/* Giá + Số lượng */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium text-gray-600">
              Giá bán (VNĐ)
            </label>
            <input {...register("price",{
              required: "Giá bán không được để trống",
              min: {
                value: 0,
                message: "Giá bán cần lớn hơn 0"
              },
              valueAsNumber: true // ép về kiểu number
            })}
             type="number" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" />
          
            {errors.price && (<span className='text-red-500'>{errors.price.message}</span>)}
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-600">
              Số lượng
            </label>
            <input {...register("quantity",{
              required: "Số lượng không được để trống",
              min: {
                value: 0,
                message: "Số lượng cần lớn hơn 0"
              },
              valueAsNumber: true // ép về kiểu number
            })} type="number" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" />
          
            {errors.quantity && (<span className='text-red-500'>{errors.quantity.message}</span>)}
          </div>
        </div>
        {/* Danh mục */}
        <div>
          <label className="block mb-1 font-medium text-gray-600">
            Danh mục
          </label>
          <select {...register("category",{
            required: "Không được để trống danh mục"
          })} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500">
            <option></option>
            <option value={`Gaming Laptop`}>Gaming Laptop</option>
            <option value={`Fashion`}>Fashion</option>
            <option value={`Electronics`}>Electronics</option>
            <option value={`Bags`}>Bags</option>
          </select>

          {errors.category && (<span className='text-red-500'>{errors.category.message}</span>)}
        </div>
        {/* Hình ảnh */}
        <div>
          <label className="block mb-1 font-medium text-gray-600">
            Hình ảnh sản phẩm
          </label>
          <input {...register("image",{
            required: "Không để trống hình ảnh"
          })} type="text" className="w-full border rounded-lg px-4 py-2 bg-white" />

          {errors.image && (<span className='text-red-500'>{errors.image.message}</span>)}
        </div>
        {/* Mô tả */}
        <div>
          <label className="block mb-1 font-medium text-gray-600">
            Mô tả
          </label>
          <textarea {...register("description")} rows={4} placeholder="Nhập mô tả sản phẩm..." className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" defaultValue={""} />
        </div>
        {/* Action */}
        <div className="flex justify-end gap-3">
          <button type="reset" className="px-6 py-2 rounded-lg border text-gray-600 hover:bg-gray-100">
            Hủy
          </button>
          <button type="submit" className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            Lưu sản phẩm
          </button>
        </div>
      </form>
    </div>
  )
}

export default Add
