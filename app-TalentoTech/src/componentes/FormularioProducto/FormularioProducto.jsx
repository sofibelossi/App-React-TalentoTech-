
import React from 'react';
import styles from './FormularioProducto.module.css';

export function FormularioProducto({
    datosForm,
    manejarCambio,
    manejarEnvio,
    manejarCambioImagen,
    cargando
}) {
    return (
        <section className={`${styles.contenedor} w-full`}>
            <div className={styles.encabezado}>
                <span className={styles.subtitulo}>GESTIÓN DE LA LIBRERÍA</span>
                <h1 className="text-3xl sm:text-4xl font-bold">
                    Agregar un libro
                </h1>
                <p>
                    Completá los datos para incorporar un nuevo libro al catálogo.
                </p>
            </div>

            <form
                className={styles.formulario}
                onSubmit={manejarEnvio}
            >
                <div className={styles.campo}>
                    <label htmlFor="nombre">Nombre del libro</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Ej.: Don Quijote de la Mancha"
                        name="nombre"
                        value={datosForm.nombre}
                        onChange={manejarCambio}
                        required
                        maxLength={120}
                    />
                </div>

                <div className={styles.campo}>
                    <label htmlFor="precio">Precio del libro</label>
                    <div className={styles.entradaPrecio}>
                        <span>$</span>
                        <input
                            id="precio"
                            type="number"
                            placeholder="Ej.: 19000"
                            name="precio"
                            value={datosForm.precio}
                            onChange={manejarCambio}
                            min="1"
                            step="1"
                            required
                        />
                    </div>
                </div>

                <div className={styles.campo}>
                    <label htmlFor="stock">Stock disponible</label>
                    <input
                        id="stock"
                        type="number"
                        placeholder="Ej.: 10"
                        name="stock"
                        value={datosForm.stock}
                        onChange={manejarCambio}
                        min="0"
                        step="1"
                        required
                    />
                </div>

                <div className={styles.campo}>
                    <label htmlFor="imagen">Portada del libro</label>
                    <input
                        id="imagen"
                        className={styles.archivo}
                        type="file"
                        name="imagen"
                        accept="image/*"
                        onChange={manejarCambioImagen}
                        required
                    />
                    <small>Seleccioná una imagen desde tu computadora.</small>
                </div>

                <button
                    className={`${styles.botonEnviar} w-full py-3 px-4`}
                    type="submit"
                    disabled={cargando}
                >
                    {cargando ? 'Subiendo imagen...' : 'Agregar libro al catálogo'}
                </button>

                {cargando && (
                    <p className={styles.mensajeCarga} role="status">
                        Estamos procesando la imagen. Esperá un momento...
                    </p>
                )}
            </form>
        </section>
    );
}