var http = require('http');
var express = require('express')
var app = express();
var connection = require('../db')
var models = require('./models.js')
var path = require('path')
var fs = require('fs')
var bodyParser = require('body-parser')


var hostname = 'localhost';
var port = 3000;

app.use(bodyParser.json());

app.get('/api/cows', (req, res) => {models.getAllCows(req, res)} );

app.post('/api/cows', (req, res) => {models.addCow(req, res)} );

app.get("/", (req,res) => res.sendFile(path.resolve('../client/index.html')));

app.listen(port, () => console.log("node.js serverlistening on port ${port}"));