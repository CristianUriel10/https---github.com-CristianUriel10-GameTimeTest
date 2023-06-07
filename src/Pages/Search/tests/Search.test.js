import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";

import Search from "../Search";
import { actionSearch } from "../../../Redux/Search/search.actions";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("../../../Redux/Search/search.actions", () => ({
  actionSearch: jest.fn(),
}));

describe("Search component", () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue([]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("dispatches actionSearch on input change", () => {
    const mockDispatch = useDispatch();
    const mockData = [];
    useSelector.mockReturnValue(mockData);

    const { getByTestId } = render(<Search />);
    const inputElement = getByTestId("search-input");

    fireEvent.change(inputElement, { target: { value: "example" } });

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch).toHaveBeenCalledWith(actionSearch("example"));
  });
});
