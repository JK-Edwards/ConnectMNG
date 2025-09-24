const express = require('express');
const router = express.Router();

const getEvent = (req, res) => {
    res.json({ message: 'Single event data', id: req.params.id });
};

router.get('/getEvent/:id', getEvent);

// Create event: read 'name' from request body (no URL param)
const createEvent = (req, res) => {
    const { name } = req.body;
    res.json({ message: 'Created event', name });
};

router.post('/createEvent', createEvent);

module.exports = router;
