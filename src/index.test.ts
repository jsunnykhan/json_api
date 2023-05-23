import { describe, expect, it } from "vitest";
import { add } from "./index";

describe("sum", () => {
  it("should sum two number", () => {
    expect(add(1, 2)).toBe(3);
  });
});
