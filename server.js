const express = require('express')
const app = express()
const port = 3001

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.json({message: "hello world"})
})

app.listen(port, ()=>{
    console.log(`Server Berjalan di Port ${port}`)
})