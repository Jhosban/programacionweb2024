const { Response } = require("../utils/response");
const userModel = require("../models/user");
const userRepository = require('../repository/userRepository')

async function userRegister(req, res) {
    const {name, email, telephone, password} = req.body;

    const user = new userModel();

    try {
        user.name = name;
        user.email = email;
        user.telephone = telephone;
        user.password = password;

        const result = await userRepository.createUser(user);
        Response.status = 201;
        Response.message = "guardado correctamente";
        Response.result = result;        
    } catch (err) {
        Response.status = 500;
        Response.message = "ocurrio un error";
        Response.result = err;  

        res.status(500).send(
            Response
        );
    }
}

module.exports = {
    userRegister
}