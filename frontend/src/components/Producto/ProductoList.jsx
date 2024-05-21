import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {deleteProducto, getProductos} from "../../services/productoService.js";

const ProductoList = () => {

    //------------------------------------------------------------------------------------------------------------------
    // CONSTANTES
    //------------------------------------------------------------------------------------------------------------------
    const [productos, setProductos] = useState([]);
    const navigator = useNavigate();

    //------------------------------------------------------------------------------------------------------------------
    // Obtener los clientes
    //------------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        getAllProductos();
    }, []);

    //------------------------------------------------------------------------------------------------------------------
    // FUNCIONES
    //------------------------------------------------------------------------------------------------------------------
    function getAllProductos() {
        getProductos().then((response) => {
            setProductos(response.data);
        }).catch(error => {
            console.error("Error al obtener los productos: ", error);
        })
    }

    function addProducto() {
        navigator("/productos/add")
    }

    function viewProducto(id) {
        navigator(`/productos/view/${id}`)
    }

    function removeProducto(id) {
        console.log("Eliminar producto con id: ", id);

        deleteProducto(id).then(() => {
            getAllProductos();
        }).catch(error => {
            console.error("Error al eliminar el producto: ", error);
        })
    }

    //------------------------------------------------------------------------------------------------------------------
    // HTML
    //------------------------------------------------------------------------------------------------------------------

    return (
        <div className={"container"}>
            <h1 className={"text-center text-primary fw-bold p-4"}>Clientes</h1>
            <button className="btn btn-primary mb-1" onClick={addProducto}>Nuevo Producto</button>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr className={"text-center"}>
                        <th>ID</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Unidad de Medida</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(producto =>
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.unidadmedida}</td>
                            <td>
                                <div className={"text-center"}>
                                    <button className="btn btn-info m-1" onClick={() => viewProducto(producto.id)}>Ver
                                    </button>
                                    <button className="btn btn-danger m-1"
                                            onClick={() => removeProducto(producto.id)}>Eliminar
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

export default ProductoList;