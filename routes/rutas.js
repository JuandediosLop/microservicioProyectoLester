const gestionUsuarios = require('../controller/usuario');
const gestionClientes = require('../controller/cliente');
const gestionSucursales = require('../controller/sucursal');
const gestionProductos = require('../controller/productos');
const gestionProveedores = require('../controller/proveedores');
const gestionVentas = require('../controller/venta');
const gestionDetalleVenta = require('../controller/detalle_venta');

const appRouter = function (app) {
  //Rutas get para consultas
  app.get('/', function (req, res) {
    res.send('Bienvenido al sistema de libreria');
  })
    //USUARIO ------------------------------
    .get('/usuario/consultarUsuario/:login_name-:password', gestionUsuarios.consultarUsuarioLogin)
    .get('/usuario/consultarUsuarioLogueado/:login_name', gestionUsuarios.consultarUsuario)
    .get('/usuario/consultarUsuariopd', gestionUsuarios.consultarUsuariopd)
    .post('/usuario/registrarUsuario', gestionUsuarios.registrarUsuario)
    .patch('/usuario/actualizarUsuario/:login_name', gestionUsuarios.actualizarUsuario)
    .patch('/usuario/eliminarUsuario/:login_name', gestionUsuarios.eliminarUsuario)
    .patch('/usuario/activarUsuario/:login_name', gestionUsuarios.activarUsuario)

    //FIN USUARIO ------------------------------

    //CLIENTES ------------------------------
    .get('/cliente/consultarCliente/:nit', gestionClientes.consultarCliente)
    .get('/cliente/consultarClientepd', gestionClientes.consultarClientepd)
    .post('/cliente/registrarCliente', gestionClientes.registrarCliente)
    .patch('/cliente/actualizarCliente/:nit', gestionClientes.actualizarCliente)
    .patch('/cliente/eliminarCliente/:nit', gestionClientes.eliminarCliente)
    .patch('/cliente/activarCliente/:nit', gestionClientes.activarCliente)

    //FIN CLIENTES ------------------------------

    //SUCURSAL ------------------------------
    .get('/sucursal/consultarSucursal/:id_sucursal', gestionSucursales.consultarSucursal)
    .get('/sucursal/consultarSucursalpd', gestionSucursales.consultarSucursalpd)
    .post('/sucursal/registrarSucursal', gestionSucursales.registrarSucursal)
    .patch('/sucursal/actualizarSucursal/:id_sucursal', gestionSucursales.actualizarSucursal)
    .patch('/sucursal/eliminarSucursal/:id_sucursal', gestionSucursales.eliminarSucursal)
    .patch('/sucursal/activarSucursal/:id_sucursal', gestionSucursales.activarSucursal)
    //FIN SUCURSAL ------------------------------

    //PRODUCTOS ------------------------------
    .get('/productos/consultarProducto/:id_producto', gestionProductos.consultarProductoId)
    .get('/productos/consultarProductopd', gestionProductos.consultarProductopd)
    .get('/productos/consultarTipoProducto/:tipo_producto', gestionProductos.consultarTipoProducto)
    .post('/productos/registrarProducto', gestionProductos.registrarProducto)
    .patch('/productos/actualizarProducto/:id_producto', gestionProductos.actualizarProducto)
    .patch('/productos/eliminarProducto/:id_producto', gestionProductos.eliminarProducto)
    .patch('/productos/activarProducto/:id_producto', gestionProductos.activarProducto)
    //FIN PRODUCTOS ------------------------------

    //PROVEEDORES ------------------------------
    .get('/proveedores/consultarProveedor/:nit', gestionProveedores.consultarProveedorNit)
    .get('/proveedores/consultarProveedorpd', gestionProveedores.consultarProveedorpd)
    .post('/proveedores/registrarProveedor', gestionProveedores.registrarProveedor)
    .patch('/proveedores/actualizarProveedor/:nit', gestionProveedores.actualizarProveedor)
    .patch('/proveedores/eliminarProveedor/:nit', gestionProveedores.eliminarProveedor)
    .patch('/proveedores/activarProveedor/:nit', gestionProveedores.activarProveedor)
    //FIN PROVEEDORES ------------------------------

    //VENTAS ------------------------------
    .get('/venta/consultarVenta/:id_venta', gestionVentas.consultarVenta)
    .get('/venta/consultarVentapd', gestionVentas.consultarVentapd)
    .post('/venta/registrarVenta', gestionVentas.registrarVenta)
    .patch('/venta/actualizarVenta/:id_venta', gestionVentas.actualizarVenta)
    .patch('/venta/eliminarVenta/:id_venta', gestionVentas.eliminarVenta)
    .patch('/venta/activarVenta/:id_venta', gestionVentas.activarVenta)

    //FIN VENTAS ------------------------------
    //DETALLE VENTA ------------------------------
    .get('/detalle_venta/consultarDetalleVenta/:id_venta', gestionDetalleVenta.consultarDetalleVenta)
    .get('/detalle_venta/consultarDetalleVentapd', gestionDetalleVenta.consultarDetalleVentapd)
    .post('/detalle_venta/registrarDetalleVenta', gestionDetalleVenta.registrarDetalleVenta)
    .patch('/detalle_venta/actualizarDetalleVenta/:id_detalle', gestionDetalleVenta.actualizarDetalleVenta)
    .patch('/detalle_venta/eliminarDetalleVenta/:id_detalle', gestionDetalleVenta.eliminarDetalleVenta)
    .patch('/detalle_venta/activarDetalleVenta/:id_detalle', gestionDetalleVenta.activarDetalleVenta)
}

module.exports = appRouter;