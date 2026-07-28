import { Link } from "react-router-dom";

function ProductCard({ producto }) {

  return (
    <div className="product-card">

      <img
        src={producto.imagen}
        alt={producto.nombre}
      />

      <h3>
        {producto.nombre}
      </h3>

      <p>
        Estado: {producto.estado}
      </p>

      <p>
        Talla: {producto.talla}
      </p>

      <strong>
        ${producto.precio}
      </strong>


      <Link
        to="/producto"
        state={producto}
      >
        <button>
          Ver producto 🛍️
        </button>
      </Link>


    </div>
  );
}

export default ProductCard;