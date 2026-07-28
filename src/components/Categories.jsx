function Categories() {

  const categories = [
    {
      name: "Camisas",
      icon: "👕"
    },
    {
      name: "Jeans",
      icon: "👖"
    },
    {
      name: "Chaquetas",
      icon: "🧥"
    },
    {
      name: "Vestidos",
      icon: "👗"
    },
    {
      name: "Zapatos",
      icon: "👟"
    },
    {
      name: "Accesorios",
      icon: "👜"
    }
  ];


  return (
    <section className="categories">

      <h2>Explora nuestras categorías ✨</h2>

      <div className="categories-container">

        {categories.map((category) => (
          <div className="category-card" key={category.name}>
            <span>{category.icon}</span>
            <h3>{category.name}</h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Categories;