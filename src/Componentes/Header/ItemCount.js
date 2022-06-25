import React, {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) =>{

    const [cantidad, setCuenta] = useState(initial)

    function sumar() {
        if (cantidad < stock) {
            setCuenta(cantidad + 1)
        }
    }

    function restar() {
        if (cantidad > 1) {
            setCuenta(cantidad - 1)
        }
    }

    return(
        <>
        <div className="cantidadStock">
            <button onClick={(restar)}>-</button>
            <p>{cantidad}</p>
            <button onClick={(sumar)}>+</button>
        </div>
        <button className="comprar" onClick={(onAdd)}>Comprar</button>
        </>
    )
}

export default ItemCount