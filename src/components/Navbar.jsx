import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function Navbar() {

  const { cart } = useContext(CartContext);


  return (
    <nav className="navbar">


      <Link to="/" className="logo">
        ♻️ ReVístete
      </Link>


      <div className="nav-links">


        <Link to="/">
          Inicio
        </Link>


        <Link to="/catalogo">
          Comprar 🛍️
        </Link>


        <Link to="/donar">
          Donar ♻️
        </Link>


        <Link to="/vender">
          Vender 👕
        </Link>


        <Link to="/contacto">
          Contacto 📩
        </Link>


        <Link to="/carrito">
          🛒 Carrito ({cart.length})
        </Link>


      </div>


    </nav>
  );
}


export default Navbar;