const mysql = require('mysql');
/* poll de conexiones */

const pool = mysql.createPool({
    host: 'localhost',
    user: 'jdlopez',
    password: 'admin',
    database: 'libreria'
});

exports.pool = pool;
