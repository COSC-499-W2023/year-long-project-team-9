import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RequestListing from "@/pages/MyRequests";

jest.mock("aos", () => ({
  init: jest.fn(), // Mock AOS initialization
}));

describe("Features Component", () => {
  beforeEach(() => {
    render(<RequestListing />);
  });

  test("Render page and check features.",() => {
  //check title
    expect(screen.getByText("My Requests")).toBeInTheDocument();
    //check searchbar 
    //expect(screen.getByText(/search/i)).toBeInTheDocument();
    //check sorting options
    expect(screen.getByText("Oldest")).toBeInTheDocument();
    expect(screen.getByText("Edited")).toBeInTheDocument();
    expect(screen.getByText("Overdue")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
    //checks for request listings
   // expect(screen.getByText(/Spanish Lessons/i)).toBeInTheDocument();
    
});

});