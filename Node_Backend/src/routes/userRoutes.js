const express = require('express');
const userController = require('../controllers/userController');

const api = express.Router();

api.post('/usuarios/registrar', userController.userRegister);

module.exports = api;const express = require('express');
const userController = require('../controllers/userController');
