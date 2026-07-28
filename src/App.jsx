import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Catalog from "./pages/Catalog";
import Sell from "./pages/Sell";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route 
  path="/checkout" 
  element={<Checkout />} 

/>
        <Route path="/carrito" element={<Cart />} />
        <Route
  path="/pedido-exitoso"
  element={<OrderSuccess />}
/>

        <Route path="/producto" element={<ProductDetail />} />

        <Route path="/" element={<Home />} />

        <Route path="/donar" element={<Donate />} />

        <Route path="/catalogo" element={<Catalog />} />

        <Route path="/vender" element={<Sell />} />

        <Route path="/contacto" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;