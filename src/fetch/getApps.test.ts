import getApps from "./getApps";
import { describe, it, expect } from "vitest";
import setupFetchMocks from "../mocks/setupFetchMocks";

describe("getApps", () => {
  setupFetchMocks();

  it("should return a list of apps", async () => {
    const response = await getApps();
    console.log(response.body.applications);
    expect(response).toEqual({
      body: {
        applications: [
          {
            _id: "64708d3b403528a8aecada91",
            applied: true,
            name: "Octopus Energy",
            status: "Rejected",
            website: "https://octopus.energy/",
          },
          {
            _id: "64708d3b403528a8aecada92",
            applied: true,
            name: "Starling Bank",
            status: "Accepted",
            website: "https://starlingbank.com/",
          },
        ],
      },
    });
  });
});
