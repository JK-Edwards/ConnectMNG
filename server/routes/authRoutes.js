const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
    res.json({ message: 'GET all users' });
});

router.post('/', (req, res) => {
    const { name, email } = req.body;
    res.json({ message: 'User created', data: { name, email } });
});

module.exports = router;