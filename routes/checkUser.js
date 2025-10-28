const AWS = require('aws-sdk');
require('dotenv').config();

// Configure AWS region and credentials
AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const docClient = new AWS.DynamoDB.DocumentClient();

async function checkUserExists(userId) {
  const params = {
    TableName: 'Users', // your table name
    Key: { userId },
  };

  try {
    const result = await docClient.get(params).promise();
    if (result.Item) {
      console.log(`User found:`, result.Item);
    } else {
      console.log(`User with userId "${userId}" not found.`);
    }
  } catch (error) {
    console.error('Error querying DynamoDB:', error);
  }
}

// Replace 'someUserId' with the actual userId you want to check
const userIdToCheck = 'someUserId';

checkUserExists(userIdToCheck);