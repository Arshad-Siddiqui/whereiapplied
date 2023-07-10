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
      ctx.json([
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
      ])
    );
  }),
];
