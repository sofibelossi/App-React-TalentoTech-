import React from 'react';
import styles from './Persona.module.css';
function Persona ({nombre, tarea, emoji}) {
    return (
        <section className={styles.contenedor}>
        <div className={`${styles.tarjeta} bg-white p-5 sm:p-6`} >
          <h3 className={styles.nombre}>{nombre}</h3>
          <p className={styles.tarea}>{tarea} {emoji}</p>
        </div>
        </section>
    );
}
export default Persona;