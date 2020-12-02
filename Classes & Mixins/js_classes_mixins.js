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