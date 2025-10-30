const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient } = require('@aws-sdk/lib-dynamodb');

const client = new DynamoDBClient({
  region: process.env.AWS_REGION || 'us-west-2',
});

const ddbDocClient = DynamoDBDocumentClient.from(client);

module.exports = ddbDocClient;