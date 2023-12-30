const conexion = require('../utils/conexion').pool;

/* metodo que consulta un ususario por login */

/**
 * Metodo que registra un nuevo usuario
 * @param {*} request 
 * @param {*} response 
 */
exports.consultarUsuarioLogin = (request, response) => {
    let login_name = request.params.login_name;
    let password = request.params.password;
    conexion.query('select login_name, password, nombre, apellido, correo, id_rol, id_estado from libreria.usuario where login_name = ? and password= ? and id_estado = ?',
        [login_name, password, 1], (error, result) => {
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

exports.consultarUsuario = (request, response) => {
    let login_name = request.params.login_name;
    conexion.query('select login_name, password, nombre, apellido, correo, id_rol, id_estado from libreria.usuario where login_name = ?',
        [login_name], (error, result) => {
            if (error) {
                //      throw error;
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

exports.consultarUsuariopd = (request, response) => {

    conexion.query('select login_name, password, nombre, apellido, correo, id_rol, id_estado from libreria.usuario',

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

exports.registrarUsuario = (request, response) => {
    let login_name = request.body.login_name;//importante
    let password = request.body.password;
    let nombre = request.body.nombre;
    let apellido = request.body.apellido;
    let correo = request.body.correo;
    let id_rol = request.body.id_rol;
    let id_estado = request.body.id_estado;
    conexion.query('insert into libreria.usuario (login_name, password, nombre, apellido, correo, id_rol, id_estado) values (?,?,?,?,?,?,?)', [login_name, password, nombre, apellido, correo, id_rol, id_estado], (error, result) => {

        if (error) {
            response.status(500).send({ error: 'Error al registrar el usuario', details: error });
        } else {
            response.send({ message: 'Usuario creado correctamente', result });
        }
    });
};


exports.actualizarUsuario = (request, response) => {
    let login_name = request.params.login_name;//importante
    let password = request.body.password;
    let nombre = request.body.nombre;
    let apellido = request.body.apellido;
    let correo = request.body.correo;
    let id_rol = request.body.id_rol;
    let id_estado = request.body.id_estado;
    conexion.query('UPDATE libreria.usuario SET password = ?, nombre = ?, apellido = ?, correo = ?, id_rol = ?, id_estado = ? WHERE login_name = ?', [password, nombre, apellido, correo, id_rol, id_estado, login_name], (error, result) => {
        if (error) {
            //      throw error;
            response.status(500).send({ error: 'Error al actualizar el usuario', details: error });
        } else {
            //  response.send('Usuario creado correctamente');
            response.send({ message: 'Usuario actualizado correctamente', result });
        }
    });
};

exports.eliminarUsuario = (request, response) => {
    let login_name = request.params.login_name;//importante
    conexion.query('UPDATE libreria.usuario SET id_estado = ? WHERE login_name = ?', [2, login_name], (error, result) => {
        if (error) {
            ///      throw error;
            response.status(500).send({ error: 'Error al eliminar el usuario', details: error });
        } else {
            //  response.send('Usuario creado correctamente');
            response.send({ message: 'Usuario eliminado correctamente', result });
        }
    });

}

//Activar usuario
exports.activarUsuario = (request, response) => {
    let login_name = request.params.login_name;//importante
    conexion.query('UPDATE libreria.usuario SET id_estado = ? WHERE login_name = ?', [1, login_name], (error, result) => {
        if (error) {
            ///      throw error;
            response.status(500).send({ error: 'Error al activar el usuario', details: error });
        } else {
            //  response.send('Usuario creado correctamente');
            response.send({ message: 'Usuario activado correctamente', result });
        }
    });

}