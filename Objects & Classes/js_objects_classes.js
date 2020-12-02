// Object

let student = {
    name: "Michelle",
    age: 20,
    address: {
        street: "123 Aplha Street",
        state: "NSW",
        city: "Sydney"
    }
}

// object constructor
// An object construvtor is a function that defines properties with this keyword. It is analogous to the initialize method in Ruby. 
// This is a self-reference to the object instance.
// Can use the new keyword to create objects with the constructor.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.awesome = true;
}

let person1 = new Person("Tracey", 30)
console.log(person1)

// constructor functions
// object constructors can also be define member functions(analogous to defining a method within the class in Ruby)

function Hero(name, level) {
    this.name = name;
    this.level = level;
    this.shout = function () {
        return `My real name is ${this.name}`;

    }

}

let superman = new Hero("Clarke", 10000);
console.log(superman.shout())

//console.log same as puts output information only to the console
//return output the value 

//Prototype property
// Can be used to add a default property after object creation

let student = new Person("Andrew", 35);
Person.prototype.role = "student";

// the prototype is a template object that is shared between all instances of the same constructor in this case, Person.
// Similar to a superclass in Ruby, except this isnt inheritance. 