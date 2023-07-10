import getApps from "./getApps";
import { describe, it, expect } from "vitest";
import setupFetchMocks from "../mocks/setupFetchMocks";

describe("getApps", () => {
  setupFetchMocks();

  it("should return a list of apps", async () => {
    const response = await getApps();
    expect(response).toEqual([
      {
        _id: "646f626d197fcbe871a19ec4",
        applied: true,
        name: "Canonical",
        status: "Rejected",
        website: "https://canonical.com/",
      },
      {
        _id: "646f8aa0197fcbe871a19ec5",
        applied: true,
        name: "Viable Data",
        status: "Rejected",
        website: "https://www.viabledata.co.uk/",
      },
    ]);
  });
});
