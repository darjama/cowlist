var http = require('http');
var express = require('express')
var app = express();
var connection = require('../db')
var mysql = require('mysql');

module.exports.addCow = function (req, res, callback) {
  //console.log("headers",req.headers)
  //console.log("body", req.body)
  connection.query('INSERT INTO cows SET ?', req.body, function (error, results, fields) {
    if (error) {return error;} else {
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.body));
  }
});
}

module.exports.getAllCows = function (req, res, callback) {
  //console.log("headers",req.headers)
  connection.query('SELECT * FROM cows', function (error, results, fields) {
    if (error) {return error;} else {
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(results));
    }
  });
  }