import React from "react"
import './detalle.css'

const ItemDetail = ({productos}) => {
    const {title, price, stock, image} = productos
    return(
        <div className="infoConteiner">
            <img src={image} alt={title}/>
            <h4>{title}</h4>
            <p>${price}</p>
            <button>Comprar</button>
            <h4>Stock: {stock}</h4>
        </div>
    )
}

export default ItemDetail