// Error first callbacks
function doMath(num1, num2, callback) { //adding abit of error handling 
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        const err = new Error("Can only perform math on numbers")
        callback(err);
        return
    }
    callback(null, num1, num2);
}

function multiply(err,a,b) {
    if (err) {
        return console.error(err.message)
    }
    console.log(a * b);
}

function add(err,x,y) {
    if (err) {
        return console.error(err.message)
    }
    console.log(x+y);
}

doMath(2,5, multiply);
doMath(3,3, add); //33 thats incorrect

// we are passing the error first and it normal to call the callback null useful in handling the error first force to acknowledge it first (null = no there is no error) and if we have it there in our call back we need to ensure there is an error message to the screen 

// Example 2

function useName(name, callback) {
    if (typeof name!='string') {
        const error = new Error("Name must be a string");
        callback(error);
    } else if (name.length < 1) {
        const error = new Error("Name cannot be empty");
        callback(error)
    } else {
        callback(null, name)
    }
}

function greet(error, name) {
    if (error) {
        console.log(error.message);
        return
    }
    console.log("Hello " + name)
}

useName("", greet);