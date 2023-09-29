import React from "react";
import { cleanup, render } from "@testing-library/react";
import NavBar from "./Navbar";

afterEach(() => {
  cleanup();
});

describe("NavBar Tests", () => {
  test("test logo", () => {
    const { getByTestId } = render(<NavBar />);
    expect(getByTestId(`navLogo`)).toBeTruthy();
  });

  test("test mobile nav menu", () => {
    const { getByTestId } = render(<NavBar />);
    expect(getByTestId(`mobile`)).toBeTruthy();
  });
});
