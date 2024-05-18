
import {getClientes} from "../../services/clienteService.js";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Cliente = () => {

    const [clientes, setClientes] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getClientes().then(response => {
            setClientes(response.data);
        }).catch(error => {
            console.error("Error al obtener los clientes: ", error);
        })
    }, []);

    function addCliente() {
        navigator("/clientes/add")
    }

    return (
        <div className={"container"}>
            <h1>Clientes</h1>
            <button className="btn btn-primary" onClick={addCliente}>Nuevo Cliente</button>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente =>
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nombre}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
    )
}

export default Cliente;