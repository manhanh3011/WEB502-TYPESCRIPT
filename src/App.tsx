import toast, { Toaster } from "react-hot-toast";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import List from "./pages/List";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import Register from "./pages/Register";

function ProtectedRoute(){
  const token = localStorage.getItem("token");

  if(!token){
    toast.error("Vui lòng đăng nhập để sử dụng chức năng");
    return <Navigate to={"/login"}/>
  }

  return <Outlet/>
}

function App() {
  
  return(
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route element={<ProtectedRoute/>}>
            <Route path="tasks" element={<List/>}/>
            <Route path="tasks/add" element={<Add/>}/>
            <Route path="tasks/edit/:id" element={<Edit/>}/>
          </Route>           
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
        </Routes>
      <Toaster/>
    </>
  )
}

export default App
