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

// Class inheritaince
// We can use the extends keyword to inherit from another class. We can use the super keyword to execute the superclass function. 

class Animal {
    constructor(name) {
        this.name = name
    }
    speak() {
        return `My name is ${this.name}!`
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed
    }
    speak() {
        return `Woof! ${super.speak()} I'm a ${this.breed}! `
    }
}

let animal = new Dog("Ted", "Border Collie")
console.log(animal)

//Object.assign

// Used to add or modify properties for an object instance. This is a form of composition we are combining the properties of several objects into one object 

const student = {
    name: "Tracey",
    course: "none"

}
const FTstudent = {
    course: "FastTrack",
    start: "October"
}

const CAStudent = {
    languages: ["ruby", "javascript"],
    speak: function () {
        console.log("I can do it!")
    }
}

let tracey = Object.assign(student, FTstudent, CAStudent)
console.log(tracey)
tracey.speak()

// Mixins

// Class inheritance only allows one level of extension a class can extend only one superclass
// Mixins provide a way to define additional functions that can be implemented by an object or class, and are like interfaces in traditional OOP languagues
// Mixins are similar to the Ruby concept of modules 
// Mixins is an obkect that provides additional functionality
// Use Object.assign to add the mixin funtion to an object instance
// An object can use as many as mixins as needed. 

// the mixin

const area = {
    setUnits(units) {
        this.units = units;
    },
    getArea() {
        return this.length * this.width;
    },
    areaToString() {
        return `${this.getArea()} ${this.units}`
    }
}

// the class
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
}

Object.assign(Rectangle.prototype, area);
let shape = new Rectangle(3, 5);
shape.setUnits("cms");
console.log(shape.areaToString());