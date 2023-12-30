const conexion= require('../utils/conexion').pool;

/* metodo que consulta un ususario por login */

/**
 * Metodo que registra un nuevo usuario
 * @param {*} request 
 * @param {*} response 
 */
 exports.registrarUsuario = (request, response) => {
    let login = request.body.usuario;//importante
    let pass = request.body.clave;
    let nombre = request.body.nombres;
    let apellido = request.body.apellidos;
    let idRol = request.body.rol;
    let idEstado = request.body.estado;
    conexion.query('insert into proyectouvg.usuario (login_name, password, nombre, apellido, id_rol, id_estado) values (?,?,?,?,?,?)', [login, pass, nombre, apellido, idRol, idEstado], (error, result) => {
        if(error){
           // throw error;
           response.send(result);
        } else{
 //  response.send('Usuario creado correctamente');
 response.send(result);
        }
    });
};


/**
 * Metodo que consulta un usuario por Login
 * @param {*} request 
 * @param {*} response 
 */
 exports.consultarUsuarioLogin = (request, response) => {
    let loginName = request.params.login;
    let password =  request.params.pass;
    conexion.query('select login_name, password, nombre, apellido, id_rol, id_estado from proyectouvg.usuario where login_name = ? and password= ? and id_estado = 1',
     [loginName,password], (error, result) => {
        if(error){
       //  throw error;
         response.send(result);
        } else{
            response.send(result);
        }
    });
};


/**
 * Metodo que consulta los usuarios del sistema
 * @param {*} request 
 * @param {*} response 
 */
 exports.consultarUsuario = (request, response) => {
    let loginName = request.params.login;
    conexion.query('select login_name, password, nombre, apellido, id_rol, id_estado from proyectouvg.usuario where login_name = ?',
    [loginName], (error, result) => {
        if(error){
      //      throw error;
            response.send(result);
        } else{
            response.send(result);
        }
    });
};

exports.actualizarUsuario = (request, response) => {
    let login = request.body.usuario;//importante
    let pass = request.body.clave;
    let nombre = request.body.nombres;
    let apellido = request.body.apellidos;
    let idRol = request.body.rol;
    let idEstado = request.body.estado;
    conexion.query('UPDATE proyectouvg.usuario SET password = ?,nombre = ?,apellido = ?,id_rol = ?,id_estado = ? WHERE login_name = ?', [pass, nombre, apellido, idRol, idEstado,login], (error, result) => {
        if(error){
      //      throw error;
           response.send(result);
        } else{
 //  response.send('Usuario creado correctamente');
 response.send(result);
        }
    });
};



exports.consultarUsuariopd = (request, response) => {
   
    conexion.query('select login_name, password, nombre,  apellido, id_rol, id_estado from proyectouvg.usuario',
   
    (error, result) => {
        if(error){
         throw error;
      //   response.send(result);
        } else{
            response.send(result);
        }
    });
};

exports.eliminarUsuario = (request, response) => {
    let login = request.body.usuario;//importante
    conexion.query('DELETE from proyectouvg.usuario WHERE login_name = ?', [login], (error, result) => {
        if(error){
      ///      throw error;
        response.send(result);
        } else{
 //  response.send('Usuario creado correctamente');
 response.send(result);
        }
    });

}