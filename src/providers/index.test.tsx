import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IndexContext } from "./index.providers";
import IndexProviders from "./index.providers";
import { GetListUser, GetListRepo } from "@services/get-data.api";
import { mockRepos, mockUsers } from "@/mockdata";

vi.mock("@services/get-data.api", () => ({
  GetListUser: vi.fn(),
  GetListRepo: vi.fn(),
}));

describe("IndexProviders", () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("provides the default values", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <IndexProviders>
          <IndexContext.Consumer>
            {(context) => (
              <>
                <p data-testid="valueSearch">{context.valueSearch}</p>
                <p data-testid="isErrorUser">{String(context.isErrorUser)}</p>
                <p data-testid="isErrorRepo">{String(context.isErrorRepo)}</p>
                <p data-testid="listUserData">
                  {JSON.stringify(context.listUserData)}
                </p>
              </>
            )}
          </IndexContext.Consumer>
        </IndexProviders>
      </QueryClientProvider>
    );

    expect(screen.getByTestId("valueSearch").textContent).toBe("");
    expect(screen.getByTestId("isErrorUser").textContent).toBe("false");
    expect(screen.getByTestId("isErrorRepo").textContent).toBe("false");
    expect(screen.getByTestId("listUserData").textContent).toBe("[]");
  });

  it("fetches user data when refetch is called", async () => {
    (GetListUser as any).mockResolvedValue({ items: mockUsers });

    render(
      <QueryClientProvider client={queryClient}>
        <IndexProviders>
          <IndexContext.Consumer>
            {(context) => (
              <>
                <button onClick={() => context.refetch()}>Fetch Users</button>
                <p data-testid="listUserData">
                  {JSON.stringify(context.listUserData)}
                </p>
              </>
            )}
          </IndexContext.Consumer>
        </IndexProviders>
      </QueryClientProvider>
    );

    fireEvent.click(screen.getByText("Fetch Users"));

    await waitFor(() => expect(GetListUser).toHaveBeenCalled());
  });

  it("fetches repo data when user is set", async () => {
    (GetListRepo as any).mockResolvedValue(mockRepos);

    render(
      <QueryClientProvider client={queryClient}>
        <IndexProviders>
          <IndexContext.Consumer>
            {(context) => (
              <>
                <button onClick={() => context.setUser?.("testuser")}>
                  Set User
                </button>
              </>
            )}
          </IndexContext.Consumer>
        </IndexProviders>
      </QueryClientProvider>
    );

    fireEvent.click(screen.getByText("Set User"));

    await waitFor(() => expect(GetListRepo).toHaveBeenCalledWith("testuser"));
  });

  it("sets listUserData to an empty array when valueSearch is empty", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <IndexProviders>
          <IndexContext.Consumer>
            {(context) => (
              <>
                <button onClick={() => context.setValueSearch?.("")}>
                  Clear Search
                </button>
                <p data-testid="listUserData">
                  {JSON.stringify(context.listUserData)}
                </p>
              </>
            )}
          </IndexContext.Consumer>
        </IndexProviders>
      </QueryClientProvider>
    );

    fireEvent.click(screen.getByText("Clear Search"));

    await waitFor(() =>
      expect(screen.getByTestId("listUserData").textContent).toBe("[]")
    );
  });

  it("sets listUserData to null when valueSearch is non-empty and isSuccess is false", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <IndexProviders>
          <IndexContext.Consumer>
            {(context) => (
              <>
                <button
                  onClick={() => {
                    context.setValueSearch?.("query");
                  }}
                >
                  Set Search
                </button>
                <p data-testid="listUserData">
                  {JSON.stringify(context.listUserData)}
                </p>
              </>
            )}
          </IndexContext.Consumer>
        </IndexProviders>
      </QueryClientProvider>
    );

    fireEvent.click(screen.getByText("Set Search"));

    await waitFor(() =>
      expect(screen.getByTestId("listUserData").textContent).toBe("null")
    );
  });
});
