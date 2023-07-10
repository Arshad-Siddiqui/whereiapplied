import server from "./server";
import { beforeAll, afterAll, afterEach } from "vitest";

const setup = () => {
  // Enable API mocking before tests.
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());
};

export default setup;
