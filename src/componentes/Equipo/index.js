import Colaborador from "../Colaborador";
import "./Equipo.css"
import hexToRgba from 'hex-to-rgba'

const Equipo = ( props ) => {
    // style se usa lo mismo que CSS pero sin guiones y se reemplaza con mayudculas
    // DESESTRUCTURACION
     const { colorPrimario, colorSecundario, titulo, id } = props.datos
    // es igual a 
    // const colorPrimario = props.datos.colorPrimario
    // const colorSecundario = props.datos.colorSecundario
    const { colaboradores, eliminarColaborador, actualizarColor } = props

    return <>
        {colaboradores.length > 0 &&
        <section className="equipo" style={{ backgroundColor: hexToRgba(colorPrimario, 0.6) }}>
        <input
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(evento) => {
                actualizarColor(evento.target.value, id)}} 
        />
        {/* <h3 style={{ borderColor: props.datos.colorPrimario }}>{props.datos.titulo}</h3> */}
        <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
  
        <div className="colaboradores">
            {
                colaboradores.map( (colaborador, index) => <Colaborador 
                                                            datos={colaborador} 
                                                            key={index}
                                                            colorPrimario={colorPrimario}
                                                            eliminarColaborador={eliminarColaborador}
                                                            />)
            }
        </div>
    </section>
        }
    </>
}

export default Equipo;