const express = require('express');
const router = express.Router();
const { listItems } = require('../aws/dynamoClient'); // your Dynamo client file
const TABLE_NAME = 'connect-mng-blogs'; // DynamoDB table name
const AWS = require('aws-sdk');


// GET all blogs
router.get('/', async (req, res) => {
  try {
    // Fetch all blogs from DynamoDB
    const blogs = await listItems(TABLE_NAME);
    
    // Return the fetched items
    res.json({ message: 'GET all blogs', data: blogs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching blogs', error: err.message });
  }
});

// POST create a new blog
router.post('/', (req, res) => {
    const { name, email } = req.body;
    res.json({ message: 'Blogs created', data: { name, email } });
});


module.exports = router;

