import { useState } from "react";
import axios from "axios";


export const Registro = () => {


    // logica de la vista

    const url = 'http://localhost:4500/api/usuario'

    //hooks, enlaza la vista con el con el contenido html

    const [usuario, setUsuario] = useState();

    const [correo, setCorreo] = useState();

    const [nombre, setNombre] = useState();

    const [apellido, setApellido] = useState();

    const [pass, setPass] = useState();

    const [passConfirm, setPassConfirm] = useState();


    //manejador del usuario

    const usuarioHandler = (event) => {

        const { name, value } = event.target;

        setUsuario(value);

    }

    //manejador del correo

    const correoHandler = (event) => {

        const { name, value } = event.target;

        setCorreo(value);

    }


    //manejador del correo

    const nombreHandler = (event) => {

        const { name, value } = event.target;

        setNombre(value);

    }


    //manejador del correo

    const apellidoHandler = (event) => {

        const { name, value } = event.target;

        setApellido(value);

    }


    //manejador del correo

    const passHandler = (event) => {

        const { name, value } = event.target;

        setPass(value);

    }


    //manejador del correo

    const passConfirmHandler = (event) => {

        const { name, value } = event.target;

        setPassConfirm(value);

    }

    // para que no se pierda info cuando se refresque la pagina

    const submitHandler = async () => {

        event.preventDefault();

        const data = {

            nombre_usuario: usuario,
            correo_electronico: correo,
            contrasena: pass,
            nombre: nombre,
            apellido: apellido,
            confirmacion_con: passConfirm
        }

        const result = await axios.post(url, data);
        const resultData = (await result).data;

        console.log(result);
        console.log(resultData);


    }




    // esto renderiza el navegador
    return (
        <>
            <div className='container mt-5'>

                <form onSubmit={submitHandler}>
                    <fieldset>
                        <legend>Registro de Usuarios</legend>

                        <div className="row">
                            <label  className="col-sm-2 col-form-label">Nombre Usuario</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" name="usuario" placeholder="Seleccione su Usuario" onChange={usuarioHandler} />
                            </div>
                        </div>

                        <div className="row">
                            <label  className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" name="correo" placeholder="email@example.com" onChange={correoHandler} />
                            </div>
                        </div>



                        <div className="row">
                            <label  className="col-sm-2 col-form-label">Nombre</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" name="nombre" placeholder="Escribe tu nombre" onChange={nombreHandler} />
                            </div>
                        </div>



                        <div className="row">
                            <label  className="col-sm-2 col-form-label">Apellido</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" name="apellido" placeholder="Ingrese su Apellido" onChange={apellidoHandler} />
                            </div>
                        </div>


                        <div className="row">
                            <label  className="col-sm-2 col-form-label">Contrasena</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" name="pass" placeholder="Ingrese su Contrasena" onChange={passHandler} />
                            </div>
                        </div>


                        <div className="row">
                            <label  className="col-sm-2 col-form-label">Contrasena</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" name="passConfirm" placeholder="Confirme su Contrasena" onChange={passConfirmHandler} />
                            </div>
                        </div>




                        <button type="submit" className="btn btn-primary w-100">Crear Usuario</button>
                    </fieldset>
                </form>
            </div>

        </>
    )
}

