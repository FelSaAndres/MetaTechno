import React, {useContext} from "react";
import { contexto } from "./CartContext"
import "./form.css"
import { db } from "../../FireBase/firebase"
import {doc, addDoc, collection, serverTimestamp, updateDoc} from "firebase/firestore"

const Formulario = () => {

    const { producto, MontoTotal } = useContext(contexto)

    const Prueba = () => {
        console.log(document.getElementById("name").value)
    }

    const CargarCliente = () => {
        const cliente = {
            nombre: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            telefono: document.querySelector("#phone").value,
        }
        TerminarCompra(cliente)
    }

    const TerminarCompra = (cliente) => {
        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection, {
            cliente,
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
        <div className="section__form">

            <h2>Ingresa tus datos</h2>

            <div className="form">

                <div className="grupo">
                    <input type="text" name="nombre" id="name" required></input>
                    <label>Nombre</label>
                </div>

                <div className="grupo">
                    <input type="email" name="e-mail" id="email" required></input>
                    <label>E-mail</label>
                </div>

                <div className="grupo">
                    <input type="text" name="telefono" id="phone" required></input>
                    <label>Telefono</label>
                </div>

                <div className="button">
                    <button  id="ingresar" onClick={CargarCliente}>Iniciar</button>
                </div>
                
            </div>
        </div>
    )
}

export default Formulario