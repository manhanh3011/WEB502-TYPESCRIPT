import { useForm } from "react-hook-form"
import type { TaskInput } from "../interface/Task"
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Add() {

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<TaskInput>();

  const nav = useNavigate();

  const onSubmit = async (value: TaskInput) => {
    // console.log(value);
    try {
      const res = await axios.post(`http://localhost:3000/tasks`, {
        ...value,
        status: value.status == "true" ? true : false,
      });
      if(res.status == 201){
        toast.success("Thêm thành công");
        nav("/tasks")
      }
    } catch (error) {
      console.log(error);
      toast.error("Thêm thất bại")
      
    }
  }

  return (
    <div className="min-h-screen ">
      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Thêm công việc mới
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Task title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tên công việc
              </label>
              <input {...register("title", {
                required: "tên công việc là bắt buộc",
              })}
                type="text"
                placeholder="Nhập tên công việc"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
              {errors.title && (<span className="text-red-500">{errors.title.message} </span>)}
            </div>

            {/* Due date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ngày hết hạn
              </label>
              <input {...register("dueDate", {
                required: "Ngày hết hạn là bắt buộc",
              })}
                type="date"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
              {errors.dueDate && (<span className="text-red-500">{errors.dueDate.message} </span>)}
            </div>

            {/* Priority */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Độ ưu tiên
              </label>
              <select {...register("priority", {
                required: "độ ưu tiên là bắt buộc",
              })}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="">-- Chọn độ ưu tiên --</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              {errors.priority && (<span className="text-red-500">{errors.priority.message} </span>)}
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trạng thái
              </label>

              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input {...register("status", {
                    required: "trạng thái là bắt buộc",
                  })}
                    value="true"
                    type="radio"
                    name="status"
                    className="text-blue-600"
                  />
                  <span className="text-sm text-gray-700">
                    Hoàn thành
                  </span>
                </label>
                <label className="flex items-center gap-2">
                  <input {...register("status", {
                    required: "trạng thái là bắt buộc",
                  })}
                    value="false"
                    type="radio"
                    name="status"
                    className="text-blue-600"
                  />
                  <span className="text-sm text-gray-700">
                    Chưa hoàn thành
                  </span>
                </label>
                {errors.status && (<span className="text-red-500">{errors.status.message} </span>)}
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