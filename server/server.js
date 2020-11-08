const path  = require("path");
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "/../public");
const port = process.env.PORT || 3000;
var app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", (socket)=>{
    console.log("A new user just connected");
    socket.on('disconnect', ()=>{
        console.log("A user has disconnected");
    });
});


server.listen(port, ()=>{
    console.log('Server is up on port', port);
});
