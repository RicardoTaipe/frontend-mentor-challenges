import { rest } from "msw";

export const handlers = [
  rest.get("https://api.adviceslip.com/advice", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ greeting: "hello there" }));
  }),
];
