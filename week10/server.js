var express = require("express")
let Books = require('./booksSchema')
let mongodbConnected = require('./MongodbConnect')
const cors = require('cors');
var app = express()
var bodyparser = require("body-parser")
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(cors());
console.log("BOOKS", Books)
app.get('/', function (req, res) {
})
app.get('/about', function (req, res) {
    res.send("mongodb express React and mongoose app, React runs in another application")
    Books.countDocuments().exec()
        .then(count => {
            console.log("Total documents Count before addition : ", count)
        }).catch(err => {
            console.error(err)
        })
})
app.get('/allbooks', async function (req, res) {
    const d = await Books.find();

    return res.status(200).json(d);
});
app.get('/getbook/:id', async function (req, res) {
    let id = req.params.id;
    const d = await Books.findById(id);

    return res.status(200).json(d);
});
app.post('/addbooks', async function (req, res) {
    console.log("Ref", req.body)
    let newbook = new Books(req.body);
    console.log("newbook->", newbook)
    newbook.save()
        .then(todo => {
            res.status(200).json({
                'books': 'book added successfully'
            });
        })
        .catch(err => {
            res.status(400).send('adding newbook failed');
        });
})
app.post('/updatebook/:id', async function (req, res) {
    let id = req.params.id;
    let updatedbook = new Books(req.body);
    console.log("update id", id, "newbook-> ", updatedbook)
    const d = await Books.findByIdAndUpdate(id,
        {
            booktitle: updatedbook.booktitle,
            PubYear: updatedbook.PubYear,
            author: updatedbook.author,
            Topic: updatedbook.Topic,
            formate: updatedbook.formate
        }
    )

    return res.status(200).json({
        'books': 'book updatedsuccessfully'
    });
});
app.post('/deleteBook/:id', function async(req, res) {
    let id = req.params.id;
    console.log("deleting")
    const d = Books.findByIdAndDelete(id)

    return res.status(200).send('Book Deleted');
});
app.listen(5005, function () {
    console.log("Server is running on the port 5005")
});