import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css"; // Make sure to create this CSS file in src/styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="cta-section">
          <p>Necesita asistencia para encontrar seguro</p>
          <h2>
            Pida Una Cotización Y Nosotros Le Ayudaremos Según Sus Necesidades
          </h2>
          <button className="contact-button">Contáctenos</button>
        </div>

        <div className="company-info">
          <img
            src="/images/logo-footer.png"
            alt="Effective Logo"
            className="footer-logo"
          />
          <p>Nuestros Horarios: Lunes – Viernes 8am – 7pm</p>
          <p>Teléfono: 7118 – 0701</p>
          <p>Email: info@seguroseffective.com</p>
          <p>
            Dirección: Residencial Los Sueños, Calle Los Pinares A7, Nuevo
            Cuscatlán
          </p>
          <div className="social-links">
            <FaInstagram className="social-icon" />
            <FaFacebookF className="social-icon" />
            {/* Add more icons as needed */}
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5544767813217!2d-89.24023462397942!3d13.684833286700075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63314e3ff1ef21%3A0xe54cea5a93d59814!2sCorredores%20de%20Seguros%20Effective%20S.A.%20de%20C.V.!5e0!3m2!1sen!2ssv!4v1704700456289!5m2!1sen!2ssv"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;
