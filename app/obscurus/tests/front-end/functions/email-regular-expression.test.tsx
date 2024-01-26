import { isEmailValid } from "../../../src/regular-expression/email-regular-expression";

test("testing isEmailValid 1", () => {
  expect(isEmailValid("Jan@student.ubc.ca")).toBe(true);
});

test("testing isEmailValid 2", () => {
  expect(isEmailValid("SorenS54@hotmail.com")).toBe(true);
});

test("testing isEmailValid 3", () => {
  expect(isEmailValid("bob@student.ubc.ca")).toBe(true);
});

test("testing isEmailValid 4", () => {
  expect(isEmailValid("bob@gmail.com")).toBe(true);
});

test("testing isEmailValid 5", () => {
  expect(isEmailValid("")).toBe(false);
});

test("testing isEmailValid 6", () => {
  expect(
    isEmailValid(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com"
    )
  ).toBe(false);
});
