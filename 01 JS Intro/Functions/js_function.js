// What is a function?
// - Kinda like a Ruby method
// - Procedure
// - Set of statements that performs a task



// Ruby Method Example
// def add(x, y)
//     x + y
// end

// add(1,2)



// JavaScript Function Example
function add(x, y) {
    return x + y;
};

add(1, 2);


// Differences
// - JavaScript requires a return statement to return a value, whereas in Ruby the last statement in the method returns a value.
// - Ruby throws exception errors when the number of parameters are not supplied, while JavaScript will take the first parameters available and ignore the rest.



// JavaScript Extra Arguments
// Using Special Variable 'arguments'
function myArgs() {
    console.log(arguments);
}

myArgs(1, 2, 3, 4);

// Using '...args' Rest Operator
function myOtherArgs(x, y, ...args) {
    console.log(x, y, args);
}

myOtherArgs(11, 22, 33, 44, 55, 66);



// First-class Functions
// ... functions that are treated like other objects in that language
// They can be:
// - assigned to variables
// - nested in other objects
// - passed as parameters
// - returned from other functions



// Anonymous Functions
// ... functions without a name
// We can assign functions to variables
const myCoolFunction = function (input) {
    console.log(input);
}

myCoolFunction("Such a cool function");