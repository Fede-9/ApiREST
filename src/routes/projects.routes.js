import {Router} from 'express'
import {createProject, deleteProject, getProject, getProjectTask, getProjects, updateProject} from '../controllers/projects.controllers.js'


const router = Router()

router.get('/projects', getProjects)
router.get('/projects/:id', getProject)
router.post('/projects', createProject)
router.delete('/projects/:id', deleteProject)
router.put('/projects/:id', updateProject)

router.get('/projects/:id/tasks', getProjectTask)

export default router