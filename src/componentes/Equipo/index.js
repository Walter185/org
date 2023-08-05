import Colaborador from "../Colaborador";
import "./Equipo.css"

const Equipo = ( props ) => {
    // style se usa lo mismo que CSS pero sin guiones y se reemplaza con mayudculas
    // DESESTRUCTURACION
     const { colorPrimario, colorSecundario, titulo } = props.datos
    // es igual a 
    // const colorPrimario = props.datos.colorPrimario
    // const colorSecundario = props.datos.colorSecundario
    const { colaboradores, eliminarColaborador, actualizarColor } = props

    return <>
        {colaboradores.length > 0 &&
        <section className="equipo" style={{ backgroundColor: colorSecundario }}>
        <input
            type="color"
            className="input-color"
            value={colorSecundario}
            onChange={(evento) => console.log(evento.target.value)}
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