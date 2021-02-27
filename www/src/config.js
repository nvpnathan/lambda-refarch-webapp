
// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2nlh8pmi148536u6n9obbua5li",     // CognitoClientID
  "api_base_url": "https://drith2dvz9.execute-api.us-west-1.amazonaws.com/prod",              // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-ab2test.auth.us-west-1.amazoncognito.com",        // CognitoDomainName
  "redirect_url": "https://dev.d36egbw5m4iyv3.amplifyapp.com"                  // AmplifyURL
};

export default config;
