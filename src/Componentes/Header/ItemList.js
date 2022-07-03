import React from 'react'
import Item from './Item'
import "./item.css"

function ItemList({productos}) {
    return(
        <div className='itemConteiner'>
            {productos.map((productos) => (<Item key={productos.id} productos={productos}/>))}
        </div>
    )
}

export default ItemList