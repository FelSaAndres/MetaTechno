import React from 'react'

function Item({productos}){
    const {Titulo, precio, Stock, image} = productos
    return(
        <div className='itemBox'>
            <h4>{Titulo}</h4>
            <p>${precio}</p>
            <button>Ver detalle del producto</button>
            <h4>Stock: {Stock}</h4>
        </div>
    )
}

export default Item