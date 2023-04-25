import {Project} from '../models/Project.js'
import {Task} from '../models/Task.js'

export const getProjects = async (req, res) => {
    const projects = await Project.findAll()

    res.json({data: projects})
}

export const getProject = async (req, res) => {
    const {id} = req.params
    const project = await Project.findByPk(id)
    res.json({data:project})
}

export const createProject = async (req, res) => {
    const {name, priority, description} = req.body

    const newProject = await Project.create({
        name,
        description,
        priority
    })
    res.json({data: newProject})
}

export const deleteProject = async (req, res) => {
    const {id} = req.params
    await Project.destroy({
        where: {
            id
        }
    })
    res.json('Project delete')
}

export const updateProject = async (req, res) => {
    const {id} = req.params
    const {name, priority, description} = req.body

    const project = await Project.findByPk(id)
    project.name = name
    project.priority = priority
    project.description = description

    await project.save()

    res.json(project)
}

export const getProjectTask = async (req, res) => {
    const {id} = req.params
    const tasks = await Task.findAll({
        where: {projectId: id}
    })
    res.json({data:tasks})
}