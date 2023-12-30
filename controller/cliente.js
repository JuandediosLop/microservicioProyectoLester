const conexion= require('../utils/conexion').pool;

/* metodo que consulta un ususario por login */

/**
 * Metodo que registra un nuevo usuario
 * @param {*} request 
 * @param {*} response 
 */
 exports.registrarCliente = (request, response) => {
    let nombre = request.body.nombres;
    let apellido = request.body.apellidos;
    let telefono = request.body.numero;
    let Genero = request.body.genero;
    let edad = request.body.edad;
    let direccion = request.body.direccion;
    let DPI = request.body.dpi;
    let fechaNac = request.body.fechaNac;
    let correo = request.body.correo;
    let idEstado = request.body.estado;

    conexion.query('insert into proyectouvg.cliente (nombre, apellido,dpi, telefono,edad,genero,correo,direccion,fecha_nacimiento,id_estado) values (?,?,?,?,?,?,?,?,?,?)', [nombre, apellido,DPI,telefono,edad,Genero,correo,direccion,fechaNac, idEstado], (error, result) => {
        if(error){
        // throw error;
           response.send(result);
        } else{
 //  response.send('Usuario creado correctamente');
 response.send(result);
        }
    });
};



exports.consultarCliente = (request, response) => {
    let DPI = request.params.dpi;
    conexion.query('select nombre, apellido,dpi,telefono,edad,genero,correo,direccion,fecha_nacimiento,id_estado from proyectouvg.cliente where dpi = ?',
     [DPI], (error, result) => {
        if(error){
       //  throw error;
         response.send(result);
        } else{
            response.send(result);
        }
    });
};

exports.actualizarCliente = (request, response) => {
    let nombre = request.body.nombres;
    let apellido = request.body.apellidos;
    let telefono = request.body.numero;
    let Genero = request.body.genero;
    let edad = request.body.edad;
    let direccion = request.body.direccion;
    let DPI = request.body.dpi;
    let fechaNac = request.body.fechaNac;
    let correo = request.body.correo;
    let idEstado = request.body.estado;
    conexion.query('UPDATE proyectouvg.cliente SET nombre = ?,apellido = ?,telefono = ?,edad = ?,genero = ?,correo = ?,direccion = ?,fecha_nacimiento = ?,id_estado = ? WHERE dpi = ?', [nombre, apellido,telefono,edad,Genero,correo,direccion,fechaNac, idEstado,DPI], (error, result) => {
        if(error){
       //     throw error;
           response.send(result);
        } else{
 //  response.send('Usuario creado correctamente');
 response.send(result);
        }
    });
};


exports.consultarClientepd = (request, response) => {
   
    conexion.query('select nit_cliente, nombre, apellido,  telefono, edad, genero, correo, direccion,fecha_nacimiento,id_estado from proyectouvg.cliente',
   
    (error, result) => {
        if(error){
         throw error;
      //   response.send(result);
        } else{
            response.send(result);
        }
    });
};

exports.eliminarCliente = (request, response) => {
    let DPI = request.body.dpi;//importante
    conexion.query('DELETE from proyectouvg.cliente WHERE dpi = ?', [DPI], (error, result) => {
        if(error){
         //   throw error;
           response.send(result);
        } else{
 //  response.send('Usuario creado correctamente');
 response.send(result);
        }
    });

}