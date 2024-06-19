import Page from "../page.jsx";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("../viewpets/page", () => () => (
  <div>HomeView Component</div>
));

describe("Page", () => {
  it("renders HomeView component", () => {
    // Render the Page component
    render(<Page />);

    // Check if HomeView component is rendered
    expect(screen.getByText("HomeView Component")).toBeInTheDocument();
  });
});
