// Task: https://www.codewars.com/kata/5366cfe48d004ce19600104b/train/javascript

Object.create = function (prototype, properties = {}) {
  if (typeof prototype !== "object") throw new TypeError();
  return Object.defineProperties({ __proto__: prototype }, properties);
};

// или

Object.create = function (prototype, properties = {}) {
  if (typeof prototype !== "object" && prototype !== null) {
    throw new TypeError();
  }
  return Object.defineProperties(
    Object.setPrototypeOf({}, prototype),
    properties
  );
};
