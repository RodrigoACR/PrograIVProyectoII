import {useState} from "react";
import {addCliente} from "../../services/clienteService.js";
import {useNavigate} from "react-router-dom";

const ClienteAdd = () => {

    const [nombre, setNombre] = useState('')
    const [tipoIdentificacion, setTipoIdentificacion] = useState('')
    const [numeroIdentificacion, setNumeroIdentificacion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correoElectronico, setCorreoElectronico] = useState('')

    const navigator = useNavigate();

    function guardarCliente(e) {
        e.preventDefault();

        const cliente = {
            nombre,
            tipoIdentificacion,
            numeroIdentificacion,
            telefono,
            correoElectronico
        }

        addCliente(cliente).then(response => {
            console.log(response.data);
            navigator("/clientes");
        })
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
                                   value={correoElectronico} onChange={(e) => setCorreoElectronico(e.target.value)}/>
                        </div>
                        <button className={"btn btn-success"} onClick={guardarCliente}>Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ClienteAdd;