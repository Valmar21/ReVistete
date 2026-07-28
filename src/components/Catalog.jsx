import { Link } from "react-router-dom";

function Catalog() {

  const products = [
    {
      id: 1,
      name: "Chaqueta Vintage",
      image: "🧥",
      condition: "Excelente",
      size: "M",
      price: "$45.000",
      description: "Chaqueta restaurada en perfecto estado."
    },
    {
      id: 2,
      name: "Camiseta Oversize",
      image: "👕",
      condition: "Muy bueno",
      size: "L",
      price: "$25.000",
      description: "Camiseta cómoda con estilo urbano."
    },
    {
      id: 3,
      name: "Jean Clásico",
      image: "👖",
      condition: "Excelente",
      size: "S",
      price: "$35.000",
      description: "Jean reutilizado con gran calidad."
    },
    {
      id: 4,
      name: "Vestido Floral",
      image: "👗",
      condition: "Bueno",
      size: "M",
      price: "$30.000",
      description: "Vestido ligero ideal para cualquier ocasión."
    }
  ];


  return (
    <section className="catalog">

      <h2>
        Compra moda sostenible 🛍️🌈
      </h2>

      <p>
        Encuentra prendas únicas de segunda mano,
        restauradas y listas para una nueva historia.
      </p>


      <div className="products-container">

        {products.map((product) => (

          <div 
            className="product-card" 
            key={product.id}
          >

            <div className="product-image">
              {product.image}
            </div>


            <h3>
              {product.name}
            </h3>


            <p>
              Estado: {product.condition}
            </p>


            <p>
              Talla: {product.size}
            </p>


            <p className="price">
              {product.price}
            </p>


            <p>
              {product.description}
            </p>


            <Link 
              to="/producto"
              state={product}
            >

              <button>
                Ver producto 🛍️
              </button>

            </Link>


          </div>

        ))}

      </div>

    </section>
  );
}

export default Catalog;