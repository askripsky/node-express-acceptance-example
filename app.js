var express = require('express');

var app = module.exports = express();

app.use(express.static('public'));

if (!module.parent) {
    app.listen('3000');
}