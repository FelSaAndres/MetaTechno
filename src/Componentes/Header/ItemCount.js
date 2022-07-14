import React, {useState} from "react";
import { Link } from "react-router-dom";

const ItemCount = ({enviarID}) =>{

    const [cantidad, setCuenta] = useState(1)
    const idItem = `/item/${enviarID}`

    function sumar() {
        setCuenta(cantidad + 1)
    }

    function restar() {
        if (cantidad > 1) {
            setCuenta(cantidad - 1)
        }
    }

    const CantidadCompra = (event) => {
        const total = cantidad
    }

    return(
        <>
        <div className="cantidadStock">
            <button onClick={(restar)}>-</button>
            <p>{cantidad}</p>
            <button onClick={(sumar)}>+</button>
        </div>
        <Link to={idItem} property={cantidad}><button className="comprar">Agregar al carrito</button></Link>
        </>
    )
}

export default ItemCount