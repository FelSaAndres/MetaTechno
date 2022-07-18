import React, {createContext, useState} from "react";

export const contexto = createContext()
const { Provider } = contexto

const CustomProvider = ({children}) => {

    const [producto, setProductos] = useState([])
    
    const addItem = (produc) => {
        setProductos([...producto, produc])
    }

    const removeItem = (id) => {

    }

    const Clear = () => {
        setProductos([])
    }

    const isInCart = () => {

    }

    return(
        <>
            <Provider value={{producto, addItem}}>
                {children}
            </Provider>
        </>
    )
}

export default CustomProvider