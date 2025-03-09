import { describe, it, expect, vi } from "vitest";
import axiosInstance from "@services/base-connection";
import get from "@services/base-service";

vi.mock("@services/base-connection");

describe("get function", () => {
  it("returns data on successful request", async () => {
    const mockResponse = { data: { message: "Success" } };
    (axiosInstance.get as any).mockResolvedValueOnce(mockResponse);

    const result = await get<{ message: string }>("/test-endpoint");

    expect(result).toEqual(mockResponse.data);
    expect(axiosInstance.get).toHaveBeenCalledWith(
      encodeURI("/test-endpoint"),
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: expect.stringContaining("token"),
        }),
      })
    );
  });

  it("returns an error message on failure", async () => {
    (axiosInstance.get as any).mockRejectedValueOnce({
      message: "An error occurred",
      status: "error",
    });

    const result = await get<{ message: string }>("/test-endpoint");

    expect(result).toStrictEqual({
      message: "An error occurred",
      status: "error",
    });
    expect(axiosInstance.get).toHaveBeenCalledWith(
      encodeURI("/test-endpoint"),
      expect.any(Object)
    );
  });

  it("returns a generic error message for unknown errors", async () => {
    (axiosInstance.get as any).mockRejectedValueOnce({
      message: "An error occurred",
      status: "error",
    });

    const result = await get<{ message: string }>("/test-endpoint");

    expect(result).toStrictEqual({
      message: "An error occurred",
      status: "error",
    });
  });
});
