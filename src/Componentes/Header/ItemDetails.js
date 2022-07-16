import React, { useState } from "react"
import { Link } from "react-router-dom"
import './detalle.css'
import ItemCount from "./ItemCount"

const ItemDetail = ({producto}) => {
    const {title, price, image, description} = producto

    const [cantidad, setCantidad] = useState()
    const [estado, setEstado] = useState(true)

    const GenerarCompra = () => {
        setEstado(false)
    }

    return(
        <div className="infoConteiner">
            <img src={image} alt={title}/>
            <div className="infoConteiner_info">
            <h4>{title}</h4>
            <p>${price}</p>
            {estado ? <ItemCount GenerarCompra={GenerarCompra}/> : <Link to='/cart'><button>Comprar</button></Link>}
            <span>{description}</span>
            </div>
        </div>
    )
}

export default ItemDetail