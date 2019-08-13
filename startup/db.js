const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function () {
    mongoose.connect('mongodb://localhost/Ejemplo-Api')
    .then(() => winston.info('Connected to MongoDB...'));
    // const db = config.get('dbEjemploApi');
    // mongoose.connect(db)
    //     .then(() => winston.info(`Connected to ${db}`));
}