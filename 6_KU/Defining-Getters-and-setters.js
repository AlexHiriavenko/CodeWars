// Task: https://www.codewars.com/kata/55bcf04de45497c54a0000d0/train/javascript

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }

Object.defineProperty(Person.prototype, "name", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
  set: function (name) {
    let parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts.slice(1).join(" ");
  },
  enumerable: true,
  configurable: true,
});

// Object.defineProperty(Person.prototype, "name", {
//     get: Person.prototype.getName,
//     set: function(name) { [this.firstName, this.lastName] = name.split(" "); },
//   });
