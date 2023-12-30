var conexion = require('../utils/conexion').pool;


/**
 * Metodo que consulta un contribuyente por Nit
 * @param {*} request 
 * @param {*} response 
 */
exports.consultarProductoId = (request, response) => {
    var id_producto = request.params.idproducto;
        conexion.query('select id_producto, descripcion, marca, existencias, precio_costo, precio_venta, id_estado, id_tipo_producto from proyectouvg.producto where id_producto = ?', id_producto, (error, result) => {
            if(error){
                throw error;
            } else{
                response.send(result);
            }
        });
};


exports.consultarProductopd = (request, response) => {
   
    conexion.query('select * from proyectouvg.producto',
   
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
 exports.crearProducto = (request, response) => {
    let id_producto = request.body.idproducto;
    let descripcion = request.body.descripcion;
    let existencias = request.body.existencias;
    let preciocosto = request.body.preciocosto;
    let precioventa= request.body.precioventa;
    let marca= request.body.marca;
    let idestado= request.body.idestado;
    let idtipoproducto = request.body.idtipoproducto;
    console.log(id_producto, descripcion, marca, existencias, preciocosto, precioventa, idestado, idtipoproducto)
    conexion.query('insert into proyectouvg.producto (id_producto, descripcion, marca, existencias, precio_costo, precio_venta, id_estado, id_tipo_producto) values (?,?,?,?,?,?,?,?,?,?)', [id_producto, descripcion, marca, existencias, preciocosto, precioventa, idestado, idtipoproducto], (error, result) => {
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
 exports.actualizarProducto = (request, response) => {
    let id_producto = request.params.idproducto;
    
    conexion.query('UPDATE proyectouvg.producto set ? where id_producto = ? ', [request.body, id_producto], (error, result) => {
        if(error){
            console.log("Algo anda mal")
            throw error;
        } else{
            console.log("Exitoso")
            response.send(true);
        }
    });
};



exports.eliminarProducto = (request, response) => {
    let idproducto = request.params.idproducto;
    
    conexion.query('DELETE FROM proyectouvg.producto  where id_producto = ? ', [idproducto,], (error, result) => {
        if(error){
            throw error;
        } else{
            
            response.send(true);
        }
    });
};