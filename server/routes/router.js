const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const config = require('../config/config')
const authMiddleware = require('../middleware/authMiddleware')

const mongoose = require('mongoose')
mongoose.connect(config.connectionString, (error, db) => {
    if (error) {
        console.log(error)
        console.log('DB couldn\'t connect !');
    } else {
        console.log('MongoDB Connected !');
    }
})

router.get('/', (req, res) => {
    res.send('Success')
});
router.post('/login', authController.login)

/* PROJECTS ROUTES */
const Projects = require('../models/projects')
const Tasks = require('../models/tasks')
router.get('/projects', authMiddleware, (req, res) => {
    console.log(req.session.user._id)
    Projects.find({ userId: req.session.user._id })
        .then((data) => res.send(data))
        .catch((error) => res.status(400).send({ message: error }))
})
router.get('/projects/:projectId', authMiddleware, (req, res) => {
    Projects.find({ _id: req.params.projectId })
        .then((data) => res.send(data))
        .catch((error) => res.status(400).send({ message: error }))
})
router.post('/projects', authMiddleware, (req, res) => {
    (new Projects({
        name: req.body.name,
        description: req.body.description,
        userId: req.session.user._id,
        createdAt: Date()
    })).save()
        .then((data) => res.send(data))
        .catch((error) => res.status(400).send({ message: error }))
})

router.patch('/projects/:projectId', authMiddleware, (req, res) => {
    const postedBody = req.body
    postedBody.updatedAt = Date()
    const project = Projects.findOneAndUpdate({ _id: req.params.projectId }, postedBody)
        .then((pUpdated) => res.send(pUpdated))
        .catch((error) => res.status(400).send(error))
})

router.delete('/projects/:projectId', authMiddleware, async (req, res) => {
    try {
        console.log(req.params.projectId)
        const deleted = await Projects.deleteOne({ _id: req.params.projectId })
        res.send(deleted)
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }

})

/* TASKS ROUTES */

router.post('/projects/:projectId/tasks', authMiddleware, async (req, res) => {
    const projectDoc = await Projects.findById(req.params.projectId);
    (new Tasks({
        project: {
            _id: req.params.projectId,
            name: projectDoc.name
        },
        task: req.body.task,
        description: req.body.description,
        createdAt: Date(),
        user: {
            _id: req.session.user._id,
            name: req.session.user.email
        }
    })).save()
        .then((task) => res.send(task))
        .catch((error) => res.status(400).send(error))
})
router.get('/projects/:projectId/tasks', authMiddleware, (req, res) => {
    Tasks.find({ "project._id": req.params.projectId })
        .then((data) => res.send(data))
        .catch((error) => res.status(400).send(error))
})

router.get('/projects/:projectId/tasks/:taskId', authMiddleware, (req, res) => {
    Tasks.findOne({ "project._id": req.params.projectId, _id: req.params.taskId })
        .then((data) => res.send(data))
        .catch((error) => res.status(400).send(error))
})

router.patch('/projects/:projectId/tasks/:taskId', authMiddleware, (req, res) => {
    Tasks.updateOne({ _id: req.params.taskId }, req.body)
        .then(() => res.send())
        .catch((error) => res.status(400).send(error))
})
router.delete('/projects/:projectId/tasks/:taskId', authMiddleware, (req, res) => {
    Tasks.deleteOne({ _id: req.params.taskId })
        .then((data) => res.send(data))
})

module.exports = router