//util/database.js
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'note_app',
    password: ''
});

module.exports = pool.promise();