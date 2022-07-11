import React from "react"
import './detalle.css'

const ItemDetail = ({producto}) => {
    const {title, price, stock, image} = producto
    return(
        <div className="infoConteiner">
            <img src={image} alt={title}/>
            <div className="infoConteiner_info">
            <h4>{title}</h4>
            <p>${price}</p>
            <button>Comprar</button>
            <h5>Stock: {stock}</h5>
            </div>
        </div>
    )
}

export default ItemDetail