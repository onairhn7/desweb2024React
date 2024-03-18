import React from 'react'


export const InicioSesion = () =>{
    return(
        <>
        <div className='container mt-5' >
            <form onSubmit={submitHandler} >
                <fieldset>
                    <legend>Inicio Sesion</legend>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Contraseña</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control-plaintext"
                                name="pass"
                                onChange={onChangeHandler} />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Iniciar Sesion</button>
                </fieldset>
            </form>
            <div> {inicioSesion} </div>
        </div>
    </>
    )
}

