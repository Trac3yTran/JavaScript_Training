//Classes

//Classes are ES6 only and are syntactic sugar for object prototypes.

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    area() {
        return this.height * this.width
    }
}

let rect = new Rectangle(10, 5)
console.log(rect.area())

// constructor is equivalent to initialize in Ruby
// This refere to the object itself and is equivalent to using @ in Ruby

// JavaScript is object oriented but not class-based
// From MDN docs "JavaScript classes, introduced in ECMAScript 2015 are primarily syntactical sugar over JavaScript's existing protoype-based inheritance. The class syntax does not introduce a new object -oriented inheritance model of JavaScript"

// Static properties
// Static properties are accessed with the class name instead of an instance variable. Use them to define properties that are common for al instances of a class

