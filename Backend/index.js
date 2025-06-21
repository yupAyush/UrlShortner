const path = require('path');
var User = require('./routes/user')
const { nanoid } = require("nanoid");
const cors = require('cors');

const express = require('express');
const app = express();





app.use(cors(

))

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, "public")));



app.get('/', function(req, res) {
    res.send("server is running")
})

app.post('/submit', async function(req, res) {
    const fullurl = req.body.url;
    const id = nanoid(6)

    await User.create({
        fullurl: fullurl,
        shorturl: id

    })




    res.json({
        shorturl: `localhost:3000/${id}`,
    })
    console.log(fullurl);





})

app.get('/:shorturl', async function(req, res) {
    const shorturl = req.params.shorturl;
    try {
        const data = await User.findOne({ shorturl: shorturl });
        if (data) {
            res.redirect(data.fullurl);
        } else {
            res.status(404).send("URL not found");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(3000)