function Benefits() {

  const benefits = [
    {
      icon: "♻️",
      title: "Moda sostenible",
      text: "Damos una segunda vida a las prendas, reduciendo residuos textiles y promoviendo un consumo más consciente."
    },

    {
      icon: "🌈",
      title: "Moda sin etiquetas",
      text: "Creemos en una moda libre, inclusiva y creada para que cada persona pueda expresar su identidad."
    },

    {
      icon: "🤝",
      title: "Comunidad con propósito",
      text: "Conectamos personas que compran, venden y donan ropa para generar un impacto positivo."
    }
  ];


  return (

    <section className="benefits">


      <h2>
        ¿Por qué elegir ReVístete? 🌈
      </h2>


      <p className="benefits-subtitle">
        Más que ropa, creamos nuevas historias para cada prenda.
      </p>



      <div className="benefits-container">


        {
          benefits.map((benefit, index) => (

            <div
              className="benefit-card"
              key={index}
            >

             <div className="benefit-icon">
  {benefit.icon}
</div>


              <h3>
                {benefit.title}
              </h3>


              <p>
                {benefit.text}
              </p>


            </div>

          ))
        }


      </div>


    </section>

  );

}


export default Benefits;