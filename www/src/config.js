// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2qiujgqeegacas5plddvajkfof"",     // CognitoClientID
  "api_base_url": "https://1myo3musk9.execute-api.us-west-1.amazonaws.com/Prod",              // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-nessnab2.auth.us-west-1.amazoncognito.com",        // CognitoDomainName
  "redirect_url": "https://master.d102imxlea4chn.amplifyapp.com"                  // AmplifyURL
};

export default config;
