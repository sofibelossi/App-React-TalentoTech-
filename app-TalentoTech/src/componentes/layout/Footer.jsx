
import React from "react";
import styles from "./Footer.module.css";
import TarjetaPersona from "../TarjetaPersona/TarjetaPersona";

function Footer() {
  return (
    <footer className={`${styles.footer} w-full px-4 py-5`}>
      <p>
        &copy; 2026 - Librería con React <br>
        </br>
        Estamos ubicados en Buenos Aires, Argentina. <br>
        </br>
        Contacto: libreriaonline@gmail.com
      </p>
      <span>Nuestro equipo</span>
      <TarjetaPersona/>
    </footer>
  );
}

export default Footer;