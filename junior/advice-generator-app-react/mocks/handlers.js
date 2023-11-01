import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://api.adviceslip.com/advice", () => {
    return HttpResponse.json(
      {
        slip: {
          id: 99,
          advice: "Lorem ipsum quote",
        },
      },
      { status: 200 }
    );
  }),
];
