import { expect } from "@playwright/test";
import { createRequestValidation } from "../../../src/create-request-form-validation/createRequestValidation";
import { formSchema } from "../../../src/app/CreateRequest/page";

test("testing createRequestValidation clients 1", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "@gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("testing createRequestValidation clients 2", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(true);
});

test("testing createRequestValidation clients 3", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "" }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("testing createRequestValidation clients 4", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@ubc.gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(true);
});

test("testing createRequestValidation clients 5", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [
      {
        value:
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com",
      },
    ],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("testing createRequestValidation clients 6", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{}],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("testing createRequestValidation clients 7", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
    ],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(true);
});

test("testing createRequestValidation clients 8", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
    ],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(true);
});

test("testing createRequestValidation clients 9", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
    ],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: data is null", () => {
  const localFormSchema: formSchema = null;
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: data is undefined", () => {
  const localFormSchema: formSchema = undefined;
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: stringTitle.length <= 0", () => {
  const localFormSchema: formSchema = {
    title: "",
    clients: [{ value: "bob@gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: stringTitle.length == 120", () => {
  const localFormSchema: formSchema = {
    title:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    clients: [{ value: "bob@gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(true);
});

test("Invalid: stringTitle.length > 120", () => {
  const localFormSchema: formSchema = {
    title:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    clients: [{ value: "bob@gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: stringTitle.length null", () => {
  const localFormSchema: formSchema = {
    title: null,
    clients: [{ value: "bob@gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: stringTitle.length undefined", () => {
  const localFormSchema: formSchema = {
    title: undefined,
    clients: [{ value: "bob@gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: stringDescripion <= 0", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }],
    description: "",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: stringDescripion null", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }],
    description: null,
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: stringDescripion undefined", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }],
    description: undefined,
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: Object.prototype.toString.call()", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: 2,
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: dueDate null", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: null,
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: dueDate undefined", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: undefined,
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: term false", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: false,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: term null", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: null,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: term undefined", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: undefined,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: language <= 0", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: language == 30", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(true);
});

test("Invalid: language == 30", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: language null", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: null,
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: language undefined", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: undefined,
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: blurred null", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }],
    description: "a",
    blurred: null,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: blurred undefined", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }],
    description: "a",
    blurred: undefined,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: clients undefined", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: undefined,
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: clients null", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: null,
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: value: null", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }, { value: null }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Invalid: value: undefined", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }, { value: undefined }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("testing createRequestValidation other", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
    ],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});

test("Doctor Meeting", () => {
  const localFormSchema: formSchema = {
    title: "Doctor Meeting",
    clients: [
      { value: "bob@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
      { value: "reddit@ubc.gmail.com" },
      { value: "bob@ubc.gmail.com" },
    ],
    description: "Show me!",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(true);
});

test("Spanish Lessons 1", () => {
  const localFormSchema: formSchema = {
    title: "Spanish Lessons 1",
    clients: [{ value: "daniel.woods@gmail.com" }],
    description:
      "Hello everyone,  For this week's Spanish lesson, please record a video of yourselves ordering three separate items from a fast food menu in Castilian Spanish.  For one of the three items, add a modification like extra cheese or no tomato.",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "English",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(true);
});

test("Spanish Lessons 2", () => {
  const localFormSchema: formSchema = {
    title: "Spanish Lessons 2",
    clients: [{ value: "daniel.woods@gmail.com" }],
    description:
      "Hello,  Continuing from last week's lesson, this week, please record a video of yourselves ordering three separate items from a traditional Spanish restaurant menu in Castilian Spanish.  For one of the three items, add a modification like extra sauce or no onions.",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "English",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(true);
});

test("Spanish Lessons 3", () => {
  const localFormSchema: formSchema = {
    title: "Spanish Lessons 3",
    clients: [{ value: "daniel.woods@gmail.com" }],
    description:
      "Hello all,  For the final lesson, please record a video of yourselves having a full conversation in a restaurant setting in Castilian Spanish.   Include greetings, ordering food, asking for recommendations, and thanking the staff.",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "English",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(true);
});

test("Spanish Lessons 3 v2", () => {
  const localFormSchema: formSchema = {
    title: "Spanish Lessons 3",
    clients: [{ value: "daniel.woods@gmail.com" }],
    description:
      "Hello all,  For the final lesson, please record a video of yourselves having a full conversation in a restaurant setting in Castilian Spanish.   Include greetings, ordering food, asking for recommendations, and thanking the staff.",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "Spanish ",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(true);
});

test("Invalid: stringDescripion == 500", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }],
    description:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(true);
});

test("Invalid: stringDescripion > 500", () => {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@gmail.com" }],
    description:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  expect(createRequestValidation(localFormSchema)).toBe(false);
});
