/*
 Web API
- Web APIs are one of the most popular tools to access data in web development.
- We send a request to a URL(with AJAX) and the server sends us the required data (usually JSON) back
- We will bui.d our own servers with our own data soon, but in the meantime, we can access a third party web API. 


What is AJAX?
- AJAX stands for Asynchronous Javascrupt And XML (XML is now replace by JSON)
- Allows reloading only specific elements of the page instead of the entire page. 
- Applied to create fast, dynamic, and modern websites
- Not dependent on what browser its running on
- Can send and receive information in various formats like JSON, XML, HTML and text files. 

How AJAX works
- An event occurs in a web page(the page is loaded, a button is clicked)
- An XMLHttpRequest object is created by Javascript
- The XMLHttpReques object sends a request to a web server
- The server processes the request
- The server sens a response back to the webpage
- The response is read by Javascript
- Proper action(like DOM element update) is performed by Javascript


XMLHttpRequest Object (XHR)
- Before the fetch() API was introduced, the only built in way of doing AJAX in browser was XHR
*/

//create the XHR object
let reques = new XMLHttpRequest();
// Open specifies the main parameters of the request
// Open(method, URL,[async, user, password])
// Open does not open the connection but it configures the request.
request.open('GET','json_example.json');

/*
 XMLHttpRequest Object (XHR)
 - We define a callback function that will execute when the request is completed and assign it to the onload property
 - We could also assign this with request .addEventListener("load", callback)
 - This callback function will process the data returned in the request, typically making some updates to the DOM using JavaScript

 */

 request.onload = function () {
     console.log(JSON.parse(this.response));
 };


 /* 
  Using AJAX with jQuery
- jQuery is a popular javascript library(less popular now because of frameworks like React, Vue and Angular)
-jQuery is supported on browsers
- Can be downloaded or used with a jquery CDN
-jQuery provides us with a cleaner syntax and straighforward implementation
- Same as most modern AJAX libraries, jQuery's AJAX is built on top of XHR request
- They are just there to abstract away with complexity 


Fetch API
- The fetch API is just another way to do th esame thing that we can do with XHR. 
- It uses Promises instead of callbacks, which has made it very popular and can be easier to use 
- Fetch is the standard for AJAX in the modern browsers.
 */

 let pokeFetch = fetch(pokemonUrl)
    .then((response) => response.json()) // returns a promise
    .then((data) => {console.log(data)}) // handles the data and runs a function
    .catch((error) => {console.log("error: " + error)}) // handles the errors 