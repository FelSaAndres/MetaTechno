import React from "react"
import logo from '../../varios/tecnologo.png'
import carrito from '../../varios/carritocompras.png'
import './Cabezera.css'

const Nav = () => {
    return(
        <header>
            <img src={logo} className="logo" alt="logo" />
            <nav>
                <a href="">Inicio</a>
                <a href="">Productos</a>
                <a href="">Contactos</a>
                <img src={carrito} className="carrito" alt="carrito" />
            </nav>
        </header>
    )
}

export default Nav