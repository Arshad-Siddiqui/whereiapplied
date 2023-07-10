import login from "./login";
import { describe, it, beforeAll, afterAll, afterEach, expect } from "vitest";
import server from "../mocks/server";

describe("login", () => {
  setup();

  it("should return a token", async () => {
    const response = await login("email", "password");
    expect(response).toBe("abc123");
  });
});

const setup = () => {
  // Enable API mocking before tests.
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());
};
