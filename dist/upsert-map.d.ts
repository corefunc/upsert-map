export class UpsertMap extends Map {
  /**
   * @name upsert
   * @description Returns the value for key if already exists, otherwise it is created and inserted into the map.
   * @param {*} key - Key that you want to use.
   * @param {Function=} updateFunction - Function you want to operate on the existing value, if found.
   * @param {Function=} insertFunction - Function you want to operate if the key does not currently exist.
   * @returns {*}
   */
  upsert(key: unknown, updateFunction?: (currentValue?: unknown) => unknown, insertFunction?: () => unknown): unknown;
}
