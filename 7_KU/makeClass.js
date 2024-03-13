/*
Description:
I don't like writing classes like this:

function Animal(name,species,age,health,weight,color) {
  this.name = name;
  this.species = species;
  this.age = age;
  this.health = health;
  this.weight = weight;
  this.color = color;
}
Give me the power to create a similar class like this:

const Animal = makeClass("name","species","age","health","weight","color") 
*/

function makeClass(...properties) {
  return function (...values) {
    properties.forEach((property, i) => (this[property] = values[i]));
  };
}

// function makeClass(...properties) {
//   return function (...values) {
//     const obj = {};
//     properties.forEach((property, i) => (obj[property] = values[i]));
//     return obj;
//   };
// }

// const Animal = makeClass("name", "species", "age", "health", "weight", "color");
// console.log(Animal); // выведет [Function (anonymous)]

// const myAnimal = Animal("Fluffy", "Cat", 3, "Good", 4.5, "White");
// console.log(myAnimal); // выведет объект с заполненными свойствами

// {
//   name: 'Fluffy',
//   species: 'Cat',
//   age: 3,
//   health: 'Good',
//   weight: 4.5,
//   color: 'White'
// }
