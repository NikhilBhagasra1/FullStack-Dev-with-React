
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/views')); //__dir and not _dir
var port = 8000; // you can use any port
app.listen(port);
console.log('server on' + port);


app.get('/login', (req, res) => {
    res.render('login.ejs')
})
app.get('/register', (req, res) => {
    res.render('register.ejs')
})
app.get('/main', (req, res) => {
    res.render('mainpage.ejs')
})

app.get('/orders', (req, res) => {
    res.render('orders.ejs')
})