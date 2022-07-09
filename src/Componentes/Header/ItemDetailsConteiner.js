import React, {useEffect, useState} from "react"
import ItemDetails from "./ItemDetails"
import {useParams} from "react-router-dom"

const ItemDetailsConteiner = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {productID} = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/1`)
        .then(res => res.json())
        .then(data => setProductos(data))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [productID])

    return(
        <>
            {loading ? <div>...Cargando</div> : <ItemDetails productos={productos}/>}
        </>
    )
}

export default ItemDetailsConteiner