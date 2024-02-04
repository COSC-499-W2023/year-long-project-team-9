import { PostAuthenticationTriggerEvent, Context } from "aws-lambda";

export async function main(
  event: PostAuthenticationTriggerEvent,
  context: Context
) {
  console.log("Post Authentication Trigger");

  return event;
}
