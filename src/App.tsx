import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import List from "./pages/List"
import Add from "./pages/Add"
import Edit from "./pages/Edit"
import Register from "./pages/Register"
import Login from "./pages/Login"

function App() {
  
  return(
    <>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route path="books" element={<List/>} />
          <Route path="books/add" element={<Add/>} />
          <Route path="books/edit/:id" element={<Edit/>} />
          <Route path="register" element={<Register/>} />
          <Route path="login" element={<Login/>} />
        </Route>
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
