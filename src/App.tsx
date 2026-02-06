import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import List from "./pages/List";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  
  return(
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="tasks" element={<List/>}/>
          <Route path="tasks/add" element={<Add/>}/>
          <Route path="tasks/edit/:id" element={<Edit/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
        </Routes>
      <Toaster/>
    </>
  )
}

export default App
