import { describe, test, expect } from "vitest";
import { validateNote } from "../validateNote";

describe("Given the validateNote func", () => {
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

    const result = validateNote(note);

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

    const result = validateNote(note);

    expect(result).toBe(false);
  });

  test("When called with a note with an invalid status, it should return false", () => {
    const note = {
      _id: "123",
      name: "Walk the dog",
      description: "Go to the park",
      important: false,
      status: "invalid",
      due_date: "5/1/2024",
      created_at: 1714552849902,
    };

    const result = validateNote(note);

    expect(result).toBe(false);
  });

  test("When called with a with a invalid type of a field, it should return false", () => {
    const note = {
      _id: "123",
      name: "Walk the dog",
      description: "Go to the park",
      important: "false",
      status: "pending",
      due_date: "5/1/2024",
      created_at: 1714552849902,
    };

    const result = validateNote(note);

    expect(result).toBe(false);
  });
});
