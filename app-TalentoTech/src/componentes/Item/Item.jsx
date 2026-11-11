import {Link} from 'react-router-dom';
import {useCart} from '../../context/CartContext';
import { useState } from 'react';
import styles from './Item.module.css';

export function Item({ id, nombre, precio, stock, imagen }) {
    const producto = { id, nombre, precio, stock, imagen };
    const [cantidad, setCantidad] = useState(0);

    const { addToCart } = useCart();

    const handleAddToCart = () => {
    if (cantidad <= 0) {
        alert('Seleccioná al menos una unidad.');
        return;
    }

    addToCart(producto, cantidad);

    alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
    };

    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const decrementar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    };

    /*const agregarAlCarrito = () => {
        if (cantidad === 0) {
            alert('Seleccioná al menos una unidad.');
            return;
        }

        alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
    };*/
    

    return (
        <article className={`${styles.tarjeta} bg-white p-5 sm:p-6`}>
            <div className={styles.etiqueta}>LIBRERÍA ONLINE</div>

            <h3 className={styles.nombre}>{nombre}</h3>

            <p className={styles.precio}>
                ${Number(precio).toLocaleString('es-AR')}
            </p>

            <p className={styles.stock}>
                <span className={styles.punto}></span>
                Stock disponible: {stock}
            </p>
            <Link to={`/producto/${producto.id}`} className={styles.detalle}>
                Ver detalle
            </Link>
            <div className={styles.controles}>
                <button
                    type="button"
                    className={styles.botonCantidad}
                    onClick={decrementar}
                    disabled={cantidad === 0}
                    aria-label="Disminuir cantidad"
                >
                    −
                </button>

                <span className={styles.cantidad}>{cantidad}</span>

                <button
                    type="button"
                    className={styles.botonCantidad}
                    onClick={incrementar}
                    disabled={cantidad >= stock}
                    aria-label="Aumentar cantidad"
                >
                    +
                </button>
            </div>

            <button
                type="button"
                className={`${styles.botonCarrito} w-full py-3 px-4`}
                onClick={handleAddToCart}
            >
                Agregar {cantidad} al carrito
            </button>
        </article>
    );
}