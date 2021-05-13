// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "5ho827hks4ttr56s3ivj4t5pig",     // CognitoClientID
  "api_base_url": "https://woedj0df1i.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-api-gtwy-test.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d12nloop4t6phj.amplifyapp.com"                                      // AmplifyURL
};

export default config;
