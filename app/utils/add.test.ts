/* eslint-disable @typescript-eslint/no-unsafe-call */
import { add } from "./add";

test("Test functions that import server-only", () => {
  expect(add(1, 2)).toBe(3);
});
