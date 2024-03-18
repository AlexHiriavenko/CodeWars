// task: https://www.codewars.com/kata/replicate-new

function nouveau(Constructor, ...args) {
  const obj = Object.create(Constructor.prototype);
  const alt = Constructor.apply(obj, args);
  return alt && (typeof alt === "object" || typeof alt === "function")
    ? alt
    : obj;
}
