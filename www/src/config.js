
// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "5ebi6duproivlkd689vqerpqgd",     // CognitoClientID
  "api_base_url": "https://l7jgp3oh67.execute-api.us-west-1.amazonaws.com/prod",              // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-taskapp.auth.us-west-1.amazoncognito.com",        // CognitoDomainName
  "redirect_url": "https://dev.d3mild32ecx67x.amplifyapp.com"                  // AmplifyURL
};

export default config;
