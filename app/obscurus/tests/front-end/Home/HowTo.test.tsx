import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HowTo from "@/components/HowTo";

describe("HowTo Component", () => {
  beforeEach(() => {
    render(<HowTo />);
  });

  test("renders HowTo component with main heading", () => {
    expect(screen.getByText("How It Works")).toBeInTheDocument();
  });

  test("accordion items can be opened and show content", () => {
    // Open first accordion item
    fireEvent.click(screen.getByText("Step 1: Make a Request"));
    expect(screen.getByText(/Start by sending a private video request/i)).toBeInTheDocument();

    // Open second accordion item
    fireEvent.click(screen.getByText("Step 2: Record & Submit"));
    expect(screen.getByText(/Once the recipient receives the request/i)).toBeInTheDocument();

    // Open third accordion item
    fireEvent.click(screen.getByText("Step 3: Receive & View"));
    expect(screen.getByText(/After the sender submits the video/i)).toBeInTheDocument();
  });
});
