
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Item } from '../Item/Item';
import styles from './Producto.module.css';

function Productos({ Mensaje }) {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('/data/productos.json')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('No se pudo cargar la información de los productos.');
                }
                return res.json();
            })
            .then((datos) => {
                setProductos(datos);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    if (cargando) {
        return (
            <div className={styles.mensajeEstado}>
                <p>Cargando catálogo de libros...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.mensajeError}>
                <h2>No pudimos cargar los libros</h2>
                <p>{error}</p>
            </div>
        );
    }

    if (productos.length === 0) {
        return (
            <div className={styles.mensajeEstado}>
                <h2>El catálogo está vacío</h2>
                <p>Pronto habrá nuevos libros disponibles.</p>
            </div>
        );
    }

    return (
        <section className={`${styles.contenedor} w-full`}>
            <header className={styles.encabezado}>
                <span className={styles.subtitulo}>EXPLORÁ NUESTRO CATÁLOGO</span>

                <h1 className="text-3xl sm:text-4xl font-bold">
                    {Mensaje || 'Nuestros libros'}
                </h1>

                <p>
                    Encontrá tu próxima lectura entre nuestros libros disponibles.
                </p>
            </header>

            <div className={`${styles.lista} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
                {productos.map((producto) => (
                    <article className={styles.tarjeta} key={producto.id}>
                        <Link
                            className={styles.enlaceDetalle}
                            to={`/productos/${producto.id}`}
                        >
                            <div className={styles.contenedorImagen}>
                                <img
                                    className={styles.imagen}
                                    src={producto.urlImagen || producto.imagen}
                                    alt={`Portada de ${producto.nombre}`}
                                    loading="lazy"
                                />
                            </div>

                            <h2 className={styles.nombre}>{producto.nombre}</h2>
                        </Link>

                        <div className={styles.comprar}>
                            <Item
                                id={producto.id}
                                nombre={producto.nombre}
                                precio={producto.precio}
                                stock={producto.stock}
                            />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Productos;