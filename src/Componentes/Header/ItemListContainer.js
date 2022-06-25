import React from "react";
import ItemCount from "./ItemCount"

const Lista = () => {

    function onAdd() {
        alert(`Su compra fue exitosa`)
    }

    return(
        <>
        <h1>Catalogo de Productos</h1>
        <ItemCount stock={7} initial={1} onAdd={onAdd}/>
        </>
    )
}

export default Lista