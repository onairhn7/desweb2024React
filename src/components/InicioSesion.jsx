import React from 'react'


export const InicioSesion = () => {
    return (
        <>
            <div className='container mt-5'>

            <form>
                <fieldset>
                    <legend>Registro de Usuarios</legend>

                    <div class="row">
                        <label for="staticNombreUsuario" class="col-sm-2 col-form-label">Nombre Usuario</label>
                        <div class="col-sm-10">
                            <input type="text" readonly="" class="form-control-plaintext" id="staticNombreUsuario" placeholder="Seleccione su Usuario" />
                        </div>
                    </div>

                    <div class="row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" placeholder="email@example.com" />
                        </div>
                    </div>

                    

                    <div class="row">
                        <label for="staticNombre" class="col-sm-2 col-form-label">Nombre</label>
                        <div class="col-sm-10">
                            <input type="text" readonly="" class="form-control-plaintext" id="staticNombre" placeholder="Escribe tu nombre" />
                        </div>
                    </div>

                    

                    <div class="row">
                        <label for="staticApellido" class="col-sm-2 col-form-label">Apellido</label>
                        <div class="col-sm-10">
                            <input type="text" readonly="" class="form-control-plaintext" id="staticApellido" placeholder="Ingrese su Apellido" />
                        </div>
                    </div>


                    <div class="row">
                        <label for="staticConstrasena" class="col-sm-2 col-form-label">Contrasena</label>
                        <div class="col-sm-10">
                            <input type="text" readonly="" class="form-control-plaintext" id="staticConstrasena" placeholder="Ingrese su Contrasena" />
                        </div>
                    </div>


                    <div class="row">
                        <label for="staticConfirmacionCon" class="col-sm-2 col-form-label">Contrasena</label>
                        <div class="col-sm-10">
                            <input type="text" readonly="" class="form-control-plaintext" id="staticConfirmacionCon" placeholder="Confirme su Contrasena" />
                        </div>
                    </div>


                    

                    <button type="submit" class="btn btn-primary w-100">Crear Usuario</button>
                </fieldset>
            </form>
            </div>

        </>
    )
}

