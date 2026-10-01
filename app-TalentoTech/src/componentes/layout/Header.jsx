
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={`${styles.header} w-full px-6 py-5`}>
      <h1 className="text-2xl sm:text-3xl font-bold">
        Bienvenidos a mi Libreria Online
      </h1>

      <nav className="mt-5">
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-6">
          <li>
            <Link className={styles.navLink} to="/">
              Inicio
            </Link>
          </li>

          <li>
            <Link className={styles.navLink} to="/productos">
              Productos
            </Link>
          </li>

          <li>
            <Link className={styles.navLink} to="/destacados">
              Destacados
            </Link>
          </li>

          <li>
            <Link className={styles.navLink} to="/alta-productos">
              Alta de productos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;