// Hero.test.tsx
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Hero from "@/components/Hero";
import '@testing-library/jest-dom'

describe("Hero Component", () => {
  test("renders the hero component and toggles blur", () => {
    render(<Hero />);


    // expect(screen.getByText(/Communicate Privately, Share Confidently./i)).toBeInTheDocument();
    // expect(screen.getByText(/Experience seamless face blurring and video deliviery with obscurus./i)).toBeInTheDocument();


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
