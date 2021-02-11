// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "70p8ai0meivlj9jjrnhor15v0j",     // CognitoClientID
  "api_base_url": "https://td9gl0hst0.execute-api.us-west-1.amazonaws.com/prod",              // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-nessnab2.auth.us-west-1.amazoncognito.com",        // CognitoDomainName
  "redirect_url": "https://master.d14of5ysmob0y6.amplifyapp.com"                  // AmplifyURL
};

export default config;
