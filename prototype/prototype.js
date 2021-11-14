function Person(first, age) {
  this.name = first;
  this.age = age;
};

Person.prototype.hello = function () {
  console.log(this.name + ', hello!');
};

new Person('Tammi', 32).hello();
let p = new Person();
console.log(p.__proto__ === Person.prototype); // true
console.log(p.prototype === Person.__proto__); // false
console.log(p.__proto__, Person.__proto__); // proto person, {}
console.log(p.prototype, Person.prototype);// undefined, prototype person
