const express = require('express');
const router = express.Router();

const getEvent = (req, res) => {
    const eventNameForTesting = "TestEvent"
    res.json({ message: 'HELLO WORLD', id: eventNameForTesting });
    // go to DDB
    // Get the actual event from the DDB

    // Then return the event object or info or whatever
    // send back an error if the event does not exist 404
};

router.get('/getEvent/:id', getEvent);

// Create event: read 'name' from request body (no URL param)
const createEvent = (req, res) => {
    const { name } = req.body;
    res.json({ message: 'Created event with name: ', name });
};


// const deleteEvent

// const updateEvent

router.post('/createEvent', createEvent);

module.exports = router;