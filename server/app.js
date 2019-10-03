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

app.use(express.static('../client'))
app.use(bodyParser.json());

app.get('/api/cows', (req, res) => {models.getAllCows(req, res)} );

app.post('/api/cows', (req, res) => {
  console.log("reqbody->",req.body);
  models.addCow(req, res)} );

app.get("/", (req,res) => res.sendFile(path.resolve('../client/dist/index.html')));

app.listen(port, () => console.log(`node.js server listening on port ${port}`));