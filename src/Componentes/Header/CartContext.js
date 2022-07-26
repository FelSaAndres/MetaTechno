import React, {createContext, useState} from "react";

export const contexto = createContext()
const { Provider } = contexto

const CustomProvider = ({children}) => {

    const [producto, setProductos] = useState([])
    
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
        const canttotal = producto.map(x => x.quantity)
        let acumulado = 0
        for (let i = 0; i < canttotal.length; i++) {
            acumulado += parseInt(canttotal[i])
        }
        return acumulado == 0 ? acumulado = null : acumulado
    }

    const MontoTotal = () => {
        const montotal = producto.map(x => x.price)
        const canttotal = producto.map(x => x.quantity)
        let costo = 0

        for (let i = 0; i < montotal.length; i++) {
            costo += parseInt(montotal[i]) * parseInt(canttotal[i])
        }

        return costo
    }

    return(
        <>
            <Provider value={{producto, addItem, removeItem, Clear, StateList, ProductCount, MontoTotal}}>
                {children}
            </Provider>
        </>
    )
}

export default CustomProvider