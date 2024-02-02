import {
  getSub,
  isAuthenticated,
} from "../../../auth/authMethods";

test("testing isAuthenticated()", () => {
  expect(isAuthenticated()).toBe(false);
});

test("testing getSub()", () => {
  expect(getSub()).toBe(false);
});

// test("testing getEmail()", () => {
//   expect(getEmail()).toBe(false);
// });
