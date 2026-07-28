import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Catalog from "../components/Catalog";
import Categories from "../components/Categories";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <Categories />
      <Catalog />
    </>
  );
}

export default Home;