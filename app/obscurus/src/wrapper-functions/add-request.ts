import { formSchema } from "../pages/CreateRequest";
import { createRequestValidation } from "../form-validation/create-request-form-validation/createRequestValidation";
import { sendDataToLambda } from "@/pages/api/request";
import { Api } from "sst/node/api";

export function addRequest(data: formSchema): boolean {
  const isDataValid = createRequestValidation(data);
  if (isDataValid === false) {
    return false;
  }
  // TODO: add a function that adds to database
  const sendData = sendDataToLambda(JSON.stringify(data));
  console.log(sendData);

  // TODO: add async function to send emails
  return true;
}

export function addRequestToDatabase(data: string): boolean {
  return true;
}
