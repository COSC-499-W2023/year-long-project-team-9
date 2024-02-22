import React from "react";
import { render, screen } from "@testing-library/react";
import Features from "@/components/Features";
import "@testing-library/jest-dom";

jest.mock("aos", () => ({
  init: jest.fn(), // Mock AOS initialization
}));

describe("Features Component", () => {
  beforeEach(() => {
    render(<Features />);
  });

  test("renders the features cards with correct text", () => {
    // Check if key texts are present
    expect(screen.getByText("Private Video Requests")).toBeInTheDocument();
    expect(screen.getByText("Seamless Video Submission")).toBeInTheDocument();
    expect(screen.getByText("User Privacy Protection")).toBeInTheDocument();

    // Check if descriptions are present
    expect(screen.getByText(/Initiate confidential conversations/i)).toBeInTheDocument();
    expect(screen.getByText(/Respondents can easily record/i)).toBeInTheDocument();
    expect(screen.getByText(/Our advanced face-blurring technology/i)).toBeInTheDocument();
  });

});
