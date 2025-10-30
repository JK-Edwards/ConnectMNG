const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: "Users",
  AttributeDefinitions: [
    { AttributeName: "userId", AttributeType: "S" } 
  ],
  KeySchema: [
    { AttributeName: "userId", KeyType: "HASH" }   
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  }
};

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.error("Unable to create table. Error:", JSON.stringify(err, null, 2));
  } else {
    console.log("Created table. Table description:", JSON.stringify(data, null, 2));
  }
});