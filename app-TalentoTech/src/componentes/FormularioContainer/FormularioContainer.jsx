
import React, { useState } from 'react';
import { FormularioProducto } from '../FormularioProducto/FormularioProducto';

export function FormularioContainer() {
    const [datosForm, setDatosForm] = useState({
        nombre: '',
        precio: '',
        stock: ''
    });

    const [imagenFile, setImagenFile] = useState(null);
    const [cargando, setCargando] = useState(false);

    const manejarCambio = (e) => {
        const { name, value } = e.target;

        setDatosForm((datosAnteriores) => ({
            ...datosAnteriores,
            [name]: value
        }));
    };

    const manejarCambioImagen = (e) => {
        const archivo = e.target.files?.[0] || null;
        setImagenFile(archivo);
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();

        if (!datosForm.nombre.trim()) {
            alert('Ingresá el nombre del libro.');
            return;
        }

        if (datosForm.precio === '' || Number(datosForm.precio) <= 0) {
            alert('Ingresá un precio válido.');
            return;
        }

        if (
            datosForm.stock === '' ||
            !Number.isInteger(Number(datosForm.stock)) ||
            Number(datosForm.stock) < 0
        ) {
            alert('Ingresá un stock válido.');
            return;
        }

        if (!imagenFile) {
            alert('Por favor, seleccioná una imagen para el libro.');
            return;
        }

        if (!imagenFile.type.startsWith('image/')) {
            alert('El archivo seleccionado no parece ser una imagen.');
            return;
        }

        if (imagenFile.size > 32 * 1024 * 1024) {
            alert('La imagen supera el límite de 32 MB.');
            return;
        }

        setCargando(true);

        try {
            const apiKey = '728ca5f90fb241e1176da28de290aaa9';

            const formData = new FormData();
            formData.append('image', imagenFile, imagenFile.name);

            const respuesta = await fetch(
                `https://api.imgbb.com/1/upload?key=${apiKey}`,
                {
                    method: 'POST',
                    body: formData
                }
            );

            const resultado = await respuesta.json();

            if (!respuesta.ok || !resultado.success) {
                throw new Error(
                    resultado.error?.message ||
                    'No se pudo subir la imagen a ImgBB.'
                );
            }

            const productoCompleto = {
                nombre: datosForm.nombre.trim(),
                precio: Number(datosForm.precio),
                stock: Number(datosForm.stock),
                urlImagen: resultado.data.url
            };

            console.log('Datos del producto preparados:', productoCompleto);

            alert(
                '¡Imagen subida correctamente!'
            );

        } catch (error) {
            console.error('Error al procesar el producto:', error);
            alert(`No se pudo procesar el producto: ${error.message}`);
        } finally {
            setCargando(false);
        }
    };

    return (
        <FormularioProducto
            datosForm={datosForm}
            manejarCambio={manejarCambio}
            manejarEnvio={manejarEnvio}
            manejarCambioImagen={manejarCambioImagen}
            cargando={cargando}
        />
    );
}