function Categories() {


  const categories = [

    {
      icon: "👕",
      title: "Camisas",
      description:
        "Básicas, vintage y urbanas para crear looks únicos."
    },

    {
      icon: "👖",
      title: "Jeans",
      description:
        "Clásicos que vuelven con una nueva oportunidad."
    },

    {
      icon: "🧥",
      title: "Chaquetas",
      description:
        "Piezas con carácter para destacar en cualquier temporada."
    },

    {
      icon: "👗",
      title: "Vestidos",
      description:
        "Diseños cómodos que combinan estilo y conciencia."
    },

    {
      icon: "👟",
      title: "Zapatos",
      description:
        "Calzado seleccionado para seguir caminando contigo."
    },

    {
      icon: "👜",
      title: "Accesorios",
      description:
        "Detalles que hacen grande tu estilo."
    }

  ];



  return (

    <section className="categories">


      <h2>
        Explora tu próximo estilo ✨
      </h2>


      <p className="categories-subtitle">
        Encuentra prendas únicas, desde clásicos vintage
        hasta piezas que reflejan tu personalidad.
      </p>



      <div className="categories-container">


        {
          categories.map((category, index) => (

            <div
              className="category-card"
              key={index}
            >


              <span className="category-icon">
                {category.icon}
              </span>


              <h3>
                {category.title}
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