
// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "1320dlfovar5mrnk9j1bf7l508",     // CognitoClientID
  "api_base_url": "https://jh6hg7ua64.execute-api.us-west-1.amazonaws.com/prod",              // TodoFunctionApi
  "cognito_hosted_domain": "	mytodoappdemo-taskapp.auth.us-west-1.amazoncognito.com",        // CognitoDomainName
  "redirect_url": "https://dev.d23pkbb6au9zqt.amplifyapp.com"                  // AmplifyURL
};

export default config;
