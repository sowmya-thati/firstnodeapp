
var http = require('http');  
//create a server object:  
  
http.createServer(function (req, res) {  
    res.write('DeLaRue - POC \n');
    res.write('Hello World- Folks'); //write a response to the client  
    res.end(); //end the response  
    
}).listen(5000); //the server object listens on port 8080   
  
// Console will print the message  
console.log('Server running at 5000'); 