const http = require("http");   //es5

//single api(application programming interface) is created :/ (default route)

//route  / 

//creating a server
http.createServer(function(request, response){
    //we can send text response, html, json
    // response.write("<h1>HelloWorld</h1>");
    // response.write("Hello");
    let user = {name :"Har",age:25};
    response.write(JSON.stringify(user));
    //closing the server
    response.end();
}).listen(3000)


//Express: Allows you to combine the child routes or all the rputes to the default route.
