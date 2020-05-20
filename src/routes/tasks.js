/* Permite definir las rutas de la aplicacion */
const express = require('express');
const router = express.Router(); //Objeto que define rutas

const Task = require('../models/Task')

//mostrar todas las tareas almacenadas
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id)
    res.json(task);
})

//Almacenar una tarea
router.post('/', async (req, res) => {
    const task = new Task(req.body);
    await task.save();  //guarda en db
    res.json({
        status: 'Tarea guardada'
    })
})

//Actualizar una tarea
router.put('/:id', async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Tarea actualizada'
    });
})

//Eliminar una tarea
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Tarea eliminada'
    })
})

module.exports = router;