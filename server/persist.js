// This file is in charge of all database connections

const mongoose = require("mongoose");
const db = mongoose.connection;

function connect(callback) {
    let connection_string = "mongodb+srv://minh-nguyen-2601:minh-nguyen-2601@cluster0.db836.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
   
    console.log("Connect to db ...")

    mongoose.connect(connection_string, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch( function(error) {
        console.log("There was an error connecting to mongo: ", error);
    })

    db.once("open", callback);
}

module.exports = {
    connect,
}