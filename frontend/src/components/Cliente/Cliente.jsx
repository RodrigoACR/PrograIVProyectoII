import {useEffect, useState} from "react";
import {addCliente, getCliente} from "../../services/clienteService.js";
import {useNavigate, useParams} from "react-router-dom";
import InputMask from "react-input-mask";

const Cliente = () => {

    //------------------------------------------------------------------------------------------------------------------
    // CONSTANTES
    //------------------------------------------------------------------------------------------------------------------
    const [nombre, setNombre] = useState('')
    const [tipoIdentificacion, setTipoIdentificacion] = useState('')
    const [numeroIdentificacion, setNumeroIdentificacion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correoElectronico, setCorreoElectronico] = useState('')

    const navigator = useNavigate();
    const {id} = useParams();
    const isDisabled = Boolean(id);

    const [errors, setErrors] = useState({
        nombre: '',
        tipoIdentificacion: '',
        numeroIdentificacion: '',
        telefono: '',
        correoElectronico: ''
    })

    //Expresión regular para validar correo electrónico
    const validateEmail = (email) => {
        // Expresión regular para validar correo electrónico
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    //------------------------------------------------------------------------------------------------------------------
    // USE EFFECT
    //------------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        if(id) {
            getCliente(id).then((response) => {
                setNombre(response.data.nombre);
                setTipoIdentificacion(response.data.tipoIdentificacion);
                setNumeroIdentificacion(response.data.numeroIdentificacion);
                setTelefono(response.data.telefono);
                setCorreoElectronico(response.data.correoElectronico);
            }).catch(error => {
                console.error("Error al obtener el cliente: ", error);
            })
        }
    }, [id])

    //------------------------------------------------------------------------------------------------------------------
    // FUNCIONES
    //------------------------------------------------------------------------------------------------------------------
    function titulo() {
        if (id) {
            return <h1 className={"text-center card-header"}>Ver Cliente</h1>;
        } else {
            return <h1 className={"text-center card-header"}>Nuevo Cliente</h1>;
        }
    }

    function mostrarBotonGuardar()
    {
        if (id) {
            return null;
        } else {
            return <button className={"btn btn-primary me-2"} onClick={guardarCliente}>Guardar</button>;
        }
    }

    function guardarCliente(e) {
        e.preventDefault();

        if (validateForm()) {
            const cliente = {nombre, tipoIdentificacion, numeroIdentificacion, telefono, correoElectronico}
            console.log(cliente);

            addCliente(cliente).then(response => {
                console.log(response.data);
                navigator("/clientes");
            }).catch((error) => {
                console.error("Error al guardar el cliente: ", error);
            });
        }
    }

    function validateForm() {
        let valid = true;

        const errosCopy = {...errors};

        // Validaciones Nombre
        if (nombre.trim()){ errosCopy.nombre = "";}
        else
        {
            errosCopy.nombre = "El nombre es obligatorio";
            valid = false;
        }

        // Validaciones Tipo de Identificación
        if (tipoIdentificacion.trim()){ errosCopy.tipoIdentificacion = "";}
        else
        {
            errosCopy.tipoIdentificacion = "El tipo de identificación es obligatorio";
            valid = false;
        }


        if (numeroIdentificacion.trim()){ errosCopy.numeroIdentificacion = "";}
        else
        {
            errosCopy.numeroIdentificacion = "El número de identificación es obligatorio";
            valid = false;
        }

        // Validaciones de Telefono
        if (telefono.trim()){ errosCopy.telefono = "";}
        else
        {
            errosCopy.telefono = "El teléfono es obligatorio";
            valid = false;
        }

        // Validaciones del Email
        if (correoElectronico.trim()){ errosCopy.correoElectronico = "";}
        else
        {
            errosCopy.correoElectronico = "El correo electrónico es obligatorio";
            valid = false;
        }
        if (validateEmail(correoElectronico)) {errosCopy.correoElectronico="";}
        else {
            errosCopy.correoElectronico = "El correo electrónico no es valido";
            valid = false;
        }

        setErrors(errosCopy);
        return valid;
    }

    function volver() {
        navigator("/clientes");
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
                            <label htmlFor="nombre" className={"form-label"}>Nombre</label>
                            <input type="text" id="nombre" value={nombre} disabled={isDisabled} className={`form-control ${errors.nombre ? 'is-invalid':''}`}
                                   onChange={(e) => setNombre(e.target.value)}/>
                            {errors.nombre && <div className={"invalid-feedback"}>{errors.nombre}</div>}
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor="tipoIdentificacion" className={"form-label"}>Tipo de Identificación</label>
                            <select value={tipoIdentificacion} id="tipoIdentificacion" disabled={isDisabled}
                                    className={`form-control ${errors.tipoIdentificacion ? 'is-invalid' : ''}`}
                                    onChange={(e) => setTipoIdentificacion(e.target.value)}>
                                <option value="">Seleccione un Tipo de Identificacion</option>
                                <option value="Fisica">Fisica</option>
                                <option value="Juridica">Juridica</option>
                            </select>
                            {errors.tipoIdentificacion && <div className={"invalid-feedback"}>{errors.tipoIdentificacion}</div>}
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor="numeroIdentificacion" className={"form-label"}>Número de
                                Identificación</label>
                            <InputMask type="text" id="numeroIdentificacion" disabled={isDisabled} className={`form-control ${errors.numeroIdentificacion ? 'is-invalid':''}`}
                                   value={numeroIdentificacion} mask={tipoIdentificacion === 'Juridica' ? '9-999-999999' : '9-9999-9999'}
                                   onChange={(e) => setNumeroIdentificacion(e.target.value)}/>
                            {errors.numeroIdentificacion && <div className={"invalid-feedback"}>{errors.numeroIdentificacion}</div>}
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor="telefono" className={"form-label"}>Teléfono</label>
                            <InputMask type="text" id="telefono" value={telefono} disabled={isDisabled} mask={"9999-9999"} className={`form-control ${errors.telefono ? 'is-invalid':''}`}
                                       onChange={(e) => setTelefono(e.target.value)}></InputMask>
                            {errors.telefono && <div className={"invalid-feedback"}>{errors.telefono}</div>}
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor="correoelectronico" className={"form-label"}>Correo Electrónico</label>
                            <input type="email" id="correoelectronico" value={correoElectronico} disabled={isDisabled} placeholder={"ejemplo@micorreo.com"} required className={`form-control ${errors.correoElectronico ? 'is-invalid':''}`}
                                   onChange={(e) => setCorreoElectronico(e.target.value)}/>
                            {errors.correoElectronico && <div className={"invalid-feedback"}>{errors.correoElectronico}</div>}
                        </div>
                        {mostrarBotonGuardar()}
                        <button className={"btn btn-secondary me-2"} onClick={volver}>Volver</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Cliente;