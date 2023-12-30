const conexion= require('../utils/conexion').pool;

/**
 * Metodo que registra un nueva sucursal
 * @param {*} request 
 * @param {*} response 
 */

exports.registrarSucursal = (request, response) => {
    let nombre = request.body.nombres;//importante
    let descrip = request.body.descripcion;
    let direcci = request.body.direccion;
    let num = request.body.numero;
    let corre = request.body.correo;
    let idEstado = request.body.estado;

    conexion.query('insert into proyectouvg.sucursal (id_sucursal, descripcion, direccion, telefono, correo, id_estado) values (?,?,?,?,?,?)', [nombre, descrip, direcci, num, corre, idEstado], (error, result) => {
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
 * Metodo que consulta las sucursales del sistema
 * @param {*} request 
 * @param {*} response 
 */
 exports.consultarSucursal = (request, response) => {
    let nombresucursal = request.params.nsucursal;
    
                           
    conexion.query('select id_sucursal, descripcion, direccion,  telefono, correo, id_estado from proyectouvg.sucursal where id_sucursal = ?',
    [nombresucursal], (error, result) => {
        if(error){
      //      throw error;
            response.send(result);
        } else{
            response.send(result);
        }
    });
};

exports.actualizarSucursal = (request, response) => {
    let nombre = request.body.nombres;//importante
    let descrip = request.body.descripcion;
    let direcci = request.body.direccion;
    let num = request.body.numero;
    let corre = request.body.correo;
    let idEstado = request.body.estado;

                   
    conexion.query('UPDATE proyectouvg.sucursal SET descripcion = ?,direccion = ?,telefono = ?,correo = ?,id_estado = ? WHERE id_sucursal = ?', [descrip,  direcci, num, corre, idEstado, nombre], (error, result) => {
        if(error){
      //      throw error;
           response.send(result);
        } else{
 //  response.send('Usuario creado correctamente');
 response.send(result);
        }
    });
};


exports.consultarSucursalpd = (request, response) => {
   
    conexion.query('select id_sucursal, descripcion, direccion,  telefono, correo, id_estado from proyectouvg.sucursal',
   
    (error, result) => {
        if(error){
         throw error;
      //   response.send(result);
        } else{
            response.send(result);
        }
    });
};


exports.eliminarSucursal = (request, response) => {
    let nsucursal = request.body.nombres;//importante
    conexion.query('DELETE from proyectouvg.sucursal WHERE id_sucursal = ?', [nsucursal], (error, result) => {
        if(error){
      ///      throw error;
        response.send(result);
        } else{
 //  response.send('Usuario creado correctamente');
 response.send(result);
        }
    });

}