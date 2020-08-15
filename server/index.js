var path = require('path');
const express = require('express');
var app = express();

const publicPath = path.join(__dirname , '../public');

//serve static files from this path(eg:js, image, css etc)
app.use(express.static('../public'));

app.get('/index', function (req, res) {
    res.sendFile(`${publicPath}/index.html`);
 });

 app.get('/', function (req, res) {
    res.sendFile(`${publicPath}/index.html`);
 });

var server = app.listen(process.env.PORT || 3000 , function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 });