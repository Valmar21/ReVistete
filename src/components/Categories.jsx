function Categories() {

  const categories = [
    {
      name: "Camisas",
      icon: "👕",
      description: "Básicas, vintage y estilos urbanos."
    },
    {
      name: "Jeans",
      icon: "👖",
      description: "Prendas clásicas con nueva historia."
    },
    {
      name: "Chaquetas",
      icon: "🧥",
      description: "Estilo único para cada temporada."
    },
    {
      name: "Vestidos",
      icon: "👗",
      description: "Diseños cómodos y sostenibles."
    },
    {
      name: "Zapatos",
      icon: "👟",
      description: "Calzado reutilizado en buen estado."
    },
    {
      name: "Accesorios",
      icon: "👜",
      description: "Detalles que completan tu estilo."
    }
  ];


  return (

    <section className="categories">


      <h2>
        Explora nuestras categorías ✨
      </h2>


      <p className="categories-subtitle">
        Encuentra prendas únicas que cuentan una historia.
      </p>



      <div className="categories-container">


        {
          categories.map((category) => (

            <div
              className="category-card"
              key={category.name}
            >


              <div className="category-icon">
  {category.icon}
</div>


              <h3>
                {category.name}
              </h3>


              <p>
                {category.description}
              </p>


            </div>

          ))
        }


      </div>


    </section>

  );

}


export default Categories;