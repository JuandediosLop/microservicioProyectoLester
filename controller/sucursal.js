const conexion = require('../utils/conexion').pool;

/**
 * Metodo que registra un nueva sucursal
 * @param {*} request 
 * @param {*} response 
 */

exports.consultarSucursal = (request, response) => {
    let id_sucursal = request.params.id_sucursal;


    conexion.query('select id_sucursal, nombre, direccion, correo, telefono, id_estado from libreria.sucursal where id_sucursal = ?',
        [id_sucursal], (error, result) => {
            if (error) {
                //      throw error;
                response.status(500).send({ error: 'Error al consultar la sucursal', details: error });
            } else {
                if ((Array.isArray(result) && result.length === 0) || (typeof result === 'object' && Object.keys(result).length === 0)) {
                    response.status(404).send({ message: 'Sucursal no encontrada' });
                } else {
                    response.send({ message: 'Sucursal consultada correctamente', result });
                }
            }
        });
};
exports.consultarSucursalpd = (request, response) => {

    conexion.query('select * from libreria.sucursal',

        (error, result) => {
            if (error) {
                response.status(500).send({ error: 'Error al consultar la sucursal', details: error });
                //   response.send(result);
            } else {
                if ((Array.isArray(result) && result.length === 0) || (typeof result === 'object' && Object.keys(result).length === 0)) {
                    response.status(404).send({ message: 'Sucursales no encontradas' });
                } else {
                    response.send({ message: 'Sucursales consultadas correctamente', result });
                }
            }
        });
};

exports.registrarSucursal = (request, response) => {
    let nombre = request.body.nombre;//importante
    let direccion = request.body.direccion;
    let correo = request.body.correo;
    let telefono = request.body.telefono;
    let id_estado = request.body.id_estado;

    conexion.query('insert into libreria.sucursal (nombre, direccion, correo, telefono, id_estado) values (?,?,?,?,?)', [nombre, direccion, correo, telefono, id_estado], (error, result) => {
        if (error) {
            // throw error;
            response.status(500).send({ error: 'Error al registrar la sucursal', details: error });
        } else {
            //  response.send('Usuario creado correctamente');
            response.send({ message: 'Sucursal creada correctamente', result });
        }
    });
};

exports.actualizarSucursal = (request, response) => {
    let id_sucursal = request.params.id_sucursal;//importante
    let nombre = request.body.nombre;//importante
    let direccion = request.body.direccion;
    let correo = request.body.correo;
    let telefono = request.body.telefono;
    let id_estado = request.body.id_estado;


    conexion.query('UPDATE libreria.sucursal SET nombre = ?, direccion = ?, correo = ?, telefono = ?, id_estado = ? WHERE id_sucursal = ?', [nombre, direccion, correo, telefono, id_estado, id_sucursal], (error, result) => {
        if (error) {
            //      throw error;
            response.status(500).send({ error: 'Error al actualizar la sucursal', details: error });
        } else {
            //  response.send('Usuario creado correctamente');
            response.send({ message: 'Sucursal actualizada correctamente', result });
        }
    });
};

exports.eliminarSucursal = (request, response) => {
    let id_sucursal = request.params.id_sucursal;//importante
    conexion.query('UPDATE libreria.sucursal SET id_estado = ? WHERE id_sucursal = ?', [2, id_sucursal], (error, result) => {
        if (error) {
            ///      throw error;
            response.status(500).send({ error: 'Error al eliminar la sucursal', details: error });
        } else {
            //  response.send('Usuario creado correctamente');
            response.send({ message: 'Sucursal eliminada correctamente', result });
        }
    });

}

exports.activarSucursal = (request, response) => {
    let id_sucursal = request.params.id_sucursal;//importante
    conexion.query('UPDATE libreria.sucursal SET id_estado = ? WHERE id_sucursal = ?', [1, id_sucursal], (error, result) => {
        if (error) {
            //      throw error;
            response.status(500).send({ error: 'Error al activar la sucursal', details: error });
        } else {
            //  response.send('Usuario creado correctamente');
            response.send({ message: 'Sucursal activada correctamente', result });
        }
    });

}