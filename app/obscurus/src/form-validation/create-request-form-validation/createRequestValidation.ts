import { isEmailValid } from "../../regular-expression/email-regular-expression";
import { formSchema } from "../../pages/CreateRequest";

export function createRequestValidation(data: formSchema): boolean {
  // checking if data is a valid formSchema type
  if (data === null || data === undefined || !data.clients) {
    return false;
  }

  // setting up vars
  const title = data.title;
  const stringTitle = new String(title);

  const description = data.description;
  const stringDescripion = new String(description);

  const dueDate = data.dueDate;

  const terms = data.terms;

  const language = data.language;
  const stringLanguage = new String(language);

  const processing = data.blurred;

  const numberOfEmails = data.clients.length;

  // checking title
  if (
    stringTitle.length <= 0 ||
    stringTitle.length > 120 ||
    title === null ||
    title === undefined
  ) {
    return false;
  }
  console.log("title");
  // checking descripion
  if (
    stringDescripion.length <= 0 ||
    stringDescripion.length > 500 ||
    description === null ||
    description === undefined
  ) {
    return false;
  }
  console.log("des");
  // check due date
  if (
    Object.prototype.toString.call(dueDate) !== "[object Date]" ||
    dueDate === null ||
    dueDate === undefined
  ) {
    return false;
  }
  console.log("due");
  // check if terms were accepted
  if (terms == false || terms == null) {
    return false;
  }
  console.log("terms");
  // check language
  if (
    stringLanguage.length <= 0 ||
    stringLanguage.length > 30 ||
    language === null ||
    language === undefined
  ) {
    return false;
  }
  console.log("language");
  // check if terms were accepted
  if (processing === null || processing === undefined) {
    return false;
  }
  console.log("processing");
  // checking emials
  if (numberOfEmails <= 0 || numberOfEmails > 10) {
    return false;
  }
  for (let i = 0; i < numberOfEmails; i++) {
    if (data.clients.at(i)?.value === undefined) {
      return false;
    }
    // the above codition makes sure that data.clients.at(i) is not undefined
    const emailValid = isEmailValid(data.clients.at(i).value);
    if (emailValid === false) {
      return false;
    }
  }
  console.log("email");
  return true;
}
