const mysql = require('mysql2')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "samarinda",
    database: "mahasiswa",
    port: 3306
})

db.connect((err)=>{
    if(err){
        console.log('Error Connection Into MySql: '+err)
        return;
    }
    console.log('Connection Successfully');
    
})

module.exports = db;