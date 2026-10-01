
import { ItemList } from '../ItemList/ItemList';
import styles from './ItemListContainer.module.css';

export function ItemListContainer({ Mensaje }) {
    const productos = [
        { id: 1, nombre: 'Ana de las Tejas Verdes', precio: 10000, stock: 10 },
        { id: 2, nombre: 'El Principito', precio: 15000, stock: 5 },
        { id: 3, nombre: 'Cien Años de Soledad', precio: 12000, stock: 8 },
    ];

    return (
        <section className={`${styles.contenedor} w-full`}>
            <div className={styles.encabezado}>
                <span className={styles.subtitulo}>NUESTRA SELECCIÓN</span>

                <h2 className="text-2xl sm:text-3xl font-bold">
                    {Mensaje || 'Libros destacados'}
                </h2>

                <p className={styles.descripcion}>
                    Descubrí historias inolvidables y encontrá tu próxima lectura.
                </p>
            </div>

            <ItemList productos={productos} />
        </section>
    );
}