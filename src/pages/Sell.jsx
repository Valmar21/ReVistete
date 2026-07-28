function Sell() {
  return (
    <section className="sell">

      <h2>Vende tus prendas y dales una nueva vida 💰</h2>

      <p>
        Publica la ropa que ya no utilizas y conecta
        con personas interesadas en moda sostenible.
      </p>

      <form className="sell-form">

        <input
          type="text"
          placeholder="Nombre completo"
        />

        <input
          type="email"
          placeholder="Correo electrónico"
        />

        <input
          type="file"
          accept="image/*"
        />

        <select>
          <option>Categoría de prenda</option>
          <option>Camisas</option>
          <option>Camisetas</option>
          <option>Jeans</option>
          <option>Chaquetas</option>
          <option>Vestidos</option>
          <option>Zapatos</option>
          <option>Accesorios</option>
        </select>


        <input
          type="text"
          placeholder="Talla"
        />


        <input
          type="number"
          placeholder="Precio sugerido"
        />


        <textarea
          placeholder="Descripción de la prenda"
        ></textarea>


        <button type="submit">
          Publicar prenda 💗
        </button>

      </form>

    </section>
  );
}

export default Sell;