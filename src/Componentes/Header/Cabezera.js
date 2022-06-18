import React from "react"
import logo from '../../varios/tecnologo.png'
import Carrito from '../../Componentes/Header/CartWidget'
import './Cabezera.css'

const Nav = () => {
    return(
        <header>
            <img src={logo} className="logo" alt="logo" />
            <nav>
                <a href="">Inicio</a>
                <a href="">Productos</a>
                <a href="">Contactos</a>
                <Carrito valor="2" />
            </nav>
        </header>
    )
}

export default Nav