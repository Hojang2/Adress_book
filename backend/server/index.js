const express = require("express");
const bodyParser = require("body-parser");

const adress_list = [{
    name:"Test",
    email:"Test",
},
];

const server = express();
server.use(bodyParser.json());

function get_list (req, res){
    res.json({
        adress_list
    });
}

function add_to_list(req, res){
    adress_list.push(req.body);
}

server.get("/adress-book", get_list);
server.post('/adress-book', add_to_list)

module.exports = server;
