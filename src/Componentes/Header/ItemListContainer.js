import React, { useEffect, useState } from "react";
import ItemList from './ItemList';
import ItemCount from "./ItemCount"

const Lista = () => {

    function onAdd() {
        alert(`Su compra fue exitosa`)
    }

    function Conteiner() {
        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState(false)

        useEffect(() => {

            let produc

            fetch('./productos.json')
            .then(response => response.json())
            .then((produc) => productos = produc)
            setLoading(true)
            setProductos(produc)

        }, [])

        return(
            <>
            <h1>Catalogo de Productos</h1>
            {!loading ? (<div>... Cargando</div>) : (<ItemList productos={productos}/>)}
            <ItemCount stock={7} initial={1} onAdd={onAdd}/>
            </>
        )
    }
}

export default Lista