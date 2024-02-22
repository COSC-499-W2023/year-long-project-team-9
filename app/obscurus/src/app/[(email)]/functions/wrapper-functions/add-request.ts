import { formSchema } from "../../../../components/CreateRequest";
import { createRequestValidation } from "@/app/[(email)]/functions/createRequestValidation";

export function addRequest(data: formSchema): boolean {
  const isDataValid = createRequestValidation(data);
  if (isDataValid === false) {
    return false;
  }
  // TODO: add a function that adds to database

  // TODO: add async function to send emails
  return true;
}
