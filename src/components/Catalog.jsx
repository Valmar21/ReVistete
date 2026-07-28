function Catalog() {

  const products = [
    {
      name: "Chaqueta Vintage",
      image: "🧥",
      condition: "Excelente",
      size: "M",
      price: "$45.000",
      description: "Chaqueta restaurada en perfecto estado."
    },
    {
      name: "Camiseta Oversize",
      image: "👕",
      condition: "Muy bueno",
      size: "L",
      price: "$25.000",
      description: "Camiseta cómoda con estilo urbano."
    },
    {
      name: "Jean Clásico",
      image: "👖",
      condition: "Excelente",
      size: "S",
      price: "$35.000",
      description: "Jean reutilizado con gran calidad."
    },
    {
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

      <h2>Prendas disponibles 🛍️</h2>

      <div className="products-container">

        {products.map((product) => (
          <div className="product-card" key={product.name}>

            <div className="product-image">
              {product.image}
            </div>

            <h3>{product.name}</h3>

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

            <button>
              Comprar
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Catalog;