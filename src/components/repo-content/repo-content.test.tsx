import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import RepoContent from "./repo-content.component";

describe("RepoContent Component", () => {
  it("renders the repository name, description, and stargazer count", () => {
    render(
      <RepoContent
        name="Test Repo"
        description="This is a test repo."
        stargazers_count={10}
      />
    );

    expect(screen.getByText("Test Repo")).toBeInTheDocument();
    expect(screen.getByText("This is a test repo.")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("displays 'No description' when no description is provided", () => {
    render(
      <RepoContent name="Test Repo" description="" stargazers_count={5} />
    );

    expect(screen.getByText("No description")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("displays 0 stars when stargazers_count is not provided", () => {
    render(
      <RepoContent
        name="Test Repo"
        description="Another repo"
        stargazers_count={0}
      />
    );

    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
