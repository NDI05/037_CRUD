const express = require('express')
const app = express()
const port = 3001

const db = require('./config/connectionDB')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.json({message: "hello world"})
})

//GET END POINT
app.get('/api/users', (req, res) =>{
    db.query('SELECT * FROM mahasiswa', (err, result) =>{
        if(err){
            console.error('Error executing query:0'+err.stack)
            return res.status(500).send('Error Fetching Users');
        }
        res.json(result);
    })
})

//POST END POINT
app.post('/api/users', (req, res)=>{
    const {nama, nim, kelas} = req.body;

    if (!nama || !nim || !kelas){
        return res.status(400).json({message: 'All Field Is Required'})
    }
    
    db.query('INSERT INTO mahasiswa (nama, nim, kelas) VALUES (?, ?, ?)', [nama, nim, kelas], (err)=>{
        if(err){
            console.error(err)
            return res.status(500).json({message: 'Database Error'});
        }
        res.status(201).json({message: 'User Created Successfully'});
    });
})

app.put('/api/users/:id', (req, res)=>{
    const {nama, kelas, nim} = req.body;
    const {id} = req.params;

    if (!nama || !id || !kelas || !nim){
        return res.status(400).json({message: 'All Field Is Required'})
    }

    db.query('UPDATE mahasiswa SET nama = ?, kelas = ?, nim = ? WHERE id = ?', [nama, kelas, nim, id], (err)=>{
        if(err){
            console.error(err)
            return res.status(500).json({message: 'Database Error'});
        }
        res.json({message: 'User Updated Successfully'});
    });
})



app.listen(port, ()=>{
    console.log(`Server Berjalan di Port ${port}`)
})