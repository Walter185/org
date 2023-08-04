import "./Equipo.css"

const Equipo = ( props ) => {
    // style se usa lo mismo que CSS pero sin guiones y se reemplaza con mayudculas
    // DESESTRUCTURACION
     const { colorPrimario, colorSecundario, titulo } = props.datos
    // es igual a 
    // const colorPrimario = props.datos.colorPrimario
    // const colorSecundario = props.datos.colorSecundario

    return <section className="equipo" style={{ backgroundColor: colorSecundario }}>
        {/* <h3 style={{ borderColor: props.datos.colorPrimario }}>{props.datos.titulo}</h3> */}
        <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
 
        <div className="colaboradores">

        </div>
    </section>
}

export default Equipo;