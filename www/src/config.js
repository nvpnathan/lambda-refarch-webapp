// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "1nbfvn408nvekq3ucia816k6iu",     // CognitoClientID
  "api_base_url": "https://b2qxk3z73k.execute-api.us-west-1.amazonaws.com/Stage",              // TodoFunctionApi
  "cognito_hosted_domain": "mytaskappdemo-taskapp.auth.us-west-1.amazoncognito.com",        // CognitoDomainName
  "redirect_url": "https://master.d3awyxqj7f0zsl.amplifyapp.com"                  // AmplifyURL
};

export default config;
