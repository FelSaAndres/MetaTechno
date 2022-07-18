import React, {useEffect, useState} from "react"
import ItemDetails from "./ItemDetails"
import {useParams} from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader";

const ItemDetailsConteiner = () => {
    const [producto, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {itemID} = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${itemID}`)
        .then(res => res.json())
        .then(data => setProductos(data))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [itemID])

    return(
        <>
            {loading ? <ClipLoader color={'#C96B6B'} loading={loading} size={50} /> : <ItemDetails producto={producto}/>}
        </>
    )
}

export default ItemDetailsConteiner