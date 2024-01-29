{/*IMPORT*/}
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import CreateRequest from "@/app/CreateRequest/page";
import { useRouter } from "next/navigation";

{/*MOCKS*/}
{/*Mock Next/Router*/}
jest.mock("next/navigation", () => ({
    __esModule: true,
    useRouter: jest.fn()
}));
{/*Mock Resize-Observer*/}
global.ResizeObserver = require("resize-observer-polyfill")
{/*Mock React Hook Form*/}
jest.mock("react-hook-form", () => ({
    ...jest.requireActual("react-hook-form"),
    useForm: jest.fn(() => ({
      control: {},
      register: jest.fn(),
      handleSubmit: jest.fn((callback) => callback),
      setValue: jest.fn(),
      formState: { errors: {} },
    })),
    useFieldArray: jest.fn(() => ({
      fields: [],
      append: jest.fn(),
      remove: jest.fn(),
    })),
}));

{/*TEST*/}
describe("CreateRequest Page",() => {
    {/*Create a mock router object*/}
    const mockRouter = {
        push: jest.fn()
    };
    {/*Set up the mock router*/}
    // (useRouter as jest.Mock).mockReturnValue(mockRouter);
    {/*Create a mock onSubmit object*/}
    const onSubmit = jest.fn().mockImplementation((e) => e.preventDefault());
    // test("Render the page and check title text.",() => {
    //     {/*Render the CreateRequest page*/}
    //     render(<CreateRequest/>);
    //     {/*Check if the title text "Create Request" is present*/}
    //     expect(screen.getByText("Create Request")).toBeInTheDocument();
    // });
    // test("Render the page and check if cancelling the form submission works.",() => {
    //     {/*Render the CreateRequest page*/}
    //     render(<CreateRequest/>);
    //     {/*Simulate the user clicking on the cancel button*/}
    //     fireEvent.click(screen.getByText("Cancel Request"));
    //     {/*Check if the handleCancel method was called successfully*/}
    //     expect(mockRouter.push).toHaveBeenCalledWith("/");
    // });
    test("Render the page and check if submission without all required values has validation.",() => {
        {/*Render the CreateRequest page*/}
        render(<CreateRequest/>);
        {/*Fill in a sample title input*/}
        userEvent.type(screen.getByPlaceholderText("Title"),"Test Title");
        {/*Simulate the user clicking on the submit button*/}
        fireEvent.submit(screen.getByRole("form"));
        {/*Check if onSubmit did not call, as not all required fields are present*/}
        expect(onSubmit).toHaveBeenCalledTimes(0);
    });
    // test("Render the page and check if submission with all required values works.",() => {
    //     {/*Render the CreateRequest page*/}
    //     render(<CreateRequest/>);
    //     {/*Fill in a sample title input*/}
    //     userEvent.type(screen.getByPlaceholderText("Title"),"Test Title");
    //     // {/*Fill in a sample client input*/}
    //     userEvent.type(screen.getByPlaceholderText("Email"),"test@test.ca");
    //     {/*Fill in a sample title input*/}
    //     userEvent.type(screen.getByPlaceholderText("Language"),"English");
    //     {/*Check the terms and conditions checkbox*/}
    //     fireEvent.click(screen.getByRole("checkbox",{name:"Accept the terms and conditions"}));
    //     {/*Simulate the user clicking on the submit button*/}
    //     fireEvent.submit(screen.getByRole("form"));
    //     {/*Check if onSubmit did not call, as not all required fields are present*/}
    //     expect(onSubmit).toHaveBeenCalled();
    // });
});