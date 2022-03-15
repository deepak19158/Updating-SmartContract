const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/jscript.js', (req, res) => {
//     res.sendFile(path.join(__dirname, '/jscript.js'));
//     // res.render('home');
// })

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
    // res.render('home');
})

app.listen(3000, () => {
    console.log('running @ 3000');
})