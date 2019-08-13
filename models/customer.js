const Joi = require('Joi');
const mongoose = require('mongoose');

const Customer = mongoose.model('Customer', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    lastname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    email: {
        type: String,
        minlength: 10,
        maxlength: 255
    },
    cellphone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    description: {
        type: String,
        maxlength: 1024
    }
}));

function validateCustomer(customer) {
    const schema = {
        name: Joi.string().min(5).max(255).required(),
        lastname: Joi.string().min(5).max(255).required(),
        email: Joi.string().min(10).max(255),
        cellphone: Joi.string().min(5).max(255).required(),
        description: Joi.string().max(1024)
    }

    return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validateCustomer = validateCustomer;


