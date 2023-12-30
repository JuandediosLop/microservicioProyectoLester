const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = 3000;
const rutasSistema =require("./routes/rutas");


/**
 * Creamos las cabeceras http para las peticiones
 */
 app.use(express.static('public'));
 app.use(express.json({limit: '50mb'}));
 app.use(express.urlencoded({limit: '50mb', extended: true}));
 app.use(function (req, res, next) {
     res.setHeader('Access-Control-Allow-Credentials', true);
     res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
     res.setHeader('Access-Control-Allow-Origin', '*');   
     res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
     next();
 });
 rutasSistema(app);
 /**
 * Iniciamos el servidor escuchando en el puerto 3000
 */
server.listen(port, function(){
	console.log('Sistema funcionando en el puerto ' + port);
});