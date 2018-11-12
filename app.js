const express = require("express");
const app = express();

app.use('/users', (req, res, next) => {
    console.log("This is a users route");
    res.send("<h1>Hello New Users<h1>");
});

app.use('/', (req, res, next) => {
    console.log("This is a home route");
    res.send("<h1>Weclome User<h1>");
});

app.listen(8080);