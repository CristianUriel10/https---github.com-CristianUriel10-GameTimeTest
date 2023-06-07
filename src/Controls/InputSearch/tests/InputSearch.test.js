import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputSearch from "../InputSearch";

describe("InputSearch", () => {
  it("renders the input field", () => {
    render(<InputSearch onChange={() => {}} data={[]} value="" />);
    const inputElement = screen.getByTestId("search-input");
    expect(inputElement).toBeInTheDocument();
  });

  it("triggers the onChange callback when input value changes", () => {
    const handleChange = jest.fn();
    render(<InputSearch onChange={handleChange} data={[]} value="" />);
    const inputElement = screen.getByTestId("search-input");
    fireEvent.change(inputElement, { target: { value: "example" } });
    expect(handleChange).toHaveBeenCalledWith("example");
  });

  it("renders the BoxResults component when there is a value", () => {
    const testData = [
      { id: 1, name: "Result 1" },
      { id: 2, name: "Result 2" },
    ];
    render(<InputSearch onChange={() => {}} data={testData} value="example" />);
    const boxResultsElement = screen.getByTestId("box-results");
    expect(boxResultsElement).toBeInTheDocument();
  });

  it("does not render the BoxResults component when there is no value", () => {
    render(<InputSearch onChange={() => {}} data={[]} value="" />);
    const boxResultsElement = screen.queryByTestId("box-results");
    expect(boxResultsElement).not.toBeInTheDocument();
  });
});
