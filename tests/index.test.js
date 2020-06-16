const { UpsertMap } = require("../dist/upsert-map.cjs");

describe("UpsertMap", () => {
  it("UpsertMap", () => {
    expect(typeof UpsertMap).toBe("function");
    const map = new UpsertMap();
    const key = "YOUR_KEY";
    map.upsert(key, undefined, () => new Set());
    expect(map.get(key).constructor.name).toBe("Set");
    map.upsert(key, (currentValue) => {
      currentValue.add(1);
      return currentValue;
    });
    map.upsert(key, (currentValue) => {
      currentValue.add(2);
      return currentValue;
    });
    const set = [...map.get(key)];
    expect(set[0]).toBe(1);
    expect(set[1]).toBe(2);
  });
});
