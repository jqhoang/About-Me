var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var routes = require('./scripts/routes.js')

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'static','index.html'))
})

app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`On localhost:${ PORT }`);
});