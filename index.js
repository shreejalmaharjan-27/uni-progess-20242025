const express = require('express')
const app = express()
const fs = require('fs')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}))
app.get('/', (req, res) => {
    res.send("Good morning");
});

app.get('/about', (req, res) => {
    res.send("This is a basic express application");
})

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params);
});

app.get("/GetStudents", (req, res) => {
    studentData = {};

    fs.readFile(__dirname + "/Student.json", "utf-8", (err, data) => {
        console.log(data);
        res.json({
            status: true,
            status_code: 200,
            requested_at: req.localtime,
            requrl: req.url,
            "request Method": req.method,
            studentData: JSON.parse(data)
        })
    });
});

app.get("/GetStudentId/:id", (req, res) => {
    studentData = {};

    fs.readFile(__dirname + "/Student.json", "utf-8", (err, data) => {
        const students = JSON.parse(data);
        const student = students["student" + req.params.id];
        if (student) {
            res.json(student);
        } else {
            res.json({
                status: true,
                status_code: 200,
                requested_at: req.localtime,
                requrl: req.url,
                "request Method": req.method,
                studentData: JSON.parse(data)
            })
        }
    });
});

app.get('/studentinfo', (req, res) => {
    res.sendFile('studentinfo.html', {
        root: __dirname
    });
});

app.post('/submit-data', (req, res) => {
    var name = req.body.firstName + ' ' + req.body.lastName;
    var Age = req.body.myAge + ' Gender: ' + req.body.gender + '';
    Qual = ' Qualification' + req.body.Qual;
    console.log(req.body.Qual)
    res.send({
        status: true,
        message: 'form Details', data: {
            name: name, age: Age, Qualification: Qual,
        }
    });
});
app.listen(5000, () => {
    console.log("Application is running on port 3000")
});
