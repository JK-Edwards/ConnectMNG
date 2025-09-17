require('dotenv').config();
const AWS = require('aws-sdk');

// Configure AWS with credentials and region from .env
AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamoDB = new AWS.DynamoDB(); // low-level client
const docClient = new AWS.DynamoDB.DocumentClient(); // for items

// Function to list all tables
async function createEvent() {
    try {
        const data = await dynamoDB.listTables().promise();
        console.log('DynamoDB tables in this account/region:');
        console.log(data.TableNames);

        if (data.TableNames.length > 0) {
            const firstTable = data.TableNames[0];
            console.log(`\nUsing first table: ${firstTable}`);

            // Get table schema to detect primary key
            const tableDesc = await dynamoDB.describeTable({ TableName: firstTable }).promise();
            const primaryKey = tableDesc.Table.KeySchema[0].AttributeName;
            console.log(`Primary key for ${firstTable}: ${primaryKey}`);

            // Step 1: List current items
            let items = await listItems(firstTable);
            console.log(`Current items in ${firstTable}:`, items);

            // Step 2: Add a new item
            const newItem = {
                [primaryKey]: `test-${Date.now()}`, // required primary key
                name: 'Test Item',
                createdAt: new Date().toISOString()
            };
            await addItem(firstTable, newItem);
            console.log('Added new item:', newItem);

            // Step 3: List items again
            items = await listItems(firstTable);
            console.log(`Items after addition in ${firstTable}:`, items);

            // Step 4: Delete the new item
            await deleteItem(firstTable, primaryKey, newItem[primaryKey]);
            console.log('Deleted the item:', newItem[primaryKey]);

            // Step 5: List items after deletion
            items = await listItems(firstTable);
            console.log(`Items after deletion in ${firstTable}:`, items);
        }
    } catch (err) {
        console.error('Error listing tables:', err);
    }
}

// Function to list all items in a table
async function listItems(tableName) {
    try {
        const params = { TableName: tableName };
        const data = await docClient.scan(params).promise();
        return data.Items;
    } catch (err) {
        console.error(`Error fetching items from table ${tableName}:`, err);
        return [];
    }
}

// Function to add a new item to a table
async function addItem(tableName, item) {
    try {
        const params = { TableName: tableName, Item: item };
        await docClient.put(params).promise();
    } catch (err) {
        console.error(`Error adding item to table ${tableName}:`, err);
    }
}

// Function to delete an item from a table
async function deleteItem(tableName, primaryKey, keyValue) {
    try {
        const params = {
            TableName: tableName,
            Key: {
                [primaryKey]: keyValue
            }
        };
        await docClient.delete(params).promise();
    } catch (err) {
        console.error(`Error deleting item from table ${tableName}:`, err);
    }
}

// Run the script
createEvent();
