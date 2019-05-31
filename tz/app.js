var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({extended: true}));

// now just use the cache


var date = {}

app.get('/get_date', function (req, res) {
    console.log(date)
    res.json(date)
})



app.post('/push_date', function (req, res) {
    if (req.body.time && req.body.entering && req.body.leaving && req.body.living) {
        date = req.body
        res.sendStatus(200)
    } else {
        res.sendStatus(400)
    }
})

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server running at http://%s:%s", host, port)
});
