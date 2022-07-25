import React, {useEffect, useState} from "react"
import ItemDetails from "./ItemDetails"
import {useParams} from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader";
import { db } from "../../FireBase/firebase"
import { getDoc, collection, doc } from "firebase/firestore"

const ItemDetailsConteiner = () => {
    const [producto, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {itemID} = useParams()

    useEffect(() => {

        const productCollection = collection(db, 'productos')
        const refDoc = doc(productCollection, itemID)
        getDoc(refDoc)
        .then(content => {
            const product = {
                id: content.id,
                ...content.data(),
            }
            setProductos(product)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

        /*fetch(`https://fakestoreapi.com/products/${itemID}`)
        .then(res => res.json())
        .then(data => setProductos(data))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))*/

    }, [itemID])

    return(
        <>
            {loading ? <ClipLoader color={'#C96B6B'} loading={loading} size={50} /> : <ItemDetails producto={producto}/>}
        </>
    )
}

export default ItemDetailsConteiner