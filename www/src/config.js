// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "286ll95bgv41d9ag0s53hitll9",     // CognitoClientID
  "api_base_url": "https://pyxkv5wljc.execute-api.us-west-1.amazonaws.com/prod",              // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-taskapp.auth.us-west-1.amazoncognito.com",        // CognitoDomainName
  "redirect_url": "https://master.d5597z7o8mg8u.amplifyapp.com"                  // AmplifyURL
};

export default config;
