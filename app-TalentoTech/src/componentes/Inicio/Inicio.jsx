
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';
import styles from './Inicio.module.css';

export function Inicio() {
  return (
    <section className={styles.inicio}>
      <div className="text-center py-8 sm:py-12">
        <span className={styles.etiqueta}>
          LIBRERÍA ONLINE
        </span>

        <h1 className={`${styles.titulo} text-3xl sm:text-5xl font-bold mt-4`}>
          Bienvenidos a nuestra tienda de libros
        </h1>

        <p className={`${styles.descripcion} mt-4 text-base sm:text-lg`}>
          Descubrí historias, conocimientos y nuevas aventuras.
        </p>

        <p className="mt-2 text-sm sm:text-base">
          Buena calidad y al mejor precio.
        </p>
      </div>

      <section className="mt-6 sm:mt-10">
        <h2 className={`${styles.subtitulo} text-2xl sm:text-3xl font-bold mb-3`}>
          Principales productos destacados
        </h2>

        <p className={`${styles.textoSeccion} mb-6`}>
          Explorá nuestra selección de libros recomendados.
        </p>

        <ItemListContainer />
      </section>
    </section>
  );
}