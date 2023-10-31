import { render } from "@testing-library/react";
import AdviceGenerator from "./AdviceGenerator";
import "@testing-library/jest-dom";

describe("Advicegenerator", () => {
  test("should load a quote from API", () => {
    render(<AdviceGenerator />);
  });
});
