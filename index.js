// This file is in chare of starting the application
const server  = require("./server");
const persist = require("./persist");

// Define a port
const port = process.argv[2] || process.env.PORT || 8080;

persist.connect(function() {
    // start listen to the server
    server.listen(port, function() {
        console.log("Running server on port " + port);
        console.log("");
    })
})