export function passwordCognitoDefaultRegularExpression(
  password: string
): boolean {
  // Testing password via regular epxression (https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript)
  const passwordRegularExpression =
    /^(?!\s+)(?!.*\s+$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$^*.[\]{}()?"!@#%&/\\,><':;|_~`=+\- ])[A-Za-z0-9$^*.[\]{}()?"!@#%&/\\,><':;|_~`=+\- ]{8,256}$/;
  const validatePassword = passwordRegularExpression.test(password);
  return validatePassword;
}
