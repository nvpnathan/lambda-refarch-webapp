// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "1t9s5d9al223nppgh9vvt35fkr",     // CognitoClientID
  "api_base_url": "https://5r65yq8vh0.execute-api.us-west-1.amazonaws.com/prod",              // TodoFunctionApi
  "cognito_hosted_domain": "mytaskappdemo-taskapp.auth.us-west-1.amazoncognito.com",        // CognitoDomainName
  "redirect_url": "https://master.d1vrk7hr431g6t.amplifyapp.com"                  // AmplifyURL
};

export default config;
