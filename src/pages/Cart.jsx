import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {

  const { cart, removeFromCart, total } = useContext(CartContext);


  return (

    <section className="cart">

      <h2>
        Tu carrito 🛒
      </h2>


      {
        cart.length === 0 ? (

          <p>
            Tu carrito está vacío.
          </p>

        ) : (

          <>


            <div className="cart-container">


              {
                cart.map((producto, index) => (

                  <div
                    key={index}
                    className="cart-item"
                  >


                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="cart-image"
                    />


                    <div className="cart-info">


                      <h3>
                        {producto.nombre}
                      </h3>


                      <p>
                        Talla: {producto.talla}
                      </p>


                      <p>
                        Estado: {producto.estado}
                      </p>


                      <strong>
                        ${Number(producto.precio).toLocaleString("en-US")}
                      </strong>


                      <button
                        onClick={() => removeFromCart(index)}
                      >
                        Eliminar ❌
                      </button>


                    </div>


                  </div>

                ))
              }


            </div>



            <div className="cart-total">

              <h2>
                Total: ${total.toLocaleString("en-US")}
              </h2>


              <Link to="/checkout">

  <button>
    Finalizar compra 💳
  </button>

</Link>


            </div>


          </>

        )
      }


    </section>

  );
}


export default Cart;