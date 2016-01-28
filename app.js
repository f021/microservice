const express = require('express');
const time = require('./timestamp');
const shotURL = require('./short')();
const app = express();
const timestamp = new express.Router;
const whoime = new express.Router;
const short = new express.Router;

app.use('/timestamp', timestamp);
app.use('/whoime', whoime);
app.use('/short', short);

timestamp.get('/api', (req, res) =>
  res.send(time(new Date())))

timestamp.get('/api/:str', (req, res) =>
  res.send(time(req.params.str)))

whoime.get('/api', (req, res) =>
  res.json(req.headers));
  
short.get('/new/:id', (req, res) => {
    // console.log(req.params);
    res.sent(shotURL.add(req.params.id, req.query));
})

app.use(express.static('public'));
// app.use(express.static('src/views'));

app.set('views', 'src/views');
app.set('view engine', 'jade');

app.get('/', (req, res) => {
  // console.log(req.headers);
  res.render('index', {title: 'Microservice', header: 'hello'});
});

console.log(shotURL);
const port = process.env.PORT || 3000;
const host = process.env.IP || '0.0.0.0';
app.listen(port, host, (err) => {
  console.log(`running server on ${host}:${port}`);
});