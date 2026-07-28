import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


function OrderSuccess() {

  const { total, clearCart } = useContext(CartContext);


  const orderNumber =
    Math.floor(Math.random() * 90000) + 10000;


  return (

    <section className="success">


      <h1>
        ¡Compra realizada! 🎉
      </h1>


      <p>
        Gracias por apoyar la moda sostenible de ReVístete ♻️🌈
      </p>


      <div className="order-card">


        <h3>
          Número de pedido:
        </h3>


        <strong>
          #{orderNumber}
        </strong>


        <p>
          Total:
          ${total.toLocaleString("en-US")}
        </p>


      </div>



      <button
        onClick={clearCart}
      >
        Limpiar carrito 🛒
      </button>



      <br /><br />


      <Link to="/">
        Volver a la tienda 🏠
      </Link>


    </section>

  );

}


export default OrderSuccess;