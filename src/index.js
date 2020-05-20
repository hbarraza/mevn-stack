const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database'); //Importa la conexion a DB

//Settings
app.set('port', process.env.PORT || 3000)

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks', require('./routes/tasks'));

//Archivos estaticos
//console.log(__dirname + '/public');
app.use(express.static(__dirname + '/public'))
//Server on run
app.listen(app.get('port'), ()=> {
    console.log('server on port', app.get('port'))
})