/* Aisla la conexion a BD */
const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mevn-database';
const optsConnection = { autoIndex: false, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false };

mongoose.connect(URI, optsConnection)
    .then(db => console.log('BD is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;