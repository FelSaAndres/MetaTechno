import React, { useEffect, useState } from "react";
import ItemList from './ItemList';
import "./Cabezera.css"
import {useParams} from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader";
import { db } from "../../FireBase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

    function Conteiner() {
        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState(false)

        const {categoryName} = useParams()

        useEffect(() => {

            const productCollection = collection(db, 'productos')
            const q = query(productCollection, where('category', '==', `${categoryName}`))
            const Mostrar = categoryName ? q : productCollection
            getDocs(Mostrar)
            .then(content => {
                const lista = content.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                })
                setProductos(lista)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

            /*const URL = categoryName ? `https://fakestoreapi.com/products/category/${categoryName}` : `https://fakestoreapi.com/products`
            const getProductos = async () => {
                try{
                    const response = await fetch(URL)
                    const datos = await response.json()
                    setProductos(datos)
                }
                catch(err){
                    setError(true)
                    console.error(err)
                }
                finally{
                    setLoading(false)
                }
            }
            getProductos()*/

        }, [categoryName])

        return(
            <>
            <h1>Catalogo de Productos</h1>
            {loading ? <ClipLoader color={'#C96B6B'} loading={loading} size={50} /> : error ? <p>Error</p> : (<ItemList productos={productos}/>)}
            </>
        )
    }

export default Conteiner