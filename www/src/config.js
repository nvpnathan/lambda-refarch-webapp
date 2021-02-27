// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7t6rla58pvmt5vr8c398ki84mq",     // CognitoClientID
  "api_base_url": "https://bpxlyoe0td.execute-api.us-west-1.amazonaws.com/prod",              // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-ab2test.auth.us-west-1.amazoncognito.com",        // CognitoDomainName
  "redirect_url": "https://master.d3ef4u5h50dfri.amplifyapp.com"                  // AmplifyURL
};

export default config;
