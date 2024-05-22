import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {addProducto, getProducto} from "../../services/productoService.js";

const Producto = () => {

    //------------------------------------------------------------------------------------------------------------------
    // CONSTANTES
    //------------------------------------------------------------------------------------------------------------------
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState('')
    const [unidadmedida, setUnidadmedida] = useState('')
    const [idactividad, setIdactividad] = useState('')

    const navigator = useNavigate();
    const {id} = useParams();
    const isDisabled = Boolean(id);

    const [errors, setErrors] = useState({
        descripcion: '',
        precio: '',
        unidadmedida: '',
        idactividad: ''
    })

    //------------------------------------------------------------------------------------------------------------------
    // USE EFFECT
    //------------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        if(id) {
            getProducto(id).then((response) => {
                setDescripcion(response.data.descripcion);
                setPrecio(response.data.precio);
                setUnidadmedida(response.data.unidadmedida);
                setIdactividad(response.data.idactividad);
            }).catch(error => {
                console.error("Error al obtener el producto: ", error);
            })
        }
    }, [id])

    //------------------------------------------------------------------------------------------------------------------
    // FUNCIONES
    //------------------------------------------------------------------------------------------------------------------
    function titulo() {
        if (id) {
            return <h1 className={"text-center card-header"}>Ver Producto</h1>;
        } else {
            return <h1 className={"text-center card-header"}>Nuevo Producto</h1>;
        }
    }

    function mostrarBotonGuardar()
    {
        if (id) {
            return null;
        } else {
            return <button className={"btn btn-primary me-2"} onClick={guardarProducto}>Guardar</button>;
        }
    }

    function guardarProducto(e) {
        e.preventDefault();

        if (validateForm()) {
            const producto = {descripcion, precio, unidadmedida, idactividad};
            console.log(producto);

            addProducto(producto).then(response => {
                console.log(response.data);
                navigator("/productos");
            }).catch((error) => {
                console.error("Error al guardar al producto: ", error);
            });
        }
    }

    function validateForm() {
        let valid = true;

        const errosCopy = {...errors};

        // Validaciones Descripcion
        if (descripcion.trim()){ errosCopy.descripcion = "";}
        else
        {
            errosCopy.descripcion = "La descripcion es obligatorio";
            valid = false;
        }

        // Validaciones Precio
        if (precio.trim()){ errosCopy.precio = "";}
        else
        {
            errosCopy.precio = "El precio es obligatorio";
            valid = false;
        }

        // Validaciones Unidad Medida
        if (unidadmedida.trim()){ errosCopy.unidadmedida = "";}
        else
        {
            errosCopy.unidadmedida = "La unidad de medida es obligatorio";
            valid = false;
        }

        // Validaciones Actividad
        if (idactividad.trim()){ errosCopy.idactividad = "";}
        else
        {
            errosCopy.idactividad = "La actividad es obligatorio";
            valid = false;
        }

        setErrors(errosCopy);
        return valid;
    }

    function volver() {
        navigator("/productos");
    }

    //------------------------------------------------------------------------------------------------------------------
    // HTML
    //------------------------------------------------------------------------------------------------------------------

    return (
        <div className={"container"}>
            <br/>
            <br/>
            <div className={"card col-md-6 offset-3"}>
                {titulo()}
                <div className={"card-body"}>
                    <form>
                        <div className={"mb-3"}>
                            <label htmlFor="descripcion" className={"form-label"}>Descripcion</label>
                            <input type="text" id="descripcion" value={descripcion} disabled={isDisabled}
                                   className={`form-control ${errors.descripcion ? 'is-invalid' : ''}`}
                                   onChange={(e) => setDescripcion(e.target.value)}/>
                            {errors.descripcion && <div className={"invalid-feedback"}>{errors.descripcion}</div>}
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor="precio" className={"form-label"}>Precio</label>
                            <input type="text" id="precio" disabled={isDisabled}
                                   className={`form-control ${errors.precio ? 'is-invalid' : ''}`}
                                   value={precio} onChange={(e) => setPrecio(e.target.value)}/>
                            {errors.precio && <div className={"invalid-feedback"}>{errors.precio}</div>}
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor="unidadmedida" className={"form-label"}>Unidad Medida</label>
                            <input type="text" id="unidadmedida" disabled={isDisabled}
                                   className={`form-control ${errors.unidadmedida ? 'is-invalid' : ''}`}
                                   value={unidadmedida} onChange={(e) => setUnidadmedida(e.target.value)}/>
                            {errors.unidadmedida && <div className={"invalid-feedback"}>{errors.unidadmedida}</div>}
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor="idactividad" className={"form-label"}>Actividad</label>
                            <input type="text" id="idactividad" disabled={isDisabled}
                                   className={`form-control ${errors.idactividad ? 'is-invalid' : ''}`}
                                   value={idactividad} onChange={(e) => setIdactividad(e.target.value)}/>
                            {errors.idactividad && <div className={"invalid-feedback"}>{errors.idactividad}</div>}
                        </div>
                        {mostrarBotonGuardar()}
                        <button className={"btn btn-secondary me-2"} onClick={volver}>Volver</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Producto;