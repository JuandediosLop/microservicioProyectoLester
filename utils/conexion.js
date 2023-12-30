const mysql= require('mysql');
/* poll de conexiones */

const pool= mysql.createPool({
host: 'localhost',
user:'root',
password:'admin',
database:'proyectouvg'
});

exports.pool= pool;
