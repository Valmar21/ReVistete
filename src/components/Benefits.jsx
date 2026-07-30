function Benefits() {

  const benefits = [
    {
      icon: "♻️",
      title: "Moda con propósito",
      description:
        "Rescatamos prendas para darles una segunda vida, reduciendo el desperdicio textil y creando una forma más consciente de vestir."
    },

    {
      icon: "🌈",
      title: "Moda sin etiquetas",
      description:
        "Tu estilo no tiene límites. Creamos un espacio donde cada persona puede expresarse libremente a través de la ropa."
    },

    {
      icon: "🤝",
      title: "Una comunidad que transforma",
      description:
        "Conectamos personas que compran, venden y donan para construir una moda más humana, inclusiva y sostenible."
    }
  ];


  return (

    <section className="benefits">


      <h2>
        ¿Por qué elegir ReVístete? 🌱✨
      </h2>


      <p className="benefits-subtitle">
        No solo vendemos ropa, transformamos prendas en nuevas oportunidades.
        Cada pieza tiene una historia y contigo empieza una nueva.
      </p>



      <div className="benefits-container">


        {
          benefits.map((benefit, index) => (

            <div 
              className="benefit-card"
              key={index}
            >

              <span className="benefit-icon">
                {benefit.icon}
              </span>


              <h3>
                {benefit.title}
              </h3>


              <p>
                {benefit.description}
              </p>


            </div>

          ))
        }


      </div>


    </section>

  );

}


export default Benefits;