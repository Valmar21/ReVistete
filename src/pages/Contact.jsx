function Contact() {
  return (
    <section className="contact">

      <h2>Contáctanos 📩</h2>

      <p>
        ¿Tienes dudas, sugerencias o quieres formar parte
        de ReVístete? Escríbenos.
      </p>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Nombre completo"
        />

        <input
          type="email"
          placeholder="Correo electrónico"
        />

        <input
          type="text"
          placeholder="Asunto"
        />

        <textarea
          placeholder="Mensaje"
        ></textarea>

        <button type="submit">
          Enviar mensaje 💌
        </button>

      </form>

    </section>
  );
}

export default Contact;