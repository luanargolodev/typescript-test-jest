import { add, multiply } from "./calc";

describe("test calc - add", () => {
  it("should return 18 for add(10, 5)", () => {
    expect(add(10, 5)).toBe(15);
  });

  it("should return 5 for add(2, 3)", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("test calc - multiply", () => {
  it("should return 50 for multiply(10, 5)", () => {
    expect(multiply(10, 5)).toBe(50);
  });

  it("should return 1000 for multiply(200, 5)", () => {
    expect(multiply(200, 5)).toBe(1000);
  });
});
