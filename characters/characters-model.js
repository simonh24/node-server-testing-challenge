const db = require('../data/db-config.js');

module.exports = {
    getCharacters
}

function getCharacters(char) {
    return db('characters');
}