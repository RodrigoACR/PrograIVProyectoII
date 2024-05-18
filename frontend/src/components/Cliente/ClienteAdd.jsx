import {useState} from "react";

const ClienteAdd = () => {

    const [nombre, setNombre] = useState('')
    const [tipoIdentificacion, setTipoIdentificacion] = useState('')
    const [numeroIdentificacion, setNumeroIdentificacion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correoelectronico, setCorreoelectronico] = useState('')
    const [idemisor, setIdemisor] = useState('')

    function guardarCliente(e) {
        e.preventDefault();

        const cliente = {
            nombre,
            tipoIdentificacion,
            numeroIdentificacion,
            telefono,
            correoelectronico,
            idemisor
        }

        console.log(cliente);
    }

    return (
        <div className={"container"}>
            <br/>
            <br/>
            <div className={"card col-md-6 offset-3"}>
                <h1 className={"text-center card-header"}>Nuevo Cliente</h1>
                <div className={"card-body"}>
                    <form>
                        <div className={"mb-3"}>
                            <label htmlFor="nombre" className={"form-label"}>Nombre</label>
                            <input type="text" id="nombre" className={"form-control"} value={nombre}
                                   onChange={(e) => setNombre(e.target.value)}/>
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor="tipoIdentificacion" className={"form-label"}>Tipo de Identificación</label>
                            <input type="text" id="tipoIdentificacion" className={"form-control"}
                                   value={tipoIdentificacion} onChange={(e) => setTipoIdentificacion(e.target.value)}/>
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor="numeroIdentificacion" className={"form-label"}>Número de
                                Identificación</label>
                            <input type="text" id="numeroIdentificacion" className={"form-control"}
                                   value={numeroIdentificacion}
                                   onChange={(e) => setNumeroIdentificacion(e.target.value)}/>
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor="telefono" className={"form-label"}>Teléfono</label>
                            <input type="text" id="telefono" className={"form-control"} value={telefono}
                                   onChange={(e) => setTelefono(e.target.value)}/>
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor="correoelectronico" className={"form-label"}>Correo Electrónico</label>
                            <input type="text" id="correoelectronico" className={"form-control"}
                                   value={correoelectronico} onChange={(e) => setCorreoelectronico(e.target.value)}/>
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor="idemisor" className={"form-label"}>ID Emisor</label>
                            <input type="text" id="idemisor" className={"form-control"} value={idemisor}
                                   onChange={(e) => setIdemisor(e.target.value)}/>
                        </div>
                        <button className={"btn btn-success"} onClick={guardarCliente}>Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ClienteAdd;