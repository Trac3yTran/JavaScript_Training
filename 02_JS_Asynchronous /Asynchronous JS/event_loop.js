/* Asynchronous JS 
- Javascript operatates asynchronously using the call stack, callback queue and event loop

Call Stack 
- How Javascripts keeps track of the execution order of its code
- As the main threads runs, any function calls are pushed as frames (local execution contexts) onto the stack
- Once the function has finished executing it pops off the top
- LIFO (Last In, First Out)

example 
*/

let a = 1;

function x (){
    return "here";
}

function y() {
    return x();
}

function z(){
    return y();
}

z();

/* Callback queue
- how javaScript processes responses from async functions
- when an async function completes it callback function is pushed onto the callback queue
- callbacks in the callback queue are not places on the call stack until it is completely empty
- FIFO(First In, First Out)

Event loop
- The event lopp handles asynchronous function calls by:
- placing callback functions on the callback queue when they are ready to be executed
- placing callbacking functions from the queue onto the callback when it is empty. 
*/

// Event loop 