import React, {useContext} from "react";
import { contexto } from "./CartContext"
import "./cart.css"
import { Link } from "react-router-dom";

const Cart = () => {

    const { producto, removeItem, Clear, StateList, MontoTotal } = useContext(contexto)

    const VaciarCarrito = () => {
        Clear()
    }

    const EliminarItem = (id) => {
        removeItem(id)
    }

    return(
        <>
            <h1>Carrito de compras</h1>
            {StateList() ? <div className="itemCartConteiner">
                {producto.map((produc) => (
                <div key={produc.id} className="itemCart">
                    <img src={produc.img} alt={produc.title}/>
                    <h4>{produc.title}</h4>
                    <p>${produc.price}</p>
                    <h5>Cantidad: {produc.quantity}</h5>
                    <button onClick={() => EliminarItem(produc.id)}>Quitar</button> 
                </div>))}
            </div> : <div className="NoneItems"><p>El carrito se encuetra vacio</p><Link to="/"><button className="buttonIrCompras"><span>Ir a comprar</span></button></Link></div>}
            {StateList() ? <div className="controlsCart">
                           <div className="buttonsCart"><button className="buttonVaciar" onClick={VaciarCarrito}><p>Vaciar carrito</p></button>
                           <button className="buttonVaciar"><p>Finalizar Compra</p></button></div>
                           <p>Total: ${MontoTotal()}</p></div> : null}
        </>
    )
}

export default Cart