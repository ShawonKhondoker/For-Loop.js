// / Define an object with some properties and methods
const myObject = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
  }
};

// Access object properties
console.log(myObject.name); // Output: "John"
console.log(myObject.age); // Output: 30

// Call object method
myObject.greet(); // Output: "Hello, my name is John and I am 30 years old."

// Create an object with some properties
let person = {
  name: "John",
  age: 30,
  gender: "male"
};

// Access and update properties of the object
console.log(person.name); // Output: "John"
person.age = 31;
console.log(person.age); // Output: 31

// Add a new property to the object
person.job = "developer";

// Loop through the properties of the object
for (let key in person) {
  console.log(key + ": " + person[key]);
}
