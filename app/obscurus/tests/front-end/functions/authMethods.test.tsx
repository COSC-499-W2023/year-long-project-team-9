import {
  getEmail,
  getSub,
  isAuthenticated,
} from "../../../src/app/auth/authMethods";

test("testing isAuthenticated()", () => {
  expect(isAuthenticated()).toBe(false);
});

test("testing getSub()", () => {
  expect(getSub()).toBe(false);
});

// test("testing getEmail()", () => {
//   expect(getEmail()).toBe(false);
// });
