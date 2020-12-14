
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
    console.log("HI THERE " + name.toUpperCase() + "!!!!!");
}

processInput("Tracey", greet); 
processInput("Andrew", excitedGreet);

// It allows us to write thats more modular and reuseable

//math functions

function add(a,b) {
    console.log(a + b)
}

function multiply(x, y) {
    console.log(x * y);
}

function doMath(num1, num2, cb) {
    console.log("processing");
    cb(num1, num2);
}

doMath(10, 5, add);
doMath(2,8, multiply);
doMath(21,3, function (one, two){
    console.log(one/two);
})

// could be written with a =>

doMath(2, 5, (a,b) => {
    console.log(a ** b);
})

// Real world problem: A function that is able to modify any sentence that pass in to it. 

function modifySentence(sentence, modifier) {
    return sentence.split(" ").map(modifier).join(" ");
}

function capitalise(word) {
    return word[0].toUpperCase() + word.substring(1);
}

function noCovid(word) {
    return word.toLowerCase() === 'covid19' ? '#####' : word
}

console.log(modifySentence("hello there friend", capitalise));
console.log(modifySentence("COVID19 is a big problem", noCovid));

//A call back function is a function that passed into another function and an agument and invoked in some way at some point in that function 

//for eg:

function processInput(input, callback) {
    //do some stuff
    callback(input);
} 