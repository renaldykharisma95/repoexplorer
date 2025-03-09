import { render, screen } from "@testing-library/react";
import Loading from "./loading.component";

describe("Loading Component", () => {
  it("renders five Skeleton components", () => {
    render(<Loading />);    
    expect(screen.getAllByRole("loadingcontent")).toHaveLength(5);
  });
});
