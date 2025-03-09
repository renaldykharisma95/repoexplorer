import { describe, it, expect, vi } from "vitest";
import get from "@services/base-service";
import { GetListUser, GetListRepo } from "@services/get-data.api";

vi.mock("@services/base-service");

describe("API functions", () => {
  it("GetListUser fetches user list successfully", async () => {
    const mockUserData = { items: [{ login: "testuser" }] };
    (get as any).mockResolvedValueOnce(mockUserData);

    const result = await GetListUser("test");

    expect(result).toEqual(mockUserData);
    expect(get).toHaveBeenCalledWith("/search/users?q=test&per_page=5");
  });
  it("GetListRepo fetches repositories successfully", async () => {
    const mockRepoData = [{ name: "repo1" }, { name: "repo2" }];
    (get as any).mockResolvedValueOnce(mockRepoData);

    const result = await GetListRepo("testuser");

    expect(result).toEqual(mockRepoData);
    expect(get).toHaveBeenCalledWith("/users/testuser/repos");
  });
});
