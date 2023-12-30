const gestionUsuarios = require('../controller/usuario');
const gestionClientes = require('../controller/cliente');
const gestionSucursales = require('../controller/sucursal');
const gestionProductos = require('../controller/productos');
//const gestionProveedores = require('../controller/proveedores');

const appRouter = function(app){
    //Rutas get para consultas
    app.get('/usuario/consultarUsuarioLogin/:login-:pass', gestionUsuarios.consultarUsuarioLogin);
  //  app.get('/usuario/consultarUsuarios/:login', gestionUsuarios.consultarUsuarios);
  app.get('/usuario/consultarUsuarios/:login', gestionUsuarios.consultarUsuario);
    //Rutas post para modificaciones
    app.post('/usuario/registrarUsuario', gestionUsuarios.registrarUsuario);
    app.post('/usuario/actualizarUsuario', gestionUsuarios.actualizarUsuario);
    app.post('/usuario/eliminarUsuario', gestionUsuarios.eliminarUsuario);
    app.get('/usuario/consultarUsuariopd', gestionUsuarios.consultarUsuariopd);
   // cliente
     //Rutas get para consultas
     app.get('/cliente/consultarCliente/:dpi', gestionClientes.consultarCliente);
      //Rutas post para modificaciones
      app.post('/cliente/registrarCliente', gestionClientes.registrarCliente);
      app.post('/cliente/actualizarCliente', gestionClientes.actualizarCliente);
      app.post('/cliente/eliminarCliente', gestionClientes.eliminarCliente);
      app.get('/cliente/consultarClientepd', gestionClientes.consultarClientepd);
      
      
      app.post('/sucursal/registrarSucursal', gestionSucursales.registrarSucursal);
      app.get('/sucursal/consultarSucursal/:nsucursal', gestionSucursales.consultarSucursal);
      app.post('/sucursal/actualizarSucursal', gestionSucursales.actualizarSucursal);
      app.post('/sucursal/eliminarSucursal', gestionSucursales.eliminarSucursal);
      app.get('/sucursal/consultarSucursalpd', gestionSucursales.consultarSucursalpd);


      app.get('/productos/consultarProductopd', gestionProductos.consultarProductopd);
      //app.get('/proveedores/consultarProveedorpd', gestionProveedores.consultarProveedorpd);

}

module.exports = appRouter;