// Events in Javascript

//Javascript allows you to listen to events. When a particular event is triggered, we can dictate what will happen with our own custom code. Eg An object may emit a 'cick' event when the user clicks on it with a mouse. When 'click is triggered we can say what particular code we would like. 

//Add an event to an object
//In this example we get a button with the id of 'my-button'.

//Now we attach an event listener by using the .addEventListener() method and pass in what event we want to listen - 'click and what function of code will run.

const el = document.querySelector('#my-button')

el.addEventListener('click', function (event) {
    alert("You clicked the button!")
})

//Removing event listeners
//We can also remove an event listener from an object here we have a set condition that removes the same 'click' event listener when count has reached 3

const el = document.querySelector('button')
let count = 0
el.addEventListener('click', function (e) {
    if (count >= 3) {
        //at 3 clicks the event listener will be removed and no longer users
        el.removeEventListener('click')
    } else {
        count++
        alert('Times clicked: ' + count)
    }
})

// event.preventDefault()
// Your event listener get passed an event object that has useful methods regarding at particular event. 
// some events has a default action that will occur. For example, forms have a submit event, which by default will post the form. We can circumvent the browser's default reaction to 'sub,it' (to prevent the request and reloading of the page) by using a method called preventDefault()

const el = document.querySelector('#signup-form')

el.addEventListener('submit', function (event) {
    event.preventDefault()
})

//event.target
// another useful property of the event object is the target property. 
// the event gives you the html element and its attributes in turn you get its value. In the example we console.log() each letter as we type in the input text field

{/* <input id= "username" type="text"> */ }

const username = document.querySelector('#username')

username.addEventListener('input', function (event) {
    console.log(event.target.value)
})
