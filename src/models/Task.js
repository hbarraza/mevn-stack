const mongoose = require('mongoose');
const { Schema } = mongoose;    //Se requiere solo el schema desde mongoose

//Se crea el modelo
const Task = new Schema({
    title: String,
    description: String
});

//Se exporta el modelo
module.exports = mongoose.model('Task', Task)