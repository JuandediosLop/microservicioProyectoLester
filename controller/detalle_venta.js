const conexion = require('../utils/conexion').pool;

exports.consultarDetalleVenta = (request, response) => {
    let id_venta = request.params.id_venta;
    conexion.query('select id_detalle, id_venta, id_producto, cantidad, precio_unidad, total_producto, id_estado from libreria.detalle_venta where id_venta = ?',
        [id_venta], (error, result) => {
            if (error) {
                response.status(500).send({ error: 'Error al consultar el detalle de la venta', details: error });
            } else {
                if ((Array.isArray(result) && result.length === 0) || (typeof result === 'object' && Object.keys(result).length === 0)) {
                    response.status(404).send({ message: 'Detalle de venta no encontrado' });
                } else {
                    response.send({ message: 'Detalle de venta consultado correctamente', result });
                }
            }
        });
}
exports.consultarDetalleVentapd = (request, response) => {

    conexion.query('select id_detalle, id_venta, id_producto, cantidad, precio_unidad, total_producto, id_estado from libreria.detalle_venta',

        (error, result) => {
            if (error) {
                response.status(500).send({ error: 'Error al consultar el detalle de la venta', details: error });
            } else {
                if ((Array.isArray(result) && result.length === 0) || (typeof result === 'object' && Object.keys(result).length === 0)) {
                    response.status(404).send({ message: 'Detalle de venta no encontrado' });
                } else {
                    response.send({ message: 'Detalle de venta consultado correctamente', result });
                }
            }
        });
}

exports.registrarDetalleVenta = (request, response) => {
    let id_venta = request.body.id_venta;
    let id_producto = request.body.id_producto;
    let cantidad = request.body.cantidad;
    let precio_unidad = request.body.precio_unidad;
    let total_producto = request.body.total_producto;
    let id_estado = request.body.id_estado;

    conexion.query('insert into libreria.detalle_venta (id_venta, id_producto, cantidad, precio_unidad, total_producto, id_estado) values (?,?,?,?,?,?)', [id_venta, id_producto, cantidad, precio_unidad, total_producto, id_estado], (error, result) => {
        if (error) {
            response.status(500).send({ error: 'Error al registrar el detalle de la venta', details: error });
        } else {
            response.send({ message: 'Detalle de venta registrado correctamente', result });
        }
    });
}

exports.actualizarDetalleVenta = (request, response) => {
    let id_detalle = request.params.id_detalle;
    let id_venta = request.body.id_venta;
    let id_producto = request.body.id_producto;
    let cantidad = request.body.cantidad;
    let precio_unidad = request.body.precio_unidad;
    let total_producto = request.body.total_producto;
    let id_estado = request.body.id_estado;

    conexion.query('update libreria.detalle_venta set id_venta = ?, id_producto = ?, cantidad = ?, precio_unidad = ?, total_producto = ?, id_estado = ? where id_detalle = ?', [id_venta, id_producto, cantidad, precio_unidad, total_producto, id_estado, id_detalle], (error, result) => {
        if (error) {
            response.status(500).send({ error: 'Error al actualizar el detalle de la venta', details: error });
        } else {
            response.send({ message: 'Detalle de venta actualizado correctamente', result });
        }
    });
}

exports.eliminarDetalleVenta = (request, response) => {
    let id_detalle = request.params.id_detalle;
    conexion.query('UPDATE libreria.detalle_venta set id_estado = ? where id_detalle = ?', [2, id_detalle], (error, result) => {
        if (error) {
            response.status(500).send({ error: 'Error al eliminar el detalle de la venta', details: error });
        } else {
            response.send({ message: 'Detalle de venta eliminado correctamente', result });
        }
    });
}

exports.activarDetalleVenta = (request, response) => {
    let id_detalle = request.params.id_detalle;
    conexion.query('UPDATE libreria.detalle_venta set id_estado = ? where id_detalle = ?', [1, id_detalle], (error, result) => {
        if (error) {
            response.status(500).send({ error: 'Error al activar el detalle de la venta', details: error });
        } else {
            response.send({ message: 'Detalle de venta activado correctamente', result });
        }
    });
}