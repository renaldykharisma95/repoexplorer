import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import ListComponent from "./list-user.component";
import { IndexContext } from "@providers/index.providers";
import { mockRepos, mockUsers } from "@/mockdata";

vi.mock("@chakra-ui/react", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@chakra-ui/react")>();
  return {
    ...actual,
    useColorModeValue: vi.fn(() => "gray.200"),
    Accordion: ({ children }: any) => (
      <div data-testid="accordion">{children}</div>
    ),
    AccordionItem: ({ children }: any) => (
      <div data-testid="accordion-item">{children}</div>
    ),
    AccordionButton: ({ children, onClick }: any) => (
      <button data-testid="accordion-button" onClick={onClick}>
        {children}
      </button>
    ),
    AccordionPanel: ({ children }: any) => (
      <div data-testid="accordion-panel">{children}</div>
    ),
    AccordionIcon: () => <span data-testid="accordion-icon">🔽</span>,
  };
});

vi.mock("@/components/loading/loading.component", () => ({
  default: () => <div data-testid="loading">Loading...</div>,
}));

vi.mock("@/components/empty-state/empty-state.component", () => ({
  default: ({ isError }: { isError: boolean }) => (
    <div data-testid="empty-state">
      {isError ? "Error occurred" : "No data found"}
    </div>
  ),
}));

describe("ListComponent", () => {
  const setUserMock = vi.fn();
  const refetchMock = vi.fn();

  const mockContextValue = {
    listUserData: [],
    listRepoData: [],
    isErrorRepo: false,
    isErrorUser: false,
    isUserLoading: false,
    isRepoLoading: false,
    isFetchedAfterMount: false,
    setUser: setUserMock,
    refetch: refetchMock,
  };

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders loading state when isUserLoading is true", () => {
    render(
      <IndexContext.Provider
        value={{
          ...mockContextValue,
          listUserData: mockUsers,
          isUserLoading: true,
          isFetchedAfterMount: true,
        }}
      >
        <ListComponent />
      </IndexContext.Provider>
    );

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("renders loading state when isRepoLoading is true", () => {
    render(
      <IndexContext.Provider
        value={{
          ...mockContextValue,
          isRepoLoading: true,
          listUserData: mockUsers,
          listRepoData: mockRepos,
          isFetchedAfterMount: true,
        }}
      >
        <ListComponent />
      </IndexContext.Provider>
    );

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("renders empty state when no users are found after fetch", () => {
    render(
      <IndexContext.Provider
        value={{ ...mockContextValue, isFetchedAfterMount: true }}
      >
        <ListComponent />
      </IndexContext.Provider>
    );

    expect(screen.getByTestId("empty-state")).toHaveTextContent(
      "No data found"
    );
  });

  it("does not render empty state when listUserData is empty and isFetchedAfterMount is false", () => {
    render(
      <IndexContext.Provider
        value={{
          ...mockContextValue,
          listUserData: [],
          isFetchedAfterMount: false,
        }}
      >
        <ListComponent />
      </IndexContext.Provider>
    );

    expect(screen.queryByTestId("empty-state")).not.toBeInTheDocument();
  });

  it("renders user list correctly", () => {
    render(
      <IndexContext.Provider
        value={{
          ...mockContextValue,
          listUserData: mockUsers,
          isFetchedAfterMount: true,
        }}
      >
        <ListComponent />
      </IndexContext.Provider>
    );

    expect(screen.getByText(mockUsers[0].login)).toBeInTheDocument();
  });

  it("calls setUser when a user is clicked", () => {
    render(
      <IndexContext.Provider
        value={{
          ...mockContextValue,
          isFetchedAfterMount: true,
          listUserData: mockUsers,
        }}
      >
        <ListComponent />
      </IndexContext.Provider>
    );

    const userButtons = screen.getAllByTestId("accordion-button");
    fireEvent.click(userButtons[0]);

    expect(setUserMock).toHaveBeenCalledTimes(1);
    expect(setUserMock).toHaveBeenCalledWith(mockUsers[0].login);
  });

  it("renders repositories when available", () => {
    render(
      <IndexContext.Provider
        value={{
          ...mockContextValue,
          listUserData: mockUsers,
          listRepoData: mockRepos,
          isErrorRepo: false,
          isFetchedAfterMount: true,
        }}
      >
        <ListComponent />
      </IndexContext.Provider>
    );

    expect(screen.getByText(mockRepos[0].name)).toBeInTheDocument();
  });

  it("renders empty state when no repositories are found", () => {
    render(
      <IndexContext.Provider
        value={{
          ...mockContextValue,
          listUserData: mockUsers,
          listRepoData: [],
          isFetchedAfterMount: true,
        }}
      >
        <ListComponent />
      </IndexContext.Provider>
    );

    expect(screen.getByTestId("empty-state")).toHaveTextContent(
      "No data found"
    );
  });

  it("renders empty state when repositories are missing and isErrorRepo is true", () => {
    render(
      <IndexContext.Provider
        value={{
          ...mockContextValue,
          listUserData: mockUsers,
          listRepoData: [],
          isErrorRepo: true,
          isFetchedAfterMount: true,
        }}
      >
        <ListComponent />
      </IndexContext.Provider>
    );

    expect(screen.getByTestId("empty-state")).toHaveTextContent(
      "Error occurred"
    );
  });

  it("handles case when listUserData is not an array", () => {
    render(
      <IndexContext.Provider
        value={{
          ...mockContextValue,
          listUserData: null,
          isFetchedAfterMount: false,
        }}
      >
        <ListComponent />
      </IndexContext.Provider>
    );

    expect(screen.queryByTestId("empty-state")).not.toBeInTheDocument();
  });
});
