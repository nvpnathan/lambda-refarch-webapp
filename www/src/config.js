
// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6gq449d4urn3i67m6tfl9gc2on",     // CognitoClientID
  "api_base_url": "https://wetqx5rgvb.execute-api.us-west-1.amazonaws.com/prod",              // TodoFunctionApi
  "cognito_hosted_domain": "mytaskappdemo-taskapp.auth.us-west-1.amazoncognito.com",        // CognitoDomainName
  "redirect_url": "https://master.d378wctf090ono.amplifyapp.com/"                  // AmplifyURL
};

export default config;

