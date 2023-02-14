// This requires
const express = require("express"); 

// This is a function that represents the express module and we bind this to the word app. See: https://expressjs.com/en/4x/api.html
const app = express();

// This sets the port to 3000
const port = 3000;

// If this code was not here. When cmd "node server.js" is run from terminal... 
// Then when opening browser to "localhost:3000" it will return "Cannot GET /".
// This will then return the same error at the "/" root/home location but the request which the browser made witht he server will return to the cmd line console.
// The error occurs cause no response is given.
/*
app.get("/",function(request, response){
    console.log(request);
});
*/

// This will now respond with hello when the request is made at "/". 
// Now when going to "localhost:3000", the browser will make a request to get data back at "/" the home location. 
// Then the callback function gets triggered and we send the browser the response "Hello" which shows on screen.
app.get("/", function(req, res){ // Usually people will use "req", "res" for request and response here. req, res is best practice.
    res.send("<h1>Hello World!</h1>"); // You could also send plain text "hello" instead of html, etc.
});

// This is the call back for someone trying to go to contact page. "http://localhost:3000/contact"
app.get("/contact", function(req, res){
    res.send("Contact me at: emailName@gmail.com");
});

// This is the call back for someone trying to go to contact page. "http://localhost:3000/about" Another route to a webpage.
app.get("/about", function(req, res){
    res.send("My name is Joshua Donahue and I'm a PROgrammer!");
});
    

// This has the app listen to the port 3000. Can connect via cmd prompt with "node server.js" or whatever the js file is named.
//app.listen(port); // If you connect via cmd line it will connect but not give feedback. Can ctrl + c to get back to normal cmd prompt

// If you connect via cmd line it will connect and give feedback in cmd prompt.
app.listen(port, function(){
    console.log("Server started on port 3000");
});


