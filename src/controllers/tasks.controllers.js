import {Task} from '../models/Task.js'


export const getTasks = async (req, res) => {
    const tasks = await Task.findAll()

    res.json({data: tasks})
}

export const getTask = async (req, res) => {
    const {id} = req.params
    const task = await Task.findByPk(id)
    res.json({data:task})
}

export const createTask = async (req, res) => {
    const {name, done, projectId} = req.body

    const newTask = await Task.create({
        name,
        done,
        projectId
        
    })
    res.json({data: newTask})
}

export const deleteTask = async (req, res) => {
    const {id} = req.params
    await Task.destroy({
        where: {id}
    })
    res.json('Task delete')
}

export const updateTask = async (req, res) => {
    const {id} = req.params
    const {name, projectId} = req.body

    const task = await Task.findByPk(id)
    task.name = name
    task.projectId = projectId
    

    await task.save()

    res.json(task)
}