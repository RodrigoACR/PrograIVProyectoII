import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {deleteCliente, getClientes} from "../../services/clienteService.js";

const Cliente = () => {

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

    function editCliente() {
        navigator("/clientes/edit")
    }

    function removeCliente(id) {
        console.log("Eliminar cliente con id: ", id);

        deleteCliente(id).then((response) => {
            getAllClientes();
        }).catch(error => {
            console.error("Error al eliminar el cliente: ", error);
        })
    }

    //------------------------------------------------------------------------------------------------------------------
    // HTML
    //------------------------------------------------------------------------------------------------------------------

    return (
        <div className={"container"}>
            <h1>Clientes</h1>
            <button className="btn btn-primary mb-1" onClick={addCliente}>Nuevo Cliente</button>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
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
                            <td>{cliente.numeroIdentificacion}</td>
                            <td>{cliente.telefono}</td>
                            <td>{cliente.correoElectronico}</td>
                            <td>
                                <div className={"btn-group"}>
                                    <button className="btn btn-warning" onClick={editCliente}>Editar</button>
                                    <button className="btn btn-danger"
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

export default Cliente;