const express = require('express');
const app = express();
app.use(express.json());

const courses = [
    { id :1, name: "Web Development"},
    { id: 2, name: "IT"},
    { id: 3, name:"Cybersecurity"}
];

app.get('/', (req, res) =>
{
    res.send("Hello there");
})

app.get('/api/courses', (req, res) =>
{
    res.send(courses);
})

app.get('/api/courses/:id', (req, res) =>
{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if (!course)
    {
        res.status(404).send("This course with the given ID was not found");
        return;
    }
    res.send(course)
})

app.post('/api/courses', (req, res) =>
{
    if (req.body.name.length < 3)
    {
        res.status(404).send("Too little characters")
        return;
    }
    res.send(req.body.name)

    const course = 
    {
        id: courses.length + 1,
        name: req.body.name
    }

    courses.push(course);
})

app.put('/api/courses', (req, res)=>
{
    if (req.body.name.length == 0)
    {
        res.status(404).send("Not found")
        return;
    }

    const course = 
    {
        id: courses.length + 1,
        name: req.body.name
    }

    courses.push(course);
})

app.delete('/api/courses', (req, res)=>
{
    if (!courses.includes(req.body.id))
    {
        res.status(404).send("Not found");
        return;
    }
    
    index = courses.indexOf(req.body.id);
    course.splice(index, 1);
    
    course.forEach((obj, index) =>
    {
        obj.id = index + 1;
    })
})

app.listen(3000, () => 
{
    console.log('Listening on port 3000');
})
