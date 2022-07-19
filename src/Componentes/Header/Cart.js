import React, {useContext, useState} from "react";
import { contexto } from "./CartContext"
import "./cart.css"

const Cart = () => {

    const { producto, removeItem, Clear, isInCart } = useContext(contexto)

    const VaciarCarrito = () => {
        Clear()
    }

    const EliminarItem = (id) => {
        removeItem(id)
    }


    return(
        <>
            <h1>Carrito de compras</h1>
            <div className="itemCartConteiner">
                {producto.map((produc) => (
                <div key={produc.id} className="itemCart">
                    <img src={produc.image} alt={produc.title}/>
                    <h4>{produc.title}</h4>
                    <p>${produc.price}</p>
                    <h5>Cantidad: {produc.quantity}</h5>
                    <button onClick={() => EliminarItem(produc.id)}>Quitar</button>
                </div>))}
            </div>
            <button className="buttonVaciar" onClick={VaciarCarrito}><p>Vaciar carrito</p></button>
        </>
    )
}

export default Cart