import React, { useState } from "react"
import './detalle.css'
import ItemCount from "./ItemCount"

const ItemDetail = ({producto, CantidadCompra}) => {
    const {id, title, price, image, description} = producto

    const [total, setTotal] = useState()

    const GenerarCompra = () => {
        CantidadCompra()
    }

    return(
        <div className="infoConteiner">
            <img src={image} alt={title}/>
            <div className="infoConteiner_info">
            <h4>{title}</h4>
            <p>${price}</p>
            <ItemCount enviarID={id}/>
            <span>{description}</span>
            </div>
        </div>
    )
}

export default ItemDetail