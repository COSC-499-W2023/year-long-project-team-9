import {
  getSub,
  isAuthenticated,
} from "@/auth/authMethods";
import {describe, expect, test} from '@jest/globals';

test("testing isAuthenticated()", () => {
  expect(isAuthenticated()).toBe(false);
});

test("testing getSub()", () => {
  expect(getSub()).toBe(false);
});

// test("testing getEmail()", () => {
//   expect(getEmail()).toBe(false);
// });
