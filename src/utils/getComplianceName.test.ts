import getComplianceName from "./getComplianceName";

describe("getComplianceName", () => {
  test("id: 1 returns: 'Mangelfulde produkter'", () => {
    expect(getComplianceName(1)).toBe("Mangelfulde produkter");
  });

  test("id: 2 returns: 'Farlige produkter'", () => {
    expect(getComplianceName(2)).toBe("Farlige produkter");
  });

  test("invalid id throws error", () => {
    expect(() => getComplianceName(3)).toThrowError("invalid id");
  });
});
