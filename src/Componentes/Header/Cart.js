import React, {useContext} from "react";
import { contexto } from "./CartContext"


const Cart = () => {

    const { producto } = useContext(contexto)

    return(
        <>
            <h1>Carrito de compras</h1>
            <img src={producto.img}/>
            <h4>{producto.title}</h4>
            <p>${producto.price}</p>
        </>
    )
}

export default Cart