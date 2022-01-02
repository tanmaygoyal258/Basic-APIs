const express = require('express');
const app  = express();           // creates object app with methods .get() , .post() , .delete() , .put()

app.get('/' , (req,res)=>{
    // res.send("hello World");
    res.send("hello World, this is a change that nodemon should pick up");
});

app.get('/api/courses' , (req,res)=>{
    res.send([1,2,3]);
});

app.get('/api/courses/:id' , (req,res)=>{
    res.send(req.params.id);                            // prints the id parametre
});

app.get('/api/courses/:year/:month' , (req,res)=>{
    //res.send([req.params.month , req.params.year]);           // dealing with multiple parametres
    res.send(req.query);                                        // dealing with query, inserted after a question mark
})



const port = process.env.PORT || 3000 ;     // if we have an environment variable port, take it else default = 3000
// app.listen(port , ()=> console.log("Listening on Port 3000"));

app.listen(port , ()=> console.log(`Listening on port ${port}`));       // dynamic port