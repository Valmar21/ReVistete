import ProductCard from "../components/ProductCard";

function Catalog() {

  const productos = [

    {
      id: 1,
      imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
      nombre: "Camiseta Vintage Oversize",
      etiqueta: "♻️ Segunda vida",
      estado: "Excelente",
      talla: "M",
      precio: 35000,
      descripcion:
        "Camiseta restaurada con estilo urbano, cómoda y lista para crear nuevos looks."
    },

    {
      id: 2,
      imagen: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600",
      nombre: "Chaqueta Urbana Vintage",
      etiqueta: "✨ Pieza única",
      estado: "Muy bueno",
      talla: "L",
      precio: 60000,
      descripcion:
        "Chaqueta con personalidad propia, seleccionada y preparada para una nueva historia."
    },

    {
      id: 3,
      imagen: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
      nombre: "Jean Clásico Reutilizado",
      etiqueta: "🌱 Moda consciente",
      estado: "Excelente",
      talla: "32",
      precio: 45000,
      descripcion:
        "Un clásico renovado con gran calidad para acompañarte durante mucho tiempo."
    },

    {
      id: 4,
      imagen: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600",
      nombre: "Vestido Casual",
      etiqueta: "🌈 Estilo sin etiquetas",
      estado: "Bueno",
      talla: "S",
      precio: 40000,
      descripcion:
        "Diseño cómodo y versátil para expresar tu estilo en cualquier ocasión."
    }

  ];


  return (

    <section className="catalog">


      <div className="catalog-header">

        <h2>
          Prendas con historia 🛍️✨
        </h2>


        <p>
          Descubre ropa seleccionada, restaurada y lista
          para comenzar una nueva etapa contigo.
        </p>

      </div>



      <div className="products-container">

        {
          productos.map((producto) => (

            <ProductCard
              key={producto.id}
              producto={producto}
            />

          ))
        }

      </div>


    </section>

  );

}


export default Catalog;