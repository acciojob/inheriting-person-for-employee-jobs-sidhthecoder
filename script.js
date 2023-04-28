// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add greet() method to Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

// Employee constructor function
function Employee(name, age, jobTitle) {
  // Call the Person constructor using the Employee instance as the `this` context
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit Person prototype in Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Set Employee constructor to be itself
Employee.prototype.constructor = Employee;

// Add jobGreet() method to Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
}

window.Person = Person;
window.Employee = Employee;
