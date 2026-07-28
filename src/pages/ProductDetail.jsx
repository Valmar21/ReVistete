import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";


function ProductDetail() {

  const location = useLocation();

  const product = location.state;

  const { addToCart } = useContext(CartContext);


  if (!product) {
    return (
      <section className="product-detail">
        <h2>
          No se encontró el producto 😕
        </h2>
      </section>
    );
  }


  const handleAddCart = () => {
    addToCart(product);
    alert("Producto agregado al carrito 🛒");
  };


  return (
    <section className="product-detail">


      <div className="detail-image">

        <img
          src={product.imagen}
          alt={product.nombre}
        />

      </div>


      <div className="detail-info">

        <h2>
          {product.nombre}
        </h2>


        <p>
          Estado: {product.estado}
        </p>


        <p>
          Talla: {product.talla}
        </p>


        <h3>
          ${product.precio}
        </h3>


        <p>
          {product.descripcion}
        </p>


        <button
          onClick={handleAddCart}
        >
          Agregar al carrito 🛒
        </button>


      </div>


    </section>
  );
}


export default ProductDetail;