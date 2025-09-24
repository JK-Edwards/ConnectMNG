require('dotenv').config();
const AWS = require('aws-sdk');

AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const s3 = new AWS.S3();

// Function to list "directory" buckets (by name convention)
async function listDirectoryBuckets() {
    try {
        const data = await s3.listDirectoryBuckets().promise();
        const allBuckets = data.Buckets.map(b => b.Name);

        console.log(allBuckets);

        // Filter buckets that look like directory buckets (e.g., have '--az' in the name)
        const directoryBuckets = allBuckets.filter(name => name.includes('--az'));
        console.log('Directory buckets:', directoryBuckets);
        return directoryBuckets;
    } catch (err) {
        console.error('Error listing buckets:', err);
        return [];
    }
}

// Function to list objects in a bucket
async function listObjects(bucketName) {
    const data = await s3.listObjectsV2({ Bucket: bucketName }).promise();
    return data.Contents ? data.Contents.map(obj => obj.Key) : [];
}

// Function to upload an object
async function uploadObject(bucketName, key, body) {
    await s3.putObject({ Bucket: bucketName, Key: key, Body: body }).promise();
}

// Function to delete an object
async function deleteObject(bucketName, key) {
    await s3.deleteObject({ Bucket: bucketName, Key: key }).promise();
}

// Main CRUD flow
async function runDirectoryBucketCrud() {
    const dirBuckets = await listDirectoryBuckets();
    if (dirBuckets.length === 0) {
        console.log('No directory buckets found.');
        return;
    }

    const bucketName = dirBuckets[0];
    console.log('Using directory bucket:', bucketName);

    // List objects
    let objects = await listObjects(bucketName);
    console.log('Current objects:', objects);

    // Upload a test object
    const newKey = `test-object-${Date.now()}.txt`;
    await uploadObject(bucketName, newKey, 'This is a test object.');
    console.log('Uploaded object:', newKey);

    // List objects again
    objects = await listObjects(bucketName);
    console.log('Objects after upload:', objects);

    // Delete the object
    await deleteObject(bucketName, newKey);
    console.log('Deleted object:', newKey);

    // List objects again
    objects = await listObjects(bucketName);
    console.log('Objects after deletion:', objects);
}

// Run the script
runDirectoryBucketCrud();
