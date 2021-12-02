const express = require('express');
const app = express();
const Router = require('./router')
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config/db');
//connect to database

mongoose.connect(MONGO_URI)
.then(()=>console.log('database connected'))
.catch(err=>console.log(err))

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())

//router
app.use('/api', Router)

const PORT = 5000
app.listen(PORT, ()=>console.log(`connected server on ${PORT}`))