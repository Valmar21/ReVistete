import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {

  const { cart } = useContext(CartContext);

  return (

    <header className="navbar">

      {/* LOGO */}
      <Link to="/" className="logo">

        <span className="logo-icon">
          ♻️
        </span>

        <span className="logo-text">
          ReVístete
        </span>

      </Link>


      {/* MENU */}
      <nav className="nav-links">

        <Link to="/">
          Inicio
        </Link>


        <Link to="/catalogo">
          Comprar
        </Link>


        <Link to="/donar">
          Donar
        </Link>


        <Link to="/vender">
          Vender
        </Link>


        <Link to="/contacto">
          Contacto
        </Link>


        {/* CARRITO */}
        <Link 
          to="/carrito" 
          className="cart-link"
        >

          <span className="cart-icon">
            🛒
          </span>


          <span className="cart-count">
            {cart.length}
          </span>


        </Link>


      </nav>


    </header>

  );

}

export default Navbar;