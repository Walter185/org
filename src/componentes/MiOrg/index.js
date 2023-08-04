// import { useState} from "react";
import "./MiOrg.css"

const MiOrg = ( props ) => {
    console.log(props)
// Manejar Hooks
// useState
// const [nombreVariable, funcionActualiza] = useState(valorInicial)
// const [mostrar, actualizarMostrar] = useState(true)

// const manejarClick = () => {
//     console.log("mostrar/ocultar", mostrar);
//     actualizarMostrar(!mostrar);
// }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        {/* <img src="/img/add.png" alt="add" onClick={manejarClick}/> */}
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;