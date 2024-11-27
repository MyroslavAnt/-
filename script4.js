// const http = require("http");
 
// const server =  http.createServer(function(request, response){
//     response.end("Hello METANIT.COM!");
// });
// server.listen(3000, function(){ console.log("Сервер запущен по адресу http://localhost:3000")});





















// const http = require("http");
  
// http.createServer(function(request, response){
     
//     response.setHeader("Content-Type", "text/html; charset=utf-8;");
     
//     if(request.url === "/home" || request.url === "/"){
//         response.write("<h2>Home</h2>");
//     }
//     else if(request.url == "/about"){
//         response.write("<h2>About</h2>");
//     }
//     else if(request.url == "/contact"){
//         response.write("<h2>Contacts</h2>");
//     }
//     else{
//         response.write("<h2>Not found</h2>");
//     }
//     response.end();
// }).listen(3000);



























const http = require("http");

http.createServer(function(request, response){
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if(request.url === "/about"){
        response.write("<h2>Myroslav</h2>");
    }
    else if(request.url === "/good"){
        response.write("<h2>I play the guitar</h2>");
    }
    else if(request.url === "/age"){
        response.write("<h2>14</h2>");
    }
}).listen(3000);