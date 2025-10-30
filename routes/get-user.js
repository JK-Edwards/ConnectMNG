const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: "Users",
  Key: {
    userId: "user123" 
  }
};

docClient.get(params, (err, data) => {
  if (err) {
    console.error("Unable to get user:", JSON.stringify(err, null, 2));
  } else {
    if (data.Item) {
      console.log("User retrieved:", data.Item);
    } else {
      console.log("User not found");
    }
  }
});