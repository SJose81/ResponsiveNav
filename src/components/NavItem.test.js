import React from "react";
import { cleanup, render } from "@testing-library/react";
import NavItem from "./NavItem";

afterEach(() => {
  cleanup();
});

describe("NavItem", () => {
  const item = {
    title: "DOG",
    url: "index.html",
    cName: "nav-links"
  };

  test("Displays a List item", () => {
    const { getByTestId } = render(<NavItem index={`0`} item={item} />);
    expect(getByTestId(`navLink-0`).textContent).toBe("DOG");
  });
});
