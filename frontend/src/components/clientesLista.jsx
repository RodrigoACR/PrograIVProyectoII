import {useEffect, useState} from "react";
import {clientesLista} from "../services/clienteService.js";

const ClientesLista = () => {

    const  [clientes, setClientes] = useState([]);

    useEffect(() => {
        clientesLista()
            .then(response => setClientes(response.data))
            .catch(error => console.log(error));
    })

    return (
        <div className={"container"}>
            <h1>Clientes</h1>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente =>
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellido}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.telefono}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
    )
}

export default ClientesLista;