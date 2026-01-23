import React, { useState } from 'react';
import './Footer.css';

function Footer() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Gracias por suscribirte a mi newsletter ${email}!`);
        setEmail(''); // Limpiar el campo de email después de enviar el formulario.
    };

    return (
        <footer>
            <h3>Seguime en</h3>
            <div className="social-links">
                <a href="https://www.facebook.com/patricionicolas.cristaldo"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/patricio.n.c"><i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/in/patricio-cristaldo-programador-web-fullstack/"><i className="bi bi-linkedin"></i></a>
                <a href="https://github.com/PatricioCristaldo"><i className="bi bi-github"></i></a>
               
            </div>
            
            <p>&copy; 2026 All rights reserved. <strong>P. CRISTALDO</strong></p>
        </footer>
    );
}

export default Footer;
