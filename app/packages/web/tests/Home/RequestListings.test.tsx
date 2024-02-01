import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RequestListing from "@/components/MyRequests";

jest.mock("aos", () => ({
  init: jest.fn(), 
}));

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn()
}));

describe("Features Component", () => {
  beforeEach(() => {
    render(<RequestListing />);
  });

  test("Render page and check features.", () => {
    //check title
    // expect(screen.getByText("My Requests")).toBeInTheDocument();
    
    //check searchbar exists
    expect(document.querySelector('#searchbar')).not.toBeNull();
    expect(document.querySelector('#searchInput')).not.toBeNull();
    expect(document.querySelector('#searchButton')).not.toBeNull();

    //check sorting options exists
    expect(screen.getByText("Oldest")).toBeInTheDocument();
    expect(screen.getByText("Edited")).toBeInTheDocument();
    expect(screen.getByText("Overdue")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();

    //checks for request listings table 
    expect(document.querySelector('#requestsTbl')).not.toBeNull();
    expect(document.querySelector('#requestsTblRow')).not.toBeNull();
    expect(document.querySelector('#requestsTblCell')).not.toBeNull();
    expect(document.querySelector('#requestTitle')?.textContent?.trim()).toBeTruthy();
    expect(document.querySelector('#prevClient')?.textContent?.trim()).toBeTruthy();    
    expect(document.querySelector('#prevDescAndData')).not.toBeNull();
    expect(document.querySelector('#prevDesc')?.textContent?.trim()).toBeTruthy();

    //check submit button
    expect(document.querySelector('#submitButton')).not.toBeNull();
  });

});