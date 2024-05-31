import { describe, test, expect } from "vitest";
import { validateNonEmpty } from "../validateNonEmpty";

describe("Given the validateNonEmpty func", () => {
  test("When called with a note with all fields filled, it should return true", () => {
    const note = {
      _id: "123",
      name: "Walk the dog",
      description: "Go to the park",
      important: false,
      status: "pending",
      due_date: "5/1/2024",
      created_at: 1714552849902,
    };

    const result = validateNonEmpty(note);

    expect(result).toBe(true);
  });

  test("When called with a note with some fields empty, it should return false", () => {
    const note = {
      _id: "123",
      name: "",
      description: "Go to the park",
      important: false,
      status: "pending",
      due_date: "5/1/2024",
      created_at: 1714552849902,
    };

    const result = validateNonEmpty(note);

    expect(result).toBe(false);
  });
});
