# Cloudinho project

Cloudinho is a chatbot build in IBM Watson available at [Bmsix](https://www.bmsix.com/), on it first version it can help future customers to know more about Bmsix services.

Cloudinho is also a Serverless chatbot hosted on AWS (Api Gateway, Lambda), due to this, cloudinho-project is a study project to re-build cloudinho at Google Cloud, IBM Cloud and Azure.

## AWS

On AWS cloudinho was adapted to use Node.js 8.6, Bmsix current version of cloudinho uses a different version and code, with the new code I deploy it on a Lambda function with a simple only log policy, the same function was linked with a Api Gateway api, but it wasnt necessary to keep since cloudinho is already hosted and tested within AWS serverless architecture.

## Google Cloud

On Google Cloud, i wasnt able to complete the serverless architecture, i only build a google function that gave me a HTTP trigger, but i wasnt able to build a complete api endpoint since gooogle endpoints service doesnt support google functions.

## IBM

With IBM was developed an IBM Function that already integrate with API Gateway giving the user a ANY Method URL that can be managed in code, ibm has a great plataform with great usability, so it was easy to learn how to deploy. I was surprised that IBM does not have IBM sdk or watson sdk as default.

## Azure

On azure i got some problems in my first try, but then i read more about the node.js functions reference and it became much easier to implement my function, azure gave a model for http trigger functions, after the implementation you got a url that can be called in any http method, to install my watson dependencie i just ran npm install on web console, simple  as that my function was already running.
