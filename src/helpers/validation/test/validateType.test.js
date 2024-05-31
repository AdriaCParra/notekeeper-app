import { describe, test, expect } from "vitest";
import { validateType } from "../validateType";

describe("Given the validateType func", () => {
  test("When called with a string and 'string', it should return true", () => {
    const result = validateType("hello", "string");

    expect(result).toBe(true);
  });

  test("When called with a number and 'number', it should return true", () => {
    const result = validateType(42, "number");

    expect(result).toBe(true);
  });

  test("When called with a boolean and 'boolean', it should return true", () => {
    const result = validateType(true, "boolean");

    expect(result).toBe(true);
  });

  test("When called with a string and 'number', it should return false", () => {
    const result = validateType("hello", "number");

    expect(result).toBe(false);
  });
});
