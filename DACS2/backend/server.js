const express = require('express')
const cors = require('cors');
const app = express();
const http = require('http')
require('./connection')
const server = http.createServer(app)

const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const imageRoutes = require('./routes/imageRoutes');

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/users', userRoutes)
app.use('/products', productRoutes)
app.use('/images', imageRoutes);

server.listen(8000, () => {
    console.log('server runing at port ' , 8000)
})

// dacs2 Lvd01102003@
