# Example App: IOpipe Integration for Pulumi

## Step One: Set up Pulumi and IOpipe

1. Make sure Pulumi is [installed](https://pulumi.io/quickstart/install.html) and set up with [your AWS access keys](https://pulumi.io/quickstart/aws/setup.html)
1. Initialize your Pulumi project with `pulumi new`
1. Install the Pulumi IOpipe plugin with `npm i --save @pulumi/iopipe`
1. Set your IOpipe access token using `pulumi config set --secret iopipe:token <your token here>`

## Step Two: Write your Lambda function using Pulumi

1. Install dependencies: `npm i --save @pulumi/aws-cloud @pulumi/aws-serverless`
1. Write your AWS Lambda function (Also seen in [index.js](./index.js):

```javascript
const cloud = require('@pulumi/cloud-aws')


```
