import React, {useContext} from "react";
import { contexto } from "./CartContext"
import "./cart.css"
import { Link } from "react-router-dom";
import { db } from "../../FireBase/firebase"
import {doc, addDoc, collection, serverTimestamp, updateDoc} from "firebase/firestore"

const Cart = () => {

    const { producto, removeItem, Clear, StateList, MontoTotal } = useContext(contexto)

    const VaciarCarrito = () => {
        Clear()
    }

    const EliminarItem = (id) => {
        removeItem(id)
    }

    const compradorData = {
        nombre: "Mario",
        telefono: "1150235234",
        email: "mariodominguez@gmail.com"
    }

    const TerminarCompra = () => {
        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection, {
            compradorData,
            items: producto,
            date: serverTimestamp(), 
            total: MontoTotal()
        })

        const idProducts = producto.map(x => x.id)
        const qtyProducts = producto.map(x => x.quantity)
        const stockProducts = producto.map(x => x.stock)
        for (let i = 0; i < idProducts.length; i++) {
            const updateCollection = doc(db, "productos", idProducts[i])
            updateDoc(updateCollection, {stock: stockProducts[i] - qtyProducts[i]})
        }
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
                           <Link to="/form"><button className="buttonConfimar" /*onClick={TerminarCompra}*/><p>Finalizar Compra</p></button></Link></div>
                           <p>Total: ${MontoTotal()}</p></div> : null}
        </> 
    )
}

export default Cart