import { Link } from "react-router-dom";


function ProductCard({ producto }) {


  return (

    <div className="product-card">


      <div className="product-image-container">


        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="product-image"
        />


        <span className="product-tag">

          {producto.etiqueta}

        </span>


      </div>



      <div className="product-info">


        <h3>
          {producto.nombre}
        </h3>


        <p>
          Estado: {producto.estado}
        </p>


        <p>
          Talla: {producto.talla}
        </p>


        <strong className="price">

          ${producto.precio.toLocaleString()}

        </strong>



        <Link 
          to="/producto"
          state={producto}
        >

          <button className="product-button">

            Descubrir prenda ✨

          </button>


        </Link>


      </div>


    </div>

  );

}


export default ProductCard;