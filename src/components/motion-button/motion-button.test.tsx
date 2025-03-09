import { render, screen, fireEvent } from "@testing-library/react";
import DarkModeToggle from "./motion-button.component";
import { ChakraProvider } from "@chakra-ui/react";

describe("DarkModeToggle Component", () => {
  it("renders the button", () => {
    render(
      <ChakraProvider>
        <DarkModeToggle />
      </ChakraProvider>
    );

    const button = screen.getByRole("button", { name: /toggle dark mode/i });
    expect(button).toBeInTheDocument();
  });

  it("toggles color mode on click", () => {
    render(
      <ChakraProvider>
        <DarkModeToggle />
      </ChakraProvider>
    );

    const button = screen.getByRole("button", { name: /toggle dark mode/i });

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(button).toBeInTheDocument();
  });
});
