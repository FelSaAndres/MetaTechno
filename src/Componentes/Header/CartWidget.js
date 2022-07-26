import React, {useContext} from "react";
import { contexto } from "./CartContext"
import { FaShoppingCart } from 'react-icons/fa';

const Carrito = () =>{
    
    const { ProductCount } = useContext(contexto)

    return(
        <span className="carritoLogo"><FaShoppingCart />{ProductCount()}</span>
    )
}

export default Carrito