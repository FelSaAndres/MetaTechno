import React from 'react'
import "./item.css"
import { Link } from "react-router-dom"

function Item({productos}){
    const {id ,title, price, stock, image} = productos
    const idItem = `/item/${id}`
    return(
        <div className='itemBox'>
            <img src={image} alt={title}/>
            <h4>{title}</h4>
            <p>${price}</p>
            <Link to={idItem} className="linkDetalle"><button><p>Ver detalle del producto</p></button></Link>
            <h4>Stock: {stock}</h4>
        </div>
    )
}

export default Item