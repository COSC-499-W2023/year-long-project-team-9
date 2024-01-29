import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Messages from "@/pages/messages";

jest.mock("aos", () => ({
  init: jest.fn(), // Mock AOS initialization
}));

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn()
}));

describe("Features Component", () => {
  beforeEach(() => {
    render(<Messages/>);
  });

  test("Render page and check features.",() => {
    // check if table listing messages and subelements exists (aren't null)
    expect(document.querySelector('#messageTbl')).not.toBeNull();
    expect(document.querySelector('#messageTblRow')).not.toBeNull();
    expect(document.querySelector('#messageTblRow')).not.toBeNull();
    expect(document.querySelector('#messagePreview')).not.toBeNull();

    // check that expected text exists
    expect(document.querySelector('#messageTitle')?.textContent?.trim()).toBeTruthy();
    //expect(document.querySelector('#messageDate')?.textContent?.trim()).toBeTruthy();
    expect(document.querySelector('#messageInfo')?.textContent?.trim()).toBeTruthy();
    
    // check if messages card (right) and subelements exist/have text
    expect(document.querySelector('#messageCard')).not.toBeNull();
    expect(document.querySelector('#messageSender')?.textContent?.trim()).toBeTruthy();
    expect(document.querySelector('#messageEmail')?.textContent?.trim()).toBeTruthy();
    expect(document.querySelector('#message1')?.textContent?.trim()).toBeTruthy();
    expect(document.querySelector('#message2')?.textContent?.trim()).toBeTruthy();
    expect(document.querySelector('#textbox')).not.toBeNull();
});

});