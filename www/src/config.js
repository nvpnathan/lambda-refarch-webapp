
// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "3h19u4oal68m63pocl4aarpdeq",     // CognitoClientID
  "api_base_url": "https://72xqhdm2v6.execute-api.us-west-1.amazonaws.com/prod",              // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-taskapp.auth.us-west-1.amazoncognito.com",        // CognitoDomainName
  "redirect_url": "https://dev.d3m3sw6qylsxld.amplifyapp.com"                  // AmplifyURL
};

export default config;
