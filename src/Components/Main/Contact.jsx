import './Contact';
import './Contact.css';
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
      <h2>¿Tenés una idea o proyecto en mente?</h2>
      <p> Te dejo mi contacto para colaborar en proyectos de videojuegos, prototipos, game jams o ideas experimentales.</p>
      <div className="cta-button">
      <a href="mailto:patricio_cristaldo@outlook.com" ><i className="bi bi-microsoft"></i> Outlook</a>
      <a href="https://api.whatsapp.com/send/?phone=5491173686874&text&type=phone_number&app_absent=0" ><i className="bi bi-whatsapp"></i> Whatsapp</a>
      <a href="https://www.messenger.com/t/100000561522072" ><i className="bi bi-messenger"></i> Messenger</a>      
      </div>
      </div>
    </section>
  );
}
