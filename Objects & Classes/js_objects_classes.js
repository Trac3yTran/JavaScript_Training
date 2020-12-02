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

let instructor = new Person("Tracey")