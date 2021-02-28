
// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "3ihp7fjkld0plvoau7bc0be8hs",     // CognitoClientID
  "api_base_url": "https://lqu32u41k9.execute-api.us-west-1.amazonaws.com/prod",              // TodoFunctionApi
  "cognito_hosted_domain": "mytaskappdemo-taskapp.auth.us-west-1.amazoncognito.com",        // CognitoDomainName
  "redirect_url": "https://master.d3mcvrwn51r4a3.amplifyapp.com"                  // AmplifyURL
};

export default config;

