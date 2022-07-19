import React, {createContext, useState} from "react";

export const contexto = createContext()
const { Provider } = contexto

const CustomProvider = ({children}) => {

    const [producto, setProductos] = useState([])
    
    const addItem = (produc, cantidad) => {
        if (!isInCart(produc.id)) {
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
        const result = producto.some((repe) => repe.id == id)
        console.log(result)
        return result
    }

    return(
        <>
            <Provider value={{producto, addItem, removeItem, Clear, isInCart}}>
                {children}
            </Provider>
        </>
    )
}

export default CustomProvider