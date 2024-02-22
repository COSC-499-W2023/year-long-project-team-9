// ref: https://gist.github.com/cjaoude/fd9910626629b53c4d25
import { isEmailValid } from "../app/functions/regular-expression/emailRegularExpression";

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

test("testing valid email 1", () => {
  expect(isEmailValid("email@example.com")).toBe(true);
});

test("testing valid email 2", () => {
  expect(isEmailValid("firstname.lastname@example.com")).toBe(true);
});

test("testing valid email 3", () => {
  expect(isEmailValid("email@subdomain.example.com")).toBe(true);
});

test("testing valid email 4", () => {
  expect(isEmailValid("firstname+lastname@example.com")).toBe(true);
});

test("testing valid email 5", () => {
  expect(isEmailValid("email@123.123.123.123")).toBe(true);
});

test("testing valid email 6", () => {
  expect(isEmailValid("1234567890@example.com")).toBe(true);
});

test("testing valid email 7", () => {
  expect(isEmailValid("email@example-one.com")).toBe(true);
});

test("testing valid email 8", () => {
  expect(isEmailValid("_______@example.com")).toBe(true);
});

test("testing valid email 9", () => {
  expect(isEmailValid("email@example.name")).toBe(true);
});

test("testing valid email 10", () => {
  expect(isEmailValid("email@example.museum")).toBe(true);
});

test("testing valid email 11", () => {
  expect(isEmailValid("email@example.co.jp")).toBe(true);
});

test("testing valid email 12", () => {
  expect(isEmailValid("firstname-lastname@example.com")).toBe(true);
});
