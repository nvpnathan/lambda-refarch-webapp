
// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "1cod1pdjivcjm863sfkmqbto6b",     // CognitoClientID
  "api_base_url": "https://32pj81pnrg.execute-api.us-west-1.amazonaws.com/prod",              // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-taskapp.auth.us-west-1.amazoncognito.com",        // CognitoDomainName
  "redirect_url": "https://dev.d1cyr3sr2dswlj.amplifyapp.com"                  // AmplifyURL
};

export default config;
