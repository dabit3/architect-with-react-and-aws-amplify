# Full Stack Serverless with Architect & AWS Amplify

To learn more about architect, click [here](https://arc.codes/). To learn more about AWS Amplify, click [here](https://docs.amplify.aws/).

![](banner.jpg)

### Back end

This project deploys a REST API built with Amazon DynamoDB, AWS Lambda, and Amazon API Gateway.

The main configuration is located at __infra/app.arc__.

### Front end

The front end for this app is a basic React application configured with AWS Amplify. The React app calls the API and render the posts fetched from the database.

## Getting started

To deploy this back end, be sure to have your prerequisites listed [here](https://arc.codes/quickstart#architect-prerequisites) configured.

1. Clone the repo

```sh
git clone https://github.com/dabit3/architect-with-react-and-aws-amplify.git
```

2. Change into the directory

```
cd architect-with-react-and-aws-amplify
```

3. Install the `architect` cli

```sh
npm install -g @architect/architect
```

4. Deploy the back end infrastructure

```
cd infra
npm install
arc deploy
cd ..
...

Once the deployment is completed, you should be given an API endpoint or keep it available somewhere for step 6.

5. Install the front end depenencies

```sh
cd arc-app
npm install
```

6. Configure the front end React project with Amplify

Open __arc-app/src/aws-exports.js__ and add the API endpoint:

```js
const config = {
  aws_project_region: 'us-east-1',
  aws_cloud_logic_custom: [
    {
      name: "arcapi",
      endpoint: "your-api-endpoint",
      region: "us-east-1"
    }
  ]
}

export default config
```

## Checking the endpoint

You should be able run run curl commands against your endpoint:

### Querying posts

```sh
curl https://<app-id>.execute-api.us-east-1.amazonaws.com/posts 

```

### Creating a post

```sh
curl -d '{"post": {"postID":"001", "type":"blog", "title": "My first post", "content": "Hello world"}}' -H "Content-Type: application/json" -X POST https://<app-id>.execute-api.us-east-1.amazonaws.com/posts
```

### Getting a post by ID

```sh
curl https://<app-id>.execute-api.us-east-1.amazonaws.com/posts/001
```