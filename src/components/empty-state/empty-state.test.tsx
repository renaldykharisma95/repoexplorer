import { render, screen } from "@testing-library/react";
import EmptyState from "./empty-state.component";
import { vi } from "vitest";

vi.mock("../../assets/notfound.webp", () => ({
  default: "mock-notfound-url",
}));
vi.mock("../../assets/404.webp", () => ({
  default: "mock-error-url",
}));

describe("EmptyState Component", () => {
  test("renders 'Data is Not Found' when isError is false", () => {
    render(<EmptyState size="100px" isError={false} />);

    const heading = screen.getByText("Data is Not Found");
    expect(heading).toBeInTheDocument();
  });

  test("renders correct image when isError is false", () => {
    render(<EmptyState size="100px" isError={false} />);

    const image = screen.getByAltText("not-found");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "mock-notfound-url");
  });

  test("renders correct image when isError is true", () => {
    render(<EmptyState size="100px" isError={true} />);

    const image = screen.getByAltText("not-found");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "mock-error-url");
  });
});
