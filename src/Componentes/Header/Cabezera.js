import React from "react"
import logo from '../../varios/tecnologo.png'
import Carrito from '../../Componentes/Header/CartWidget'
import './Cabezera.css'
import { Link } from "react-router-dom"

const Nav = () => {
    return(
        <header>
            <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
            <nav>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><Link to="/">Productos</Link>
                        <ul>
                            <li><Link to="/category/Computer">Computadoras</Link></li>
                            <li><Link to="/category/Consoles">Consolas</Link></li>
                            <li><Link to="/category/Screens">Pantallas</Link></li>
                        </ul>
                    </li>
                    <li><a href="">Contactos</a></li>
                    <Link to="/cart"><Carrito valor="2" /></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Nav