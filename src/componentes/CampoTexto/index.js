import "./CampoTexto.css"

const CampoTexto = ( props ) => {
    const placeholderModificado = `${props.placeholder}...` //// modifico mis props 
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={ placeholderModificado } />
        </div>
}

export default CampoTexto;