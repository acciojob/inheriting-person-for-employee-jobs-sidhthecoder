function Person(name, age) {
    greet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
	}
}



function Employee(name, age, jobTitle) {
jobGreet(){
	console.log(`Hello, my name is ${this._name}, I am ${this._age} years old, and my job title is ${this._jobTitle}.`)
 }
}
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
