// co// Person constructor function
function Person(name, age) {
	constructor(name,age){
		this._name=name;
		this._age=age;
	}
	greet(){
		console.log(`Hello, my name is ${this._name}, I am ${this._age} years old.`)
	}
}


// Employee constructor function
function Employee(name, age, jobTitle) {
	constructor(name,age,jobTitle){
	this._jobTitle=jobTitle;
	super(name,age);
	}
	
	jobGreet(){
     console.log(`Hello, my name is ${this._name}, I am ${this._age} years old, and my job title is ${this._jobTitle}.`)
	}
	
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
