const config = require('config');

module.exports = function() {
    if (!config.get('jwtPrivateKeyEjemploApi')) {
        throw new Error('FATAL ERROR: jwtPrivateKeyEjemploApi is not defined.');
    }
}