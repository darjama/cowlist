var http = require('http');
var express = require('express')
var app = express();
var connection = require('../db')

var hostname = 'localhost';
var port = 3000;

//connection.connect();

const httpHandler = (req, res, next = ()=>{}) => {
  console.log('Serving ' + req.method + ' for url ' + req.url);

  if (req.url === '/api/cows' && req.method === 'GET'){
    connection.query('SELECT * FROM cows', function (error, results, fields) {
      if (error) {throw error;}
      else {
        console.log(results);
        res.status(200);
        res.end();

      }
    });
    next();
    };

  if(req.url === '/api/cows' && req.method === 'POST'){
    console.log("headers",req.headers)
    console.log("post",post)
    console.log("body", req.body)
    connection.query('INSERT INTO cowlist SET ?', post, function (error, results, fields) {
      if (error) {throw error;} else {


      console.log(connection.query.sql);

      res.setStatus(200)
      res.end();
      next();
      }
    });
  }
}


const server = http.createServer(httpHandler);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});