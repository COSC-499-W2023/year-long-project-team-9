export function isEmailValid(email: string) {
  // Testing email via regular epxression (https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript)
  const emailRegularExpression =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const validateEmail = emailRegularExpression.test(email);
  console.log(validateEmail);
  if (validateEmail == false) {
    return false;
  }

  // test length of email
  const emailAsString = new String(email);
  const emailLength = emailAsString.length;
  if (emailLength > 320 || emailLength <= 0) {
    return false;
  }
  return true;
}
