/*
Description:
You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.

var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

obj.hash('person.name'); // 'joe'
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined
*/

var obj = {
  person: {
    name: "joe",
    history: {
      hometown: "bratislava",
      bio: {
        funFact: "I like fishing.",
      },
    },
  },
};

Object.prototype.hash = function (string) {
  const parts = string.split(".");
  let res = this;

  while (parts.length) {
    const key = parts.shift();
    if (!res[key]) return undefined;
    res = res[key];
  }

  return res;
};

console.log(obj.hash("person.name")); // 'joe'
console.log(obj.hash("person.history.bio")); // { funFact: 'I like fishing.' }
console.log(obj.hash("person.history.homeStreet")); // undefined
console.log(obj.hash("person.animal.pet.needNoseAntEater")); // undefined

// Object.prototype.hash = function (string) {
//   var obj = this;
//   string.split(".").forEach(function (el) {
//     try {
//       obj = obj[el];
//     } catch (e) {
//       obj = undefined;
//     }
//   });
//   return obj;
// };
