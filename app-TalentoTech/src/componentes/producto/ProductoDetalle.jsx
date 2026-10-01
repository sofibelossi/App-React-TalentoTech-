
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Item } from '../Item/Item';
import styles from './ProductoDetalle.module.css';

const ProductoDetalle = () => {
    const { id } = useParams();

    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setCargando(true);
        setError(null);
        setProducto(null);

        fetch('/data/productos.json')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('No se pudo cargar la información del producto.');
                }

                return res.json();
            })
            .then((data) => {
                const productoEncontrado = data.find(
                    (p) => String(p.id) === id
                );

                if (!productoEncontrado) {
                    throw new Error('Producto no encontrado.');
                }

                setProducto(productoEncontrado);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
    }, [id]);

    if (cargando) {
        return (
            <div className={styles.estado}>
                <p>Cargando detalles del libro...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.error}>
                <h2>No pudimos mostrar este libro</h2>
                <p>{error}</p>
                <Link to="/productos" className={styles.volver}>
                    Volver al catálogo
                </Link>
            </div>
        );
    }

    return (
        <section className={`${styles.contenedor} w-full`}>
            <Link to="/productos" className={styles.volver}>
                ← Volver al catálogo
            </Link>

            <article className={styles.detalle}>
                <div className={styles.imagenContenedor}>
                    <img
                        className={styles.imagen}
                        src={producto.urlImagen || producto.imagen}
                        alt={`Portada de ${producto.nombre}`}
                    />
                </div>

                <div className={styles.informacion}>
                    <span className={styles.etiqueta}>DETALLE DEL LIBRO</span>

                    <h1 className="text-3xl sm:text-4xl font-bold">
                        {producto.nombre}
                    </h1>

                    <p className={styles.precio}>
                        ${Number(producto.precio).toLocaleString('es-AR')}
                    </p>

                    <div className={styles.divisor}></div>

                    <h2>Descripción</h2>

                    <p className={styles.descripcion}>
                        {producto.descripcion || 'No hay una descripción disponible para este libro.'}
                    </p>

                    <p className={styles.stock}>
                        Stock disponible: <strong>{producto.stock ?? 0}</strong>
                    </p>

                    <div className={styles.comprar}>
                        <Item
                            id={producto.id}
                            nombre={producto.nombre}
                            precio={producto.precio}
                            stock={producto.stock ?? 0}
                        />
                    </div>
                </div>
            </article>
        </section>
    );
};

export default ProductoDetalle;