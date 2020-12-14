/* Synchronous code 

Is referred to as blocking code. In blocking or synchronous code, each state,ent is executed in order and must finish before moving on to the next line of code.

Javascript is synchronous and is a single threaded language that executes synchronously

One Thread == One Call Stack == One Thing At A Time - Phillip Roberts 

Why is this a problem?

When we are running blocking code nothing else can run. Think about this in terms of a browser. 
- It is a bad user experience if a user has to sit and wait for each thing to load in sequence
- the browser wants to constantly render(every 6 milliseconds). If we are blcoking that then nothing can re-render and looks like the browser has frozen. 

*/

/* Asychronous Example

- set Timeout is async
- when the specified time has passed, the callback function is places on the callback queue.
- when the callstack is empty, the callback function is executed. 

*/
console.log(1);
setTimeout(() => {
    console.log(2);
}, 5000);

console.log(3);