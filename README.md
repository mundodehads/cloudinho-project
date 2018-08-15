# Cloudinho project

Cloudinho is a chatbot build in IBM Watson available at [Bmsix](https://www.bmsix.com/), on it first version it can help future customers to know more about Bmsix services.

Cloudinho is also a Serverless chatbot hosted on AWS (Api Gateway, Lambda), due to this, cloudinho-project is a study project to re-build cloudinho at Google Cloud, IBM Cloud and Azure.

## AWS

On AWS cloudinho was adapted to use Node.js 8.6, Bmsix current version of cloudinho uses a different version and code, with the new code I deploy it on a Lambda function with a simple only log policy, the same function was linked with a Api Gateway api, but it wasnt necessary to keep since cloudinho is already hosted and tested within AWS serverless architecture.

## Google Cloud

On Google Cloud, i wasnt able to complete the serverless architecture, i only build a google function that gave me a HTTP trigger, but i wasnt able to build a complete api endpoint since gooogle endpoints service doesnt support google functions.

## IBM

On development.

## Azure

On development.
