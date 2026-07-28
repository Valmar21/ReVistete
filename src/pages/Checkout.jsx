import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Checkout() {

  const { cart, total } = useContext(CartContext);


  return (
    <section className="checkout">


      <h2>
        Finalizar compra 💳
      </h2>


      <div className="order-summary">

        <h3>
          Resumen del pedido 🛍️
        </h3>


        {
          cart.length === 0 ? (

            <p>
              No hay productos en el carrito.
            </p>

          ) : (

            cart.map((producto, index) => (

              <div key={index} className="order-item">

                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                />

                <div>

                  <h4>
                    {producto.nombre}
                  </h4>

                  <p>
                    Talla: {producto.talla}
                  </p>

                  <strong>
                    ${Number(producto.precio).toLocaleString("en-US")}
                  </strong>

                </div>

              </div>

            ))

          )
        }


        <h3>
          Total: ${total.toLocaleString("en-US")}
        </h3>


      </div>



      <form>


        <input
          type="text"
          placeholder="Nombre completo"
        />


        <input
          type="email"
          placeholder="Correo electrónico"
        />


        <input
          type="tel"
          placeholder="Teléfono"
        />


        <input
          type="text"
          placeholder="Dirección de entrega"
        />


        <input
          type="text"
          placeholder="Ciudad"
        />


        <select>

          <option>
            Método de pago
          </option>

          <option>
            Transferencia bancaria
          </option>

          <option>
            Pago contra entrega
          </option>

        </select>


       <Link to="/pedido-exitoso">

  <button>
    Confirmar compra 🛍️
  </button>

</Link>


      </form>


    </section>
  );
}


export default Checkout;