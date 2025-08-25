import './Contact';
import './Contact.css';
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contacto</h2>
      <p>Puedes escribirme para consultas o proyectos.</p>
      <a
        href="mailto:patricio_cristaldo@outlook.com"
        className="cta-button"
      >
        ESCRÍBEME
      </a>
    </section>
  );
}
