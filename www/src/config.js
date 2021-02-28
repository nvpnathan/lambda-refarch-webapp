
// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "5dh702ifth4iddgqq7193qmh04",     // CognitoClientID
  "api_base_url": "https://culja8grlf.execute-api.us-west-1.amazonaws.com/prod",              // TodoFunctionApi
  "cognito_hosted_domain": "mytaskappdemo-taskapp.auth.us-west-1.amazoncognito.com",        // CognitoDomainName
  "redirect_url": "https://master.d2nch6via6rvvq.amplifyapp.com"                  // AmplifyURL
};

export default config;

