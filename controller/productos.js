var conexion = require('../utils/conexion').pool;


/**
 * Metodo que consulta un contribuyente por Nit
 * @param {*} request 
 * @param {*} response 
 */
exports.consultarProductoId = (request, response) => {
    var id_producto = request.params.id_producto;
    conexion.query('select id_producto, nombre, descripcion, existencias, precio_costo, precio_venta, id_sucursal, id_proveedor, id_estado from libreria.producto where id_producto = ?', id_producto, (error, result) => {
        if (error) {
            response.status(500).send({ error: 'Error al consultar el producto', details: error });
        } else {
            //verificar que no venga vacio
            if ((Array.isArray(result) && result.length === 0) || (typeof result === 'object' && Object.keys(result).length === 0)) {
                response.status(404).send({ message: 'Producto no encontrado' });
            } else {
                response.send({ message: 'Producto consultado correctamente', result });
            }

        }
    });
};

exports.consultarProductopd = (request, response) => {

    conexion.query('select * from libreria.producto',

        (error, result) => {
            if (error) {
                response.status(500).send({ error: 'Error al consultar el producto', details: error });
            } else {
                if ((Array.isArray(result) && result.length === 0) || (typeof result === 'object' && Object.keys(result).length === 0)) {
                    response.status(404).send({ message: 'Producto no encontrados' });
                } else {
                    response.send({ message: 'Productos consultados correctamente', result });
                }
            }
        });
};

/**
 * Metodo que consulta un contribuyente por Nit
 * @param {*} request 
 * @param {*} response 
 */
exports.registrarProducto = (request, response) => {
    let nombre = request.body.nombre;
    let descripcion = request.body.descripcion;
    let existencias = request.body.existencias;
    let precio_costo = request.body.precio_costo;
    let precio_venta = request.body.precio_venta;
    let id_sucursal = request.body.id_sucursal;
    let id_proveedor = request.body.id_proveedor;
    let id_estado = request.body.id_estado;

    conexion.query('insert into libreria.producto (nombre, descripcion, existencias, precio_costo, precio_venta, id_sucursal, id_proveedor, id_estado) values (?,?,?,?,?,?,?,?)', [nombre, descripcion, existencias, precio_costo, precio_venta, id_sucursal, id_proveedor, id_estado], (error, result) => {
        if (error) {
            response.status(500).send({ error: 'Error al registrar el producto', details: error });

        } else {
            response.send({ message: 'Producto registrado correctamente', result: result });
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
    let id_producto = request.params.id_producto;
    let nombre = request.body.nombre;
    let descripcion = request.body.descripcion;
    let existencias = request.body.existencias;
    let precio_costo = request.body.precio_costo;
    let precio_venta = request.body.precio_venta;
    let id_sucursal = request.body.id_sucursal;
    let id_proveedor = request.body.id_proveedor;
    let id_estado = request.body.id_estado;

    conexion.query('UPDATE libreria.producto SET nombre = ?, descripcion = ?, existencias = ?, precio_costo = ?, precio_venta = ?, id_sucursal = ?, id_proveedor = ?, id_estado = ? where id_producto = ? ', [nombre, descripcion, existencias, precio_costo, precio_venta, id_sucursal, id_proveedor, id_estado, id_producto], (error, result) => {
        if (error) {
            response.status(500).send({ error: 'Error al actualizar el producto', details: error });
        }
        else {
            response.send({ message: 'Producto actualizado correctamente', result });
        }
    }
    );

};


exports.eliminarProducto = (request, response) => {
    let id_producto = request.params.id_producto;

    conexion.query('UPDATE libreria.producto SET id_estado = ? where id_producto = ? ', [2, id_producto], (error, result) => {
        if (error) {
            response.status(500).send({ error: 'Error al eliminar el producto', details: error });
        } else {

            response.send({ message: 'Producto eliminado correctamente', result })
        }
    });
};

exports.activarProducto = (request, response) => {
    let id_producto = request.params.id_producto;

    conexion.query('UPDATE libreria.producto SET id_estado = ? where id_producto = ? ', [1, id_producto], (error, result) => {
        if (error) {
            response.status(500).send({ error: 'Error al activar el producto', details: error });
        } else {

            response.send({ message: 'Producto activado correctamente', result });
        }
    });
};