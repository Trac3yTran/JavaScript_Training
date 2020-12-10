
//First class objects

//They can be stored as a variable or as a property on an object
// They can be returned from a function
// They can be passed as an argument into another function

function processInput(input, callback) {
    callback(input)
}

function greet(name) {
    console.log(`Hello ${name}`);
}

function excitedGreet(name) {
    console.log("HI THERE" + name.toUpperCase() + "!!!!!");
}

processInput("Alex", greet); 
processInput('daniel', excitedGreet);

// It allows us to write thats more modular and reuseable