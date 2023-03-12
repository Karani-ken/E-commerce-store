const express = require('express')
const cors = require('cors')
const products = require('./products')
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    res.send("welcome to our online shop")
})
app.get('/products', (req,res)=>{
    res.send(products)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server started on port: ${PORT}`))