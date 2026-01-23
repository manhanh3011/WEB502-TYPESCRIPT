import { Route, Routes } from "react-router-dom";
// import UseEffect from "./component/UseEffect";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ClientLayout from "./layouts/ClientLayout";
import Account from "./pages/Account";
import ProductDetail from "./pages/ProductDetail";


function App() {

  return (
    <>
      {/* <UseEffect/> */}
      <Routes>
        <Route path="/" element={<ClientLayout/>}>
          <Route path="" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="product" element={<Product/>} />
          <Route path="account" element={<Account/>} />
          <Route path="product/:id" element={<ProductDetail/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
