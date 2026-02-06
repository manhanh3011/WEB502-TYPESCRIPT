import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"

function App() {
  
  return(
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
        
        </Route>
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
