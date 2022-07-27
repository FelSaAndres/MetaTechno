import React from "react";
import './form.css'

const Formulario = () => {

    return(
        <form className="formulario">
            <h1 className="formulario__titulo">Ingresa tus datos</h1>
            <input type="text" className="formulario__input"></input>
            <label className="formulario__label">Nombre</label>
            <input type="text" className="formulario__input"></input>
            <label className="formulario__label">Apellido</label>
            <input type="text" className="formulario__input"></input>
            <label className="formulario__label">Telefono</label>
            <input type="text" className="formulario__input"></input>
            <label className="formulario__label">Email</label>
            <input type="submit" className="formulario__submit"></input>
        </form>
    )
}

export default Formulario