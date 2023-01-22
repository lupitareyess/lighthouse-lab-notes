// use request module
let request = require("request")
// make GET request
request("http://www.google.com", (error, response, body) => {
  console.log(body);
});

//////////////////
///DEFINTIONS/////
//////////////////

// Error - in cases error is recieved
// Response - will have the http headers sent back
// Body - contains entire content of the response sent 

// Call HTTP library
let http = require('http');
// Create server using the HTTP library
// Function is called whenever a request is made to the server 
let server = http.createServer((request, response) => {
  // Set content header
  response.writeHead(200,
    { "Content-Type": "text/plain" });
  // Send the string to the response
  response.end("Hello World\n");
});

// Make server listen on port 3000
server.listen(3000);

//There is a better way to do thise using EXPRESS