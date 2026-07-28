import ProductCard from "../components/ProductCard";

function Catalog() {

  const productos = [
    {
      imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      nombre: "Camiseta vintage",
      estado: "Excelente",
      talla: "M",
      precio: "35000",
      descripcion: "Camiseta restaurada en excelente estado."
    },

    {
      imagen: "https://images.unsplash.com/photo-1543076447-215ad9ba6923",
      nombre: "Chaqueta urbana",
      estado: "Muy bueno",
      talla: "L",
      precio: "60000",
      descripcion: "Chaqueta urbana cómoda y lista para usar."
    },

    {
      imagen: "https://images.unsplash.com/photo-1542272604-787c3835535d",
      nombre: "Jean clásico",
      estado: "Excelente",
      talla: "32",
      precio: "45000",
      descripcion: "Jean reutilizado con gran calidad."
    },

    {
      imagen: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f",
      nombre: "Vestido casual",
      estado: "Bueno",
      talla: "S",
      precio: "40000",
      descripcion: "Vestido ligero para cualquier ocasión."
    }
  ];


  return (
    <section className="catalog">

      <h2>
        Compra moda sostenible 🛍️🌈
      </h2>

      <p>
        Encuentra prendas únicas de segunda mano
        listas para una nueva historia.
      </p>


      <div className="products-container">

        {
          productos.map((producto) => (

            <ProductCard
              key={producto.nombre}
              producto={producto}
            />

          ))
        }

      </div>

    </section>
  );
}


export default Catalog;