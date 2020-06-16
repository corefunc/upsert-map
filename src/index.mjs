/**
 * @param {*} value
 * @returns {boolean}
 */
function isFunction(value) {
  if (Object.prototype.toString.call(value) !== "[object Function]") {
    return false;
  }
  return !/^class\s/.test(Function.prototype.toString.call(value));
}

class UpsertMap extends Map {
  /**
   * @name upsert
   * @description Returns the value for key if already exists, otherwise it is created and inserted into the map.
   * @param {*} key - Key that you want to use.
   * @param {Function=} updateFunction - Function you want to operate on the existing value, if found.
   * @param {Function=} insertFunction - Function you want to operate if the key does not currently exist.
   * @returns {*}
   * @throws TypeError
   */
  upsert(key, updateFunction, insertFunction) {
    let insertFunc;
    if (arguments.length > 2) {
      insertFunc = insertFunction;
    } else {
      insertFunc = undefined;
    }
    let value;
    const isUpdateable = isFunction(updateFunction);
    const isInsertable = isFunction(insertFunc);
    if (!isUpdateable && !isInsertable) {
      throw TypeError("At least one callback required");
    }
    if (this.has(key)) {
      value = this.get(key);
      if (isUpdateable) {
        value = updateFunction(value);
        this.set(key, value);
      }
    } else if (isInsertable) {
      value = insertFunc();
      this.set(key, value);
    }
    return value;
  }
}

export { UpsertMap };
