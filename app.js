'use strict';
const http = require('http');
const express = require('express');
const time = require('./timestamp');
const shotURL = require('./short')();
const app = express();
const timestamp = new express.Router;
const whoime = new express.Router;
const short = new express.Router;
console.log(process.arg);
app.use('/timestamp', timestamp);
app.use('/whoime', whoime);
app.use('/short', short);

timestamp.get('/api', (req, res) =>
  res.send(time(new Date())))

timestamp.get('/api/:str', (req, res) =>
  res.json(time(req.params.str)))

whoime.get('/api', (req, res) =>
  res.json(req.headers));
  
short.get('/new/:url*', (req, res) => {
    res.send(shotURL.add(req.url.slice(5), req.query));
})

app.use(express.static('public'));
// app.use(express.static('src/views'));

app.set('views', 'src/views');
app.set('view engine', 'jade');

app.get('/', (req, res) => {
  // console.log(req.headers);
  res.render('index', {title: 'Microservice', header: 'hello'});
});

const port = process.env.PORT || 3000;
const host = process.env.IP || 'localhost';
app.listen(port, host, (err) => {
  console.log(`running server on ${host}:${port}`);
});