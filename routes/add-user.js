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
  Item: {
    userId: "user123",        
    name: "Alice Johnson",
    bio: "Software developer and coffee enthusiast.",
    photoUrl: "https://example.com/photos/alice.jpg"
  }
};

docClient.put(params, (err, data) => {
  if (err) {
    console.error("Unable to add user:", JSON.stringify(err, null, 2));
  } else {
    console.log("User added successfully:", data);
  }
});