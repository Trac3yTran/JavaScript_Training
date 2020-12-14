
// Rainbow array example:

let rainbowColours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

rainboxColours[2] //yellow
rainbowColours[3] //violet 

console.log(`The first item in the rainbowColours array is ${rainbowColours[0]}.`);

console.log(`The last item in the rainbowColours array is ${rainbowColours[6]}.`);

rainbowColours.length;                  //Return the length of the array
rainbowColours.includes("red");        //Check if item is in an array
rainbowColours.push("pink");           //Adds itmes to the end
rainbowColours.unshift("purple");      //Adds itmes to the start
rainbowColours.pop();                  //Removes last element
rainbowColours.shift();                //Remove first element 

console.log(`There are ${rainbowColours.length} colours in the rainbow!`);

//last itme is always at (position.length -1):
console.log(`The last item in the rainbowColours arrays is`${ rainbowColours[rainbowColours.length - 1]}`);

//---------------------------------------------------------------------------------------------------------------//

//JavaScript Shopping Cart Array example:

let shoppingCart = [];

//Add itmes to the end of the array
shoppingCart.push("Weetbix");
shoppingCart.push("Milk");
shoppingCart.push("Strawberries");

//Add items to the start of the array
shoppingCart.unshift("Coco Pops");

console.log(shoppingCart); 


//---------------------------------------------------------------------------------------------------------------//

//Bees Array example:

let interestingBees = ["Sugarbag", "Dwarf", "Blue-banded", "Sir Wallace's", "Africanized"];

//Remove the last item in the array
interestingBees.pop();

//Remove the first itme in the array
interestingBees.shift();

//Splice(startPostion, quantityToRemove)
//This function can remove a specific amount of items from an array, starting at a specific postion in the array
interestingBees.splice(1, 1); 

console.log(interestingBees);

//---------------------------------------------------------------------------------------------------------------//

//skittle Array example:

let skittleColours = ["red", "orange", "yellow", "green", "purple"];
let mmColours = ["red", "orange", "yellow", "green", "brown"];

//Build a combined array:
let candyColours = skittleColours.concat(mmColours);
console.log("Combined array: \n" + candyColours);

//Build an array of unique values;
let distinctColours = Array.from(new Set (candyColours));
//How does this work? Sets are collections - like arrays - but only allow unique values!
console.log("Distinct array:\n" + distinctColours);

//Sort an array
//Alphateically for strings, lowest-to-highest for numbers
let sortedColours= distinctColours.sort();
console.log("Sorted array: \n" + sortedColours);

// And reverse arrays!
let reverseSortedColours = sortedColours.reverse();
console.log("Reverse-sorted array: \n" + reverseSortedColours);

