import { Link } from "react-router-dom";


function Hero() {

  return (

    <section className="hero">


      <div className="hero-content">


        <span className="hero-tag">
          ♻️ Moda sostenible y consciente
        </span>


        <h1>
          ReVístete:
          <br />
          moda con historia,
          <br />
          estilo con propósito 🌈
        </h1>


        <p>
          Dale una segunda vida a tus prendas.
          Compra, vende y dona ropa única mientras
          construimos una moda más sostenible.
        </p>



        <div className="hero-buttons">


          <Link
            to="/catalogo"
            className="hero-button"
          >
            🛍️ Explorar colección
          </Link>



          <Link
            to="/donar"
            className="hero-button secondary"
          >
            ♻️ Donar prendas
          </Link>



          <Link
            to="/vender"
            className="hero-button secondary"
          >
            💰 Vender ropa
          </Link>


        </div>


      </div>



      <div className="hero-image">


        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Moda sostenible"
        />


      </div>


    </section>

  );

}


export default Hero;