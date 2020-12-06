
//What is DOM?

//HTML element are represented in tree hierarchy. The HTML page is represented as hierachy of JavaScript objects to allow JS to interact with the page. The tree of objects is called the DOM or Document Obect Model. 

//change the word in HTML from "Hello!" to "Goodbye"
let x = document.querySelector("h1");
x.innerHTML = "Goodbye"

//change the css styling and color 
x.style // show the css attributes thats available but its needs to be in camelCase

x.style.color = "red"

x.style.paddingLeft = "100px"


//These are only created only in memory. Any change created to the DOM will not be preserved 


//Manipulating the li from HTML

let x = document.querySelector("li")


// Using querySelectorAll to select all the li

let x = document.querySelectorAll("li")

// using the below to refer to the position of each li in html 
x[1]


//looping through each element that contain x and changing the color to 'red'
for (item of x) { item.style.color = "red" }

//odd number list from li htm
let y = document.querySelectorAll("li:nth-child(odd)")

//styling the y differently
for (item of y) { item.style.color = "green" }