console.log("Hello, World!");

var a = 1;
let b = 2;
const c = 3;


// JavaScript String Datatype:
let helloString = "Hello";
helloString.length;
"Hello".charAt(1);


// JavaScript String Concatenation:
let concatString = "Hello" + " World!";


// JavaScript String Interpolation:
let name = "Tracey";
let greeting = `My name is ${name}, what is your name?`;


// JavaScript Type Coercion VS String 
// == Utilises JavaScript's type coercion.
// === Is more strict.


// JavaScript Objects:
let object = {};
object["name"] = "Tracey";

const person = {
    name: "Tracey",
    age: 30,
    address: {
        city: "Sydney",
        postcode: 2170
    }
};

person.age;
person["age"];
person.address.city;
person.age = 25;

let array = [
    "Tracey",
    30,
    "Sydney"
];

array[0];
array.length;
array.includes("Tracey"); // similar to ruby, sees if the inputted matches any of the elements inside the array.
array.push("Hello"); // adds an item to the end of the array
array.unshift("World!"); // adds an item to the front of the array
array.pop(); // removes the item at the end of the array
array.shift(); // removes the item at the beginning of the array