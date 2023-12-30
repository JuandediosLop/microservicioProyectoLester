const conexion = require('../utils/conexion').pool;

exports.consultarVenta = (request, response) => {
    let id_venta = request.params.id_venta;
    conexion.query('select id_venta, fecha_venta, nit_cliente, total_venta, id_sucursal, metodo_pago, id_estado from libreria.venta where id_venta = ?',
        [id_venta], (error, result) => {
            if (error) {
                response.status(500).send({ error: 'Error al consultar la venta', details: error });
            } else {
                if ((Array.isArray(result) && result.length === 0) || (typeof result === 'object' && Object.keys(result).length === 0)) {
                    response.status(404).send({ message: 'Venta no encontrada' });
                } else {
                    response.send({ message: 'Venta consultada correctamente', result });
                }
            }
        });
};

exports.consultarVentapd = (request, response) => {

    conexion.query('select id_venta, fecha_venta, nit_cliente, total_venta, id_sucursal, metodo_pago, id_estado from libreria.venta',

        (error, result) => {
            if (error) {
                response.status(500).send({ error: 'Error al consultar la venta', details: error });
            } else {
                if ((Array.isArray(result) && result.length === 0) || (typeof result === 'object' && Object.keys(result).length === 0)) {
                    response.status(404).send({ message: 'Ventas no encontradas' });
                } else {
                    response.send({ message: 'Ventas consultadas correctamente', result });
                }
            }
        });
};

exports.registrarVenta = (request, response) => {
    let fecha_venta = request.body.fecha_venta;
    let nit_cliente = request.body.nit_cliente;
    let total_venta = request.body.total_venta;
    let id_sucursal = request.body.id_sucursal;
    let metodo_pago = request.body.metodo_pago;
    let id_estado = request.body.id_estado;

    conexion.query('insert into libreria.venta (fecha_venta, nit_cliente, total_venta, id_sucursal, metodo_pago, id_estado) values (?,?,?,?,?,?)', [fecha_venta, nit_cliente, total_venta, id_sucursal, metodo_pago, id_estado], (error, result) => {
        if (error) {
            response.status(500).send({ error: 'Error al registrar la venta', details: error });
        } else {
            response.send({ message: 'Venta registrada correctamente', result });
        }
    });
}

exports.actualizarVenta = (request, response) => {
    let id_venta = request.params.id_venta;
    let fecha_venta = request.body.fecha_venta;
    let nit_cliente = request.body.nit_cliente;
    let total_venta = request.body.total_venta;
    let id_sucursal = request.body.id_sucursal;
    let metodo_pago = request.body.metodo_pago;
    let id_estado = request.body.id_estado;

    conexion.query('update libreria.venta set fecha_venta = ?, nit_cliente = ?, total_venta = ?, id_sucursal = ?, metodo_pago = ?, id_estado = ? where id_venta = ?', [fecha_venta, nit_cliente, total_venta, id_sucursal, metodo_pago, id_estado, id_venta], (error, result) => {
        if (error) {
            response.status(500).send({ error: 'Error al actualizar la venta', details: error });
        } else {
            response.send({ message: 'Venta actualizada correctamente', result });
        }
    });
}

exports.eliminarVenta = (request, response) => {
    let id_venta = request.params.id_venta;

    conexion.query('update libreria.venta set id_estado = 2 where id_venta = ?', [id_venta], (error, result) => {
        if (error) {
            response.status(500).send({ error: 'Error al eliminar la venta', details: error });
        } else {
            response.send({ message: 'Venta eliminada correctamente', result });
        }
    });
}

exports.activarVenta = (request, response) => {
    let id_venta = request.params.id_venta;

    conexion.query('update libreria.venta set id_estado = 1 where id_venta = ?', [id_venta], (error, result) => {
        if (error) {
            response.status(500).send({ error: 'Error al activar la venta', details: error });
        } else {
            response.send({ message: 'Venta activada correctamente', result });
        }
    });
}