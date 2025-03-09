import { describe, it, expect } from "vitest";
import theme from "./themes";

describe("Chakra UI Theme", () => {
  it("should have the correct initial color mode", () => {
    expect(theme.config.initialColorMode).toBe("system");
  });

  it("should have useSystemColorMode set to false", () => {
    expect(theme.config.useSystemColorMode).toBe(false);
  });
});
