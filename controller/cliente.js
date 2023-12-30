const conexion = require('../utils/conexion').pool;

/* metodo que consulta un ususario por login */

/**
 * Metodo que registra un nuevo usuario
 * @param {*} request 
 * @param {*} response 
 */
exports.consultarCliente = (request, response) => {
    let nit = request.params.nit;
    conexion.query('select * from libreria.cliente where nit = ?',
        [nit], (error, result) => {
            if (error) {
                //  throw error;
                response.status(500).send({ error: 'Error al consultar el usuario', details: error });
            } else {
                if ((Array.isArray(result) && result.length === 0) || (typeof result === 'object' && Object.keys(result).length === 0)) {
                    response.status(404).send({ message: 'Usuario no encontrado' });
                } else {
                    response.send({ message: 'Usuario consultado correctamente', result });
                }
            }
        });
};

exports.consultarClientepd = (request, response) => {

    conexion.query('select * from libreria.cliente',

        (error, result) => {
            if (error) {
                response.status(500).send({ error: 'Error al consultar el usuario', details: error });
                //   response.send(result);
            } else {
                if ((Array.isArray(result) && result.length === 0) || (typeof result === 'object' && Object.keys(result).length === 0)) {
                    response.status(404).send({ message: 'Usuarios no encontrados' });
                } else {
                    response.send({ message: 'Usuarios consultados correctamente', result });
                }
            }
        });

};
exports.registrarCliente = (request, response) => {
    let nit = request.body.nit;//importante
    let nombre = request.body.nombre;
    let apellido = request.body.apellido;
    let dpi = request.body.dpi;
    let correo = request.body.correo;
    let telefono = request.body.telefono;
    let id_estado = request.body.id_estado;

    conexion.query('insert into libreria.cliente (nit, nombre, apellido, dpi, correo, telefono, id_estado) values (?,?,?,?,?,?,?)', [nit, nombre, apellido, dpi, correo, telefono, id_estado], (error, result) => {
        if (error) {
            // throw error;
            response.status(500).send({ error: 'Error al registrar el usuario', details: error });
        } else {
            //  response.send('Usuario creado correctamente');
            response.send({ message: 'Usuario creado correctamente', result });
        }
    });
};

exports.actualizarCliente = (request, response) => {
    let nombre = request.body.nombre;
    let apellido = request.body.apellido;
    let dpi = request.body.dpi;
    let correo = request.body.correo;
    let telefono = request.body.telefono;
    let id_estado = request.body.id_estado;
    let nit = request.params.nit;

    conexion.query('UPDATE libreria.cliente SET nombre =?, apellido =?, dpi =?, correo =?, telefono =?, id_estado =? WHERE nit = ?', [nombre, apellido, dpi, correo, telefono, id_estado, nit], (error, result) => {
        if (error) {
            //     throw error;

            response.status(500).send({ error: 'Error al actualizar el cliente', details: error });
        } else {
            //  response.send('Usuario creado correctamente');
            response.send({ message: 'Usuario actualizado correctamente', result });
        }
    });
};

exports.eliminarCliente = (request, response) => {
    let nit = request.params.nit;//importante
    conexion.query('UPDATE libreria.cliente SET id_estado =? WHERE dpi = ?', [2, nit], (error, result) => {
        if (error) {
            //   throw error;
            response.status(500).send({ error: 'Error al consultar el usuario', details: error });
        } else {
            //  response.send('Usuario creado correctamente');
            response.send({ message: 'Usuario eliminado correctamente', result });
        }
    });

}

exports.activarCliente = (request, response) => {
    let nit = request.params.nit;//importante
    conexion.query('UPDATE libreria.cliente SET id_estado =? WHERE dpi = ?', [1, nit], (error, result) => {
        if (error) {
            //   throw error;
            response.status(500).send({ error: 'Error al consultar el usuario', details: error });
        } else {
            //  response.send('Usuario creado correctamente');
            response.send({ message: 'Usuario activado correctamente', result });
        }
    });

}