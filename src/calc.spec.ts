import { add } from "./calc";

describe("test calc - add", () => {
  it("should return 18 for add(10, 5)", () => {
    expect(add(10, 5)).toBe(15);
  });

  it("should return 5 for add(2, 3)", () => {
    expect(add(2, 3)).toBe(5);
  });
});
