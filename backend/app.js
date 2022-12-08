const http = require('http');

//third party packages
const express = require('express')

//express exports a function
const app = express();
const port = 3000;
const server = http.createServer(app);

app.use((req, res, next) => {
    console.log('In the middleware')
    next()
});

app.use((req, res, next) => {
    console.log('In the middleware part 2')
});

server.listen(port);