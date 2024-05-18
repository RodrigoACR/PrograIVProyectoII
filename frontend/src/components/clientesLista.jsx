
import {getClientes} from "../services/clienteService.js";
import {useEffect, useState} from "react";

const ClientesLista = () => {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        getClientes().then(response => {
            setClientes(response.data);
        }).catch(error => {
            console.error("Error al obtener los clientes: ", error);
        })
    }, []);

    return (
        <div className={"container"}>
            <h1>Clientes</h1>
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

export default ClientesLista;