import React, {useContext} from "react";
import { contexto } from "./CartContext"
import { FaShoppingCart } from 'react-icons/fa';

const Carrito = () =>{
    
    const { total } = useContext(contexto)

    return(
        <span className="carritoLogo"><FaShoppingCart />{total}</span>
    )
}

export default Carrito