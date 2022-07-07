import React, {useEffect, useState} from "react"
import ItemDetails from "./ItemDetails"

const ItemDetailsConteiner = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/1`)
        .then(res => res.json())
        .then(data => setProductos(data))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])

    return(
        <>
            {loading ? <div>...Cargando</div> : <ItemDetails productos={productos}/>}
        </>
    )
}

export default ItemDetailsConteiner