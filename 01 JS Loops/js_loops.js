
//Loops

// for loop
// repeating a block of code

for (let counter = 0; counter < 5; counter++) {
    console.log('This message has appeared ${console} previous times.');
}

// Fun with 'for' loops

let storedPassword = "password123";
for (let attemptsRemaining = 5; attemptsRemaining > 0;) {
    let userInput = prompt("What is the password?");
    if (userInput == storedPassword) {
        break;
    } else {
        attemptsRemaining--;
    }
}

// while loops
//repeat while true

let olympicMedals = 0;
while (olympicMedals < 10) {
    olympicMedals++;
    console.log("You wont another Olympic medal!");
}

console.log("Okay, you have 10, thats enougj for one day!")

//----------------------------------------------------------------------------//

// Looping Over Arrays

// `forEach` method
// runs an operation and has access to a specific entry as it iterates, it doesn't return anything.
let rainbowColours = ["red", "orange", "yellow", "green", "blue", "indigio", "violet"];

rainbowColours.forEach(colour => {
    console.log(`This fancy colour ${colour} is in the rainbow!`);
});



// `.map()` method
// constructs a new array based on the array it's using, with access to a specific entry in the original array as it iterates through it.
let rainbowColours = ["red", "orange", "yellow", "green", "blue", "indigio", "violet"];

let capitalizedColourNames = rainbowColours.map(colour => {
    return colour.toUpperCase();
});

console.log(capitalizedColourNames);
