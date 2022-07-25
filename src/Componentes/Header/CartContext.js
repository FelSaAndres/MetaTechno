import React, {createContext, useState} from "react";

export const contexto = createContext()
const { Provider } = contexto

const CustomProvider = ({children}) => {

    const [producto, setProductos] = useState([])
    const [total, setTotal] = useState()
    
    const addItem = (produc, cantidad) => {
        if (isInCart(produc.id)) {
            const aux = [...producto]
            const cant = producto.find(x => x.id === produc.id)
            cant.quantity += cantidad
            setProductos(aux)
        }
        else{
            const newProducto = {...produc, quantity: cantidad}
            setProductos([...producto, newProducto])
        }
    }

    const removeItem = (id) => {
        const nullItems = producto.filter((product) => product.id !== id)
        setProductos(nullItems)
    }

    const Clear = () => {
        setProductos([])
    }

    const isInCart = (id) => {
        const result = producto.some((repe) => repe.id === id)
        return result
    }

    const StateList = () => {
        let estado
        producto.length === 0 ? estado = false : estado = true
        return estado 
    }

    const ProductCount = () => {
        /*let acumulado = 0
        for (let index = 0; index < producto.length; index++) {
            acumulado += producto[index].quantity
        }*/
        console.log(producto.length)
        console.log(producto)
        //setTotal(acumulado)
    }

    return(
        <>
            <Provider value={{producto, total, addItem, removeItem, Clear, StateList, ProductCount}}>
                {children}
            </Provider>
        </>
    )
}

export default CustomProvider