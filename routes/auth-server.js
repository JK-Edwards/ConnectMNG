const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AWS = require('aws-sdk');
require('dotenv').config();

const app = express();
app.use(express.json());

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const docClient = new AWS.DynamoDB.DocumentClient();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_here';

app.post('/register', async (req, res) => {
  const { userId, name, password } = req.body;
  if (!userId || !name || !password) return res.status(400).json({ error: 'Missing fields' });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const params = {
      TableName: 'Users',
      Item: {
        userId,
        name,
        password: hashedPassword, 
      },
      ConditionExpression: 'attribute_not_exists(userId)', 
    };

    await docClient.put(params).promise();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    if (err.code === 'ConditionalCheckFailedException') {
      res.status(409).json({ error: 'User already exists' });
    } else {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

app.post('/login', async (req, res) => {
  const { userId, password } = req.body;
  if (!userId || !password) return res.status(400).json({ error: 'Missing fields' });

  try {
    const params = {
      TableName: 'Users',
      Key: { userId },
    };
    const result = await docClient.get(params).promise();

    if (!result.Item) {
      return res.status(401).json({ error: 'Invalid userId or password' });
    }

    const match = await bcrypt.compare(password, result.Item.password);
    if (!match) {
      return res.status(401).json({ error: 'Invalid userId or password' });
    }

    // This is where you generate the token — wrap it in try-catch:
    let token;
    try {
      token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
    } catch (err) {
      console.error('JWT signing error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    res.json({ message: 'Login successful', token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Auth server running on http://localhost:${PORT}`);
});