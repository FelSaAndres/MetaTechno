import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import './detalle.css'
import ItemCount from "./ItemCount"
import { contexto } from "./CartContext"

const ItemDetail = ({producto}) => {
    const {title, price, img, description} = producto

    const [cantidad, setCantidad] = useState('')
    const [estado, setEstado] = useState(true)
    const { addItem, ProductCount } = useContext(contexto)

    const GenerarCompra = (cant) => {
        setEstado(false)
        setCantidad(cant)
        ProductCount()
    }

    const Agregar = () => {
        addItem(producto, cantidad)
    }

    return(
        <div className="infoConteiner">
            <img src={img} alt={title}/>
            <div className="infoConteiner_info">
            <h4>{title}</h4>
            <p>${price}</p>
            {estado ? <ItemCount GenerarCompra={GenerarCompra}/> : <Link to='/cart'><button onClick={Agregar}>Comprar</button></Link>}
            <span>{description}</span>
            </div>
        </div>
    )
}

export default ItemDetail