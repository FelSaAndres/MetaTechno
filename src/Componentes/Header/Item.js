import React from 'react'
import "./item.css"

function Item({productos}){
    const {title, price, stock, image} = productos
    return(
        <div className='itemBox'>
            <img src={image} alt={title}/>
            <h4>{title}</h4>
            <p>${price}</p>
            <button>Ver detalle del producto</button>
            <h4>Stock: {stock}</h4>
        </div>
    )
}

export default Item