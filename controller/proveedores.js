var conexion = require('../utils/conexion').pool;


/**
 * Metodo que consulta un contribuyente por Nit
 * @param {*} request 
 * @param {*} response 
 */
exports.consultarProveedorNit = (request, response) => {
    var nit = request.params.nit;
        conexion.query('select nit_proveedor, nombre, apellido, direccion, telefono, correo, id_estado from proyectouvg.proveedor where nit_proveedor = ?', nit, (error, result) => {
            if(error){
                throw error;
            } else{
                response.send(result);
            }
        });
};
exports.consultarProveedorpd = (request, response) => {
   
    conexion.query('select * from proyectouvg.proveedor',
   
    (error, result) => {
        if(error){
         throw error;
      //   response.send(result);
        } else{
            response.send(result);
        }
    });
};

/**
 * Metodo que consulta un contribuyente por Nit
 * @param {*} request 
 * @param {*} response 
 */
 exports.crearProveedor = (request, response) => {
    let nit = request.body.nit;
    let nombre = request.body.nombre;
    let apellido = request.body.apellido;
    let direccion = request.body.direccion;
    let correo = request.body.correo;
    let telefono = request.body.telefono;
    console.log(nit, nombre, apellido, direccion)
    conexion.query('insert into proyectouvg.proveedor (nit_proveedor, nombre, apellido, direccion, correo, telefono) values (?,?,?,?,?,?)', [nit, nombres, apellidos, direccion, correo, telefono], (error, result) => {
        if(error){
            response.send(false);
            throw error;
            
        } else{
            response.send(true);
        }
    });
};

//update games set? where id = ?
/**
 * Metodo que consulta un contribuyente por Nit
 * @param {*} request 
 * @param {*} response 
 */
 exports.actualizarProveedor = (request, response) => {
    let nit = request.params.nit;
    
    conexion.query('UPDATE proyectouvg.proveedor set ? where nit_proveedor = ? ', [request.body, nit], (error, result) => {
        if(error){
            console.log("Algo anda mal")
            throw error;
        } else{
            console.log("Exitoso")
            response.send(true);
        }
    });
};



exports.eliminarProveedor = (request, response) => {
    let nit = request.params.nit;
    
    conexion.query('DELETE FROM cyatv.contribuyente where nit = ? ', [nit,], (error, result) => {
        if(error){
            throw error;
        } else{
            
            response.send(true);
        }
    });
};