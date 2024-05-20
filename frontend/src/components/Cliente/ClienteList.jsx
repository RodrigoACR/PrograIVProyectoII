import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {deleteCliente, getClientes} from "../../services/clienteService.js";

const ClienteList = () => {

    //------------------------------------------------------------------------------------------------------------------
    // CONSTANTES
    //------------------------------------------------------------------------------------------------------------------
    const [clientes, setClientes] = useState([]);
    const navigator = useNavigate();

    //------------------------------------------------------------------------------------------------------------------
    // Obtener los clientes
    //------------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        getAllClientes();
    }, []);

    //------------------------------------------------------------------------------------------------------------------
    // FUNCIONES
    //------------------------------------------------------------------------------------------------------------------
    function getAllClientes() {
        getClientes().then((response) => {
            setClientes(response.data);
        }).catch(error => {
            console.error("Error al obtener los clientes: ", error);
        })
    }

    function addCliente() {
        navigator("/clientes/add")
    }

    function viewCliente(id) {
        navigator(`/clientes/view/${id}`)
    }

    function removeCliente(id) {
        console.log("Eliminar cliente con id: ", id);

        deleteCliente(id).then(() => {
            getAllClientes();
        }).catch(error => {
            console.error("Error al eliminar el cliente: ", error);
        })
    }

    function formatCedula(tipoCedula, cedula) {
        if (tipoCedula === "Fisica" && cedula.length === 9) {
            return `${cedula.slice(0, 1)}-${cedula.slice(1,5)}-${cedula.slice(5)}`;
        }
        if(tipoCedula === "Juridica" && cedula.length === 10)
        {
            return `${cedula.slice(0, 1)}-${cedula.slice(1,4)}-${cedula.slice(5)}`;
        }

        return cedula;
    }

    function formatTelefono(telefono) {
        if (telefono.length === 8) {
            return `${telefono.slice(0, 4)}-${telefono.slice(4)}`;
        }

        return telefono;
    }

    //------------------------------------------------------------------------------------------------------------------
    // HTML
    //------------------------------------------------------------------------------------------------------------------

    return (
        <div className={"container"}>
            <h1 className={"text-center text-primary fw-bold p-4"}>Clientes</h1>
            <button className="btn btn-primary mb-1" onClick={addCliente}>Nuevo Cliente</button>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr className={"text-center"}>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Tipo Cedula</th>
                        <th>Cedula</th>
                        <th>Telefono</th>
                        <th>Correo</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente =>
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.tipoIdentificacion}</td>
                            <td className={"text-center"}>{formatCedula(cliente.tipoIdentificacion, cliente.numeroIdentificacion)}</td>
                            <td className={"text-center"}>{formatTelefono(cliente.telefono)}</td>
                            <td>{cliente.correoElectronico}</td>
                            <td>
                                <div className={"text-center"}>
                                    <button className="btn btn-info m-1" onClick={() => viewCliente(cliente.id)} >Ver</button>
                                    <button className="btn btn-danger m-1"
                                            onClick={() => removeCliente(cliente.id)}>Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ClienteList;