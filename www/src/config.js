
// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "292qsmjt01cs5s3arkaqisroda",     // CognitoClientID
  "api_base_url": "https://f0isz52bah.execute-api.us-west-1.amazonaws.com/prod",              // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-ab2test.auth.us-west-1.amazoncognito.com",        // CognitoDomainName
  "redirect_url": "https://dev.d33355i6j3qlr5.amplifyapp.com"                  // AmplifyURL
};

export default config;
