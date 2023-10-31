// Hero.test.tsx
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Hero from "@/pages/Hero";
import '@testing-library/jest-dom'

describe("Hero Component", () => {
  test("renders the hero component and toggles blur", () => {
    render(<Hero />);

    // expect(screen.getByText(/Protect Privacy with a Single Click./i)).toBeInTheDocument();
    // expect(screen.getByText(/Securely Blur Faces in Your Videos/i)).toBeInTheDocument();

    const blurredElement = document.querySelector('.opacity-0');
    expect(blurredElement).toBeInTheDocument();

    const notBlurredTab = screen.getByText("Not Blurred");
    fireEvent.click(notBlurredTab);

    expect(document.querySelector('.opacity-0')).not.toBeInTheDocument();

    const blurredTab = screen.getByText("Blurred");
    fireEvent.click(blurredTab);

    expect(document.querySelector('.opacity-0')).toBeInTheDocument();
  });
});
