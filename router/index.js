const express = require('express')
const router = express.Router();
const controller = require('../controller');

router.post('/', async (req, res) => {
    res.status(200).json(controller.create(req))
});

router.put('/:id', async (req, res) => {
    res.status(200).json(controller.update(req))
});

router.delete('/:id', async (req, res) => {
    res.status(200).json(controller.delete(req))
});

router.delete('/', async (req, res) => {
    res.status(200).json(controller.deleteAll())
});

router.get('/', async (req, res) => {
    res.status(200).json(controller.index())
});
module.exports = router;