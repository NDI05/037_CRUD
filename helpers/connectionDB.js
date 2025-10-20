const mysql = require('mysql2')

const connection = mysql.connection({
    host: "localhost",
    user: "root",
    password: "samarinda",
    database: "mahasiswa"
})

connection.connect((err)=>{
    if (err) throw err
})