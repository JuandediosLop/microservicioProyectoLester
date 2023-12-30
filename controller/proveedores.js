var conexion = require('../utils/conexion').pool;

exports.consultarProveedorNit = (request, response) => {
    var nit = request.params.nit;
    conexion.query('select nit, nombre, direccion, correo, telefono, id_estado from libreria.proveedor where nit = ?', nit, (error, result) => {
        if (error) {
            response.status(500).send({ error: 'Error al consultar el proveedor', details: error });
            // throw error;
        } else {
            if ((Array.isArray(result) && result.length === 0) || (typeof result === 'object' && Object.keys(result).length === 0)) {
                response.status(404).send({ message: 'Proveedor no encontrado' });
            } else {
                response.send({ message: 'Proveedor consultado correctamente', result });
            }
        }
    });
};

exports.consultarProveedorpd = (request, response) => {

    conexion.query('select id_proveedor, nit, nombre, direccion, correo, telefono, id_estado from libreria.proveedor',

        (error, result) => {
            if (error) {
                response.status(500).send({ error: 'Error al consultar el proveedor', details: error });

            } else {
                if ((Array.isArray(result) && result.length === 0) || (typeof result === 'object' && Object.keys(result).length === 0)) {
                    response.status(404).send({ message: 'Proveedor no encontrados' });
                } else {
                    response.send({ message: 'Proveedores consultados correctamente', result });
                }
            }
        });
};

exports.registrarProveedor = (request, response) => {
    let nit = request.body.nit;
    let nombre = request.body.nombre;
    let direccion = request.body.direccion;
    let correo = request.body.correo;
    let telefono = request.body.telefono;
    let id_estado = request.body.id_estado;

    conexion.query('insert into libreria.proveedor (nit, nombre, direccion, correo, telefono, id_estado) values (?,?,?,?,?,?)', [nit, nombre, direccion, correo, telefono, id_estado], (error, result) => {
        if (error) {
            response.status(500).send({ error: 'Error al registrar el proveedor', details: error });
            // throw error;

        } else {
            response.send({ message: 'Proveedor registrado correctamente', result });
        }
    });

};

exports.actualizarProveedor = (request, response) => {
    let nit = request.params.nit;
    let nombre = request.body.nombre;
    let direccion = request.body.direccion;
    let correo = request.body.correo;
    let telefono = request.body.telefono;

    conexion.query('UPDATE libreria.proveedor SET nombre = ?, direccion = ?, correo = ?, telefono = ?  where nit = ? ', [nombre, direccion, correo, telefono, nit], (error, result) => {
        if (error) {
            response.status(500).send({ error: 'Error al actualizar el proveedor', details: error });
            // throw error;
        } else {
            response.send({ message: 'Proveedor actualizado correctamente', result });
        }
    });
};

exports.eliminarProveedor = (request, response) => {
    let nit = request.params.nit;

    conexion.query('UPDATE libreria.proveedor SET id_estado = ? where nit = ? ', [2, nit], (error, result) => {
        if (error) {
            response.status(500).send({ error: 'Error al eliminar el proveedor', details: error });
        } else {
            response.send({ message: 'Proveedor eliminado correctamente', result });
        }
    });
};

exports.activarProveedor = (request, response) => {
    let nit = request.params.nit;

    conexion.query('UPDATE libreria.proveedor SET id_estado = ? where nit = ? ', [1, nit], (error, result) => {
        if (error) {
            response.status(500).send({ error: 'Error al activar el proveedor', details: error });
        } else {
            response.send({ message: 'Proveedor activado correctamente', result });
        }
    });
}