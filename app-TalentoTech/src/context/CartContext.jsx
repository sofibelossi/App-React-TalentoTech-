
import React, { useState, useContext, createContext } from "react";

export const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart debe ser usado dentro de un CartProvider");
    }

    return context;
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (producto, quantity) => {
        if (quantity <= 0) return;

        setCart(prevCart => {
            const itemInCart = prevCart.find(
                item => item.id === producto.id
            );

            if (itemInCart) {
                return prevCart.map(item =>
                    item.id === producto.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...prevCart, { ...producto, quantity }];
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const getCartTotal = () => {
        return cart.reduce(
            (acc, item) => acc + Number(item.precio) * item.quantity,
            0
        );
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                clearCart,
                getCartQuantity,
                getCartTotal
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
