const express = require('express')
const app = express()
const port = 3001

const db = require('./helpers/connectionDB')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.json({message: "hello world"})
})

app.get('/api/users', (req, res) =>{
    db.query('SELECT * FROM mahasiswa', (err, result) =>{
        if(err){
            console.error('Error executing query:0'+err.stack)
            res.status(500).send('Error Fetching Users');
            return;
        }
        res.json(result);
    })
})

app.listen(port, ()=>{
    console.log(`Server Berjalan di Port ${port}`)
})