import login from "./login";
import { describe, it, expect } from "vitest";
import setupFetchMocks from "../mocks/setupFetchMocks";

describe("login", () => {
  setupFetchMocks();

  it("should return a token", async () => {
    const response = await login("email", "password");
    expect(response.body.token).toBe("abc123");
  });
});
