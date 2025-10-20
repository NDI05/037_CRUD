const mysql = require('mysql2')

const db = mysql.connection({
    host: "localhost",
    user: "root",
    password: "samarinda",
    database: "mahasiswa",
    port: 3306
})
