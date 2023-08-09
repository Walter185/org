import { useState } from "react"
import "./Campo.css"

const Campo = ( props ) => {
    // const [valor, actualizarValor ] = useState("")
    // console.log("Datos ", props)
    const placeholderModificado = `${props.placeholder}...` //// modifico mis props 

    //Destructuracion
    const { type = "text" } = props
    // console.log(type) le di la propiedad text a todos los type


    const manejarCambio = (e) => {
        // console.log("cambio" , e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type  }`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={ placeholderModificado } 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
        </div>
}

export default Campo;