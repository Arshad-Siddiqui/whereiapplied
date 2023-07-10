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
];
