const express = require('express');

const app = express();

const Joi = require('joi')

app.use(express.json())

const courses = [
    {id:1 , name: 'course1'},
    {id:2 , name: 'course2'},
    {id:3 , name : "course3"}
];

function ValidateName(course){
    const schema = {
        name : Joi.string().min(3).required()
    }

    const result = Joi.validate(course.schema)
    return result
}


app.get('/' , (req,res)=>{
    res.send("Welcome to the home page");
}); 

app.get('/api/courses' , (req,res) => {
    res.send(courses);
})

app.post('/api/courses' , (req,res) => {
    
   const {error} = ValidateName(req.body)  

    if (error){
        return res.status(400).send(error.details[0].message)
    }


    // if(!req.body.name || req.body.name.length < 3){
    //     res.status(400).send("Name is required and should have atleast 3 characters")
    // }
    
    const course = {
        id : courses.length + 1,
        name: req.body.name
    };
    courses.push(course)
    res.send(course)
})

app.get('/api/courses/:id' , (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));      // req.params.id is a string
    if(!course) res.status(404).send("Course not found");
    res.send(course)
})

app.put('/api/courses/:id' , (req , res) => {
    // check if course exists
    const course = courses.find(c => c.id === parseInt(req.params.id));      // req.params.id is a string
    if(!course) return res.status(404).send("Course not found");
    
    // check if course name is valid
    const {error} = ValidateName(req.body)  

    if (error){
        return res.status(400).send(error.details[0].message)
    }

    course.name = req.body.name
    res.send(course)
})

const port = process.env.PORT || 3000
app.listen(port , () => console.log(`Listening on port ${port}`));