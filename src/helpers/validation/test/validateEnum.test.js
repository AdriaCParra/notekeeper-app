import { describe, expect, test } from "vitest";
import { validateEnum } from "../validateEnum";

describe("Given the validateEnum func", () => {
  test("When called with a note with status PENDING, it should return true", () => {
    const note = {
      _id: "123",
      name: "Walk the dog",
      description: "Go to the park",
      important: false,
      status: "pending",
      due_date: "5/1/2024",
      created_at: 1714552849902,
    };

    const result = validateEnum(note);

    expect(result).toBe(true);
  });

  test("When called with a note with status IN_PROGRESS, it should return true", () => {
    const note = {
      _id: "123",
      name: "Walk the dog",
      description: "Go to the park",
      important: false,
      status: "in progress",
      due_date: "5/1/2024",
      created_at: 1714552849902,
    };

    const result = validateEnum(note);

    expect(result).toBe(true);
  });

  test("When called with a note with status DONE, it should return true", () => {
    const note = {
      _id: "123",
      name: "Walk the dog",
      description: "Go to the park",
      important: false,
      status: "done",
      due_date: "5/1/2024",
      created_at: 1714552849902,
    };

    const result = validateEnum(note);

    expect(result).toBe(true);
  });

  test("When called with a note with any other status like 'invalid', it should return false", () => {
    const note = {
      _id: "123",
      name: "Walk the dog",
      description: "Go to the park",
      important: false,
      status: "invalid",
      due_date: "5/1/2024",
      created_at: 1714552849902,
    };

    const result = validateEnum(note);

    expect(result).toBe(false);
  });
});
