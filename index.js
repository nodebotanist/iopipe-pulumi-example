const aws = require("@pulumi/aws");
const serverless = require("@pulumi/aws-serverless");
const cloud = require("@pulumi/cloud-aws");

// Load the Pulumi IO| integration package
require("@pulumi/iopipe");

// Create a public HTTP REST API endpoint (using AWS APIGateway)
const endpoint = new cloud.API("hello");
    
// Serve a simple REST API on `GET /name` (using AWS Lambda)
endpoint.get("/source", (req, res) => res.json({name: "AWS"}))
    
// Export the public URL for the HTTP service
exports.url = endpoint.publish().url;

// Create a bucket and a function to log new object uploads
const bucket = new aws.s3.Bucket("my-bucket");
serverless.bucket.onPut("onNewObject", bucket, async (ev) => console.log(ev));
exports.bucketName = bucket.bucket;