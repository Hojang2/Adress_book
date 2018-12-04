const express = require("express");

const server = express();

function index(req, res){
    res.end(req.method + "hello world");
}

function contact(req, res){
    res.end("Hello from contact")
}


server.get("/", index);
server.get("/contact", contact);

module.exports = server;
