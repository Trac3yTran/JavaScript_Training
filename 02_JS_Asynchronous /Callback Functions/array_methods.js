// Higher Order Functions

// forEach() method executes a provided function once for each array element

const people =["Tracey", "Andrew", "Joey", "Minnie","Chelsea"];

//shorthand call back functions using the fat arrow functions and cut out using the () because we are passing only one argument that can be shorthand 


people.forEach(person => console.log(person));

//still work the same as this

people.forEach(function (person) {
    console.log(person);
})

//can take this further and create a name function 

function logger(element) {
    console.log(element);
}

people.forEach(logger);

// there is another optional parameter that we can pass through our call back that then pass through foreach that is index value 

function logger(element) {
    console.log(element);
}

people.forEach((person, index) => console.log(`${index +1}. ${person}`));

// forEach, map, reduce and filter the main ones to know 

// map() method creates a new array populated with the resutl of calling a provided function on every element in the calling array. 

const numbers = [1,2,3,4,5];

console.log(numbers.map(number => number +1));

// another way 

function addOne(number) {
    return number + 1;
}

const double = (num) => num * 2;

console.log(numbers.map(double));

// filter() method creates a new array with all elements that pass the test implemneted by the provided function 

// const people =["Tracey", "Andrew", "Joey", "Minnie","Chelsea"];     (using the name example) 

console.log(people.filter(name => name.length <6));

