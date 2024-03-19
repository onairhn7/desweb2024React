import { useState } from "react";
import axios from 'axios';


export const InicioSesion = () => {

    const [dataForm, setDataForm] = useState({
        nombre_usuario: "",
        pass: ""
    });

    const [InicioSesion, setInicioSesion] = useState("");

    const onChangeHandler = (event) => {

        const { name, value } = event.target;

        setDataForm({ ...dataForm, [name]: value });



    }



    const submitHandler = async () => {

        event.preventDefault();

        const url = `http://localhost:4500/api/usuario/auth/${dataForm.nombre_usuario}/${dataForm.pass}`;





        try {
            const result = await axios.get(url);
            const resultData = (await result).data;
            setInicioSesion("inicio de Sesion Exitoso")


        } catch (err) {

            setInicioSesion("erroeno")
        }

    }


    return (

        <>
            <div className='container mt-5'>

                <form onSubmit={submitHandler} >
                    <fieldset>
                        <legend>Inicio Sesion</legend>

                        <div className="row">
                            <label className="col-sm-2 col-form-label">Usuario</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" name="nombre_usuario" onChange={onChangeHandler} />
                            </div>
                        </div>

                        <div className="row">
                            <label className="col-sm-2 col-form-label">Contrasena</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control-plaintext" name="pass" onChange={onChangeHandler} />
                            </div>
                        </div>


                        <button type="submit" className="btn btn-primary w-100">Iniciar Sesion</button>
                    </fieldset>
                </form>
                <div>{InicioSesion}</div>
            </div>
        </>
    )


}