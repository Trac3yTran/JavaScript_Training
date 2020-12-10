// Control flow

// if statements
// if else statements
// if elseif statements
// while statements
// switch statements
// for statements



if (condition) {
    //a block of code to run if conditon is met
}


//conditonals - a piece of code that controls whether or not another piece of code can run base on some sort of condition that what we need to for control flow to happen. 
// if a condition is met in another word if its result in true, then it will run a block of code following that conditional check for eg 

let conFlip = "heads"

if (conFlip == "heads") {
    console.log("The coin landed with heads facing up!");
}

//----------------------------------------------------------------------------//

//Comparing data types

//JavaScript is considered a "weakly typed" means its variables can change their data type and we can compare different types of data types together for more human readable piece of code. 

let randomNumber = "4"

if (randomNumber == 4) {
    console.log("The number was equal to 4!");
}


//  == vs === 


let randomNumber = "4"

if (randomNumber === 4) {
    console.log("The randomNumber's value was equal to the number 4!");
}

if (randomNumber == 4) {
    console.log("The randomNumber's value is roughly equal to the number 4!");
}


// == we can compare it across datatypes but with === comparison we can only used for strict comparison that requires both pieces of data to be of the same data type 

//----------------------------------------------------------------------------//

// True and False 

// A conditon needs to be true for us to say condition has been met. If the condition is not true then the code cannot run. 

console.log(1 == 1) // always true

if (true) {
    console.log("Always appear because the condition always return TRUE.");
}

if (false) {
    console.log("Never appears because the condition always return FALSE.");
}

// Falsey values in JS:
// false
// 0
// ""
// NaN
// null
// undefined

//----------------------------------------------------------------------------//

// Comparison Operators

// ==   are values on both sides the same even if they're different datatypes?
// ===  are values on both sides the same and the same data type?
// <    is the value on the left side smaller than the value on the right side?
// <=   is the value on the left side smaller than or the same as the value on the right side?
// >    is the value on the left side greater than the value on the right side?
// >=   is the value on the left side greater than or the same as the value on the right side?
// !    is the condition the opposite of its result? e.g. `!true` results in `false`


// &&

if ("0" == 0 && "hello" === "hello") {
    console.log("Two conditions both were met!");
}

if ("hello" == "word" && 10 > 5) {
    console.log("Only one condition was met, not both, so this message wont't appear.");
}


// ||

if (0 < 10 || "banana" == 4) {
    console.log("Only one condition was met, but the OR operator say that's good enough!");
}

// if isnt enough

let sky = "blue";

if (sky === "blue") {
    console.log("Sky is blue today!");
}

console.log("Sky is not blue today..");

// very cluncky code above using else would be a better option
// else

let sky = "blue";

if (sky === "blue") {
    console.log("Sky is blue today!");
} else {
    console.log("Sky is not blue today..");
}


// Input Password Example  else
let password = "Password123";

let submittedPassword = "Password!";

if (password == submittedPassword) {
    console.log("User submitted the correct password, they can log in!");

} else {
    console.log("User entered the incorrect password. Please try again!");
}

// Creating New Password Example elseif
let newPassword = "Password123";

if (newPassword[0] != newPassword.toUpperCase()[0]) {
    console.log("Password does not start with capital letter!");
} else if (newPassword.toLowerCase().includes("password")) {
    console.log("Password should not user easy-to-guess words!");
} else {
    console.log("Password is okay!");
}


// JavaScript Switch Statement to check mutlple conditions 
let userFavouriteColour = "pink";

switch (userFavouriteColour) {
    case "red":
        console.log("The user's favourite colour is RED!");
        break;
    case "orange":
        console.log("The user's favourite colour is ORANGE!");
        break;
    case "yellow":
        console.log("The user's favourite colour is YELLOW!");
        break;
    default:
        console.log("The user's favourite colour is NOT in the rainbow!");
        break;
}

if (condition) {
    // something happens in here
} else if (condition) {
    // something else happens
} else if (condition) {
    // something else heppens
} else {
    // default action happens
}