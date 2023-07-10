import { rest } from "msw";

export const handlers = [
  rest.post("https://whereiapplied.onrender.com/users/login", (_, res, ctx) => {
    return res(
      ctx.json({
        body: {
          token: "abc123",
        },
      })
    );
  }),
  rest.get("https://whereiapplied.onrender.com/applications", (_, res, ctx) => {
    return res(
      ctx.json({
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
      })
    );
  }),
];
