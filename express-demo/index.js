const express = require('express');
const app  = express();           // creates object app with methods .get() , .post() , .delete() , .put()

app.get('/' , (req,res)=>{
    res.send("hello World");
});

app.get('/api/courses' , (req,res)=>{
    res.send([1,2,3]);
});

app.listen(3000 , ()=> console.log("Listening on port 3000"));