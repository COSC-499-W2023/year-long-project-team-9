import { passwordCognitoDefaultRegularExpression } from "../../../regular-expression/passwordCognitoDefaultRegularExpression";

test("testing passwordCognitoDefaultRegularExpression 1", () => {
  expect(passwordCognitoDefaultRegularExpression(null)).toBe(false);
});

test("testing passwordCognitoDefaultRegularExpression undefined", () => {
  expect(passwordCognitoDefaultRegularExpression(undefined)).toBe(false);
});

test("testing passwordCognitoDefaultRegularExpression '' v1", () => {
  expect(passwordCognitoDefaultRegularExpression("")).toBe(false);
});

test('testing passwordCognitoDefaultRegularExpression "" v2', () => {
  expect(passwordCognitoDefaultRegularExpression("")).toBe(false);
});

test("testing passwordCognitoDefaultRegularExpression aaaaaaa", () => {
  expect(passwordCognitoDefaultRegularExpression("aaaaaaa")).toBe(false);
});

test("testing passwordCognitoDefaultRegularExpression aaaaaaa1", () => {
  expect(passwordCognitoDefaultRegularExpression("aaaaaaa1")).toBe(false);
});

test("testing passwordCognitoDefaultRegularExpression Aaaaaaa1@", () => {
  expect(passwordCognitoDefaultRegularExpression("Aaaaaaa1@")).toBe(true);
});

test("testing passwordCognitoDefaultRegularExpression Aaaaaaaa@", () => {
  expect(passwordCognitoDefaultRegularExpression("Aaaaaaaa@")).toBe(false);
});

test("testing passwordCognitoDefaultRegularExpression Aaaaaaaa1", () => {
  expect(passwordCognitoDefaultRegularExpression("Aaaaaaaa1")).toBe(false);
});

test("testing passwordCognitoDefaultRegularExpression AAAAAAAAAAA1@", () => {
  expect(passwordCognitoDefaultRegularExpression("AAAAAAAAAAA1@")).toBe(false);
});

test("testing passwordCognitoDefaultRegularExpression # char == 100", () => {
  expect(
    passwordCognitoDefaultRegularExpression(
      "a@A111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    )
  ).toBe(true);
});

test("testing passwordCognitoDefaultRegularExpression # char == 255", () => {
  expect(
    passwordCognitoDefaultRegularExpression(
      "a@A111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    )
  ).toBe(true);
});

test("testing passwordCognitoDefaultRegularExpression # char > 255", () => {
  expect(
    passwordCognitoDefaultRegularExpression(
      "a@A111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    )
  ).toBe(false);
});

/*



test("testing passwordCognitoDefaultRegularExpression #", () => {
    expect(passwordCognitoDefaultRegularExpression()).toBe();
  });
 
  */
