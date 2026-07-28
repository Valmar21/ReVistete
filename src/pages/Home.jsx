import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section>
          <h2>Dale una segunda vida a tu ropa 🌈</h2>

          <p>
            Compra, vende y dona prendas de segunda mano
            mientras ayudas al planeta.
          </p>

          <button>Comprar ropa</button>
          <button>Donar ropa</button>
          <button>Vender ropa</button>
        </section>
      </main>
    </>
  );
}

export default Home;