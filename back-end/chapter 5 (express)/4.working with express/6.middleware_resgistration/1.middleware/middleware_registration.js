//Middleware is a function that runs for every incoming request(get,post etc) before the routes handler send a reponse for which reuest came 

// middle ware function can has routes or without routes 


//Since it is a function, whatever code we write inside it will get executed.

//But generally, we write a middleware to perform a tasks (like logging, authentication, validation, etc.). that must be done for any request(get,post etc) before the actual route handler send a reponse  for which request is came

//After executing its work,it calls next() to pass control to the next middleware or route handler.

//If the middleware does not call next() and instead sends a response,then the request-response cycle stops there and the next middleware or route handler will NOT execute.


//noe1:but genrally we dont's send a reponse through the middleware 
//note2:middleware can midify the request object
//note3:we always write middleware before the route handler  


// common middleware function:

.methodOveride 
.bodyParser
.express.static
express.urlEncoded