const config = require("./config");
const server = require("./server");

console.log(config);

server.listen(config.port, () => {
    console.log("server running on http://127.0.0.1:8080/");
});