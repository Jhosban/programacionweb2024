//el modelo del usuario no se usa al crear un usuario
const userModel = require("../models/user");

module.exports.createUser = async (user) => {
    try {
        return await user.save();
    } catch (err) {
        throw new Error('Error saving data to the database');
    }
};

module.exports.listAllUser = async () => {
    try {
        return await userModel.find();
    } catch (err) {
        throw new Error('Error saving data to the database');
    }
};

module.exports.findByEmailUser = async (email) => {
    try {
        return await userModel.findOne({email});
    } catch (err) {
        throw new Error('Error saving data to the database');
    }
};

module.exports.deleteById = async (id) => {
    try {
        return await userModel.findByIdAndDelete({_id: id});
    } catch (err) {
        throw new Error('Error saving data to the database');
    }
};

module.exports.updateUser = async (id, user) => {
    try {
        return await userModel.findByIdAndUpdate({_id: id},{name: user.name, telephone: user.telephone});
    } catch (err) {
        throw new Error('Error saving data to the database');
    }
};
