const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000
const userRoutes = require('./routes/userRoutes')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/users', userRoutes)

mongoose.connect('mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.ywlqi.mongodb.net/hustler101?retryWrites=true&w=majority',{useUnifiedTopology :true})
.then(()=>{
    app.listen(port,()=>{
        console.log('app running...')
    })
}).catch(err=>console.log(err))

