var express = require('express');

const app = express();

app.use(express.static('public'));
// app.use(express.static('src/views'));

app.set('views', 'src/views');
app.set('view engine', 'jade');

app.get('/', (req, res) => {
    // console.log(req.headers);
    res.render('index', {title: 'Microservice', header: 'hello'});
});

app.get('/timestamp/', (req, res) => {
    res.send('time');
});

const port = process.env.PORT || 3000;
const host = process.env.IP || '0.0.0.0';
app.listen(port, host, (err) => {
    console.log(`running server on ${host}:${port}`);
});