import { PostAuthenticationTriggerEvent, Context } from "aws-lambda";

exports.main = async (
  event: PostAuthenticationTriggerEvent,
  context: Context
) => {
  console.log(JSON.stringify(event, null, 2));
  // Your logic here
  return event;
};
