import React, {useState} from "react";

const ItemCount = ({GenerarCompra}) =>{

    const [cantidad, setCuenta] = useState(1)

    const BotonCompra = () => {
        GenerarCompra(cantidad)
    }

    function sumar() {
        setCuenta(cantidad + 1)
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
        <button className="comprar" onClick={BotonCompra}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount