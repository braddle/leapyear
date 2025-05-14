/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Leap Year Calculator",
  );
  expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
    "Coming Soon!",
  );
});
