const express = require('express');
const { Register, Login } = require('./controller/UserController');
const Router = express.Router();


//Register
Router.post('/register', Register)

//Login
Router.post('/login', Login)


module.exports = Router;