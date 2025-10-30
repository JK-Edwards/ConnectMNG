const express = require('express');
const bcrypt = require('bcrypt');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb'); 
const { DynamoDBDocumentClient, GetCommand, PutCommand, UpdateCommand, DeleteCommand } = require('@aws-sdk/lib-dynamodb');
const { authenticateToken } = require('../middleware/authMiddleware'); 

const client = new DynamoDBClient({ region: process.env.AWS_REGION || 'us-west-2' });

const ddbDocClient = DynamoDBDocumentClient.from(client);

const router = express.Router();

router.post('/', async (req, res) => {
  const { userId, name, password } = req.body;
  if (!userId || !name || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const existingUser = await ddbDocClient.send(new GetCommand({
      TableName: 'Users',
      Key: { userId },
    }));

    if (existingUser.Item) {
      return res.status(409).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await ddbDocClient.send(new PutCommand({
      TableName: 'Users',
      Item: {
        userId,
        name,
        password: hashedPassword,
      },
    }));

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:userId', authenticateToken, async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await ddbDocClient.send(new GetCommand({
      TableName: 'Users',
      Key: { userId },
    }));

    if (!user.Item) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { password, ...userData } = user.Item;
    res.json(userData);
  } catch (err) {
    console.error('Get user error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:userId', authenticateToken, async (req, res) => {
  const { userId } = req.params;
  const { name, password } = req.body;

  if (!name && !password) {
    return res.status(400).json({ error: 'Nothing to update' });
  }

  try {
    const updateExpressionParts = [];
    const expressionAttributeValues = {};

    if (name) {
      updateExpressionParts.push('name = :name');
      expressionAttributeValues[':name'] = name;
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateExpressionParts.push('password = :password');
      expressionAttributeValues[':password'] = hashedPassword;
    }

    const updateExpression = 'set ' + updateExpressionParts.join(', ');

    await ddbDocClient.send(new UpdateCommand({
      TableName: 'Users',
      Key: { userId },
      UpdateExpression: updateExpression,
      ExpressionAttributeValues: expressionAttributeValues,
    }));

    res.json({ message: 'User updated successfully' });
  } catch (err) {
    console.error('Update user error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:userId', authenticateToken, async (req, res) => {
  const { userId } = req.params;

  try {
    await ddbDocClient.send(new DeleteCommand({
      TableName: 'Users',
      Key: { userId },
    }));

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Delete user error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;