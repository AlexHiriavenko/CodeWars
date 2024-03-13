// https://www.codewars.com/kata/513e1e47c600c93cef000001/train/javascript

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  toString() {
    return `${this.name} is a ${this.type}`;
  }
}

var dog = new Animal("Max", "dog");
dog.toString(); // should return 'Max is a dog'
dog.type; // should == 'dog'
dog.name; // should == 'Max'
dog.name = "Lassie"; // should set name to 'Lassie'
