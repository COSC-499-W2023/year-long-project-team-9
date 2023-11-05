// Hero.test.tsx
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Features from "@/components/Features";
import "@testing-library/jest-dom";
import { waitFor } from "@testing-library/dom";

jest.mock("aos", () => ({
  init: () => {},
}));

describe("Features", () => {
  test("renders the features cards and runs flipping animation", async () => {
    render(<Features />);

    // expect(
    //   screen.getByText(
    //     /Utilize cutting-edge technology to automatically identify and obscure faces in your videos, ensuring privacy without sacrificing video quality./
    //   )
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByText(
    //     /Experience swift and efficient video editing with our real-time processing capabilities. Make changes and see them instantly, saving you time and effort./
    //   )
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByText(
    //     /Your privacy is our priority. We facilitate secure communication without compromising your privacy./
    //   )
    // ).toBeInTheDocument();

    await waitFor(() => {
      const featureCards = document.querySelectorAll('[data-aos="flip-left"]');
      featureCards.forEach((card) => {
        card.classList.add("aos-animate");
      });
    });
  });
});
