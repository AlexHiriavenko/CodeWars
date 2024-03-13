// https://www.codewars.com/kata/santaclausable-interface

// The SantaClausable interface is implemented, if all of the following methods are defined on an object:

// sayHoHoHo() / say_ho_ho_ho
// distributeGifts() / distribute_gifts
// goDownTheChimney() / go_down_the_chimney

function isSantaClausable(obj) {
  return ["sayHoHoHo", "distributeGifts", "goDownTheChimney"].every(
    (methodName) => typeof obj[methodName] == "function"
  );
}

const santa = {
  sayHoHoHo: function () {
    console.log("Ho Ho Ho!");
  },
  distributeGifts: function () {
    console.log("Gifts for all!");
  },
  goDownTheChimney: function () {
    console.log("*whoosh*");
  },
};

const notSanta = {
  sayHoHoHo: function () {
    console.log("Oink Oink!");
  },
  // no distributeGifts() and no goDownTheChimney()
};

console.log(isSantaClausable(santa)); // must return TRUE
console.log(isSantaClausable(notSanta)); // must return FALSE
