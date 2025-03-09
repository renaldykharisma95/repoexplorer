import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SearchInput from "./search-input.component";
import { IndexContext } from "@providers/index.providers";
import { IndexContextProps } from "@/interfaces/index-providers";

describe("SearchInput Component", () => {
  const mockSetValueSearch = vi.fn();
  const mockRefetch = vi.fn();
  const setUserMock = vi.fn();

  const mockContextValue: IndexContextProps = {
    listUserData: [],
    listRepoData: [],
    isErrorRepo: false,
    isErrorUser: false,
    isUserLoading: false,
    isRepoLoading: false,
    isFetchedAfterMount: false,
    setUser: setUserMock,
    setValueSearch: mockSetValueSearch,
    refetch: mockRefetch,
  };

  it("renders input and button", () => {
    render(
      <IndexContext.Provider value={mockContextValue}>
        <SearchInput />
      </IndexContext.Provider>
    );

    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("updates input field when user types", () => {
    render(
      <IndexContext.Provider value={mockContextValue}>
        <SearchInput />
      </IndexContext.Provider>
    );

    const input = screen.getByPlaceholderText("Enter username");
    fireEvent.change(input, { target: { value: "testuser" } });

    expect(mockSetValueSearch).toHaveBeenCalledTimes(1);
    expect(mockSetValueSearch).toHaveBeenCalledWith("testuser");
  });

  it("calls refetch when search button is clicked", () => {
    render(
      <IndexContext.Provider
        value={{ ...mockContextValue, valueSearch: "testuser" }}
      >
        <SearchInput />
      </IndexContext.Provider>
    );

    const button = screen.getByRole("button", { name: /search/i });
    fireEvent.click(button);

    expect(mockRefetch).toHaveBeenCalledTimes(1);
  });

  it("displays 'Showing users for' when a search term is entered", () => {
    render(
      <IndexContext.Provider
        value={{ ...mockContextValue, valueSearch: "testuser" }}
      >
        <SearchInput />
      </IndexContext.Provider>
    );

    expect(
      screen.getByText(/showing users for "testuser"/i)
    ).toBeInTheDocument();
  });
});
