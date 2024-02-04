import { Context } from "aws-lambda";

export async function main(event: any, context: Context) {
  console.log("Pre-Sign Up Authentication Trigger");
  return event;
}
