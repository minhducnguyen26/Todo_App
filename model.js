const mongoose = require("mongoose");

const todo_schema = mongoose.Schema({
    name       : String,
    description: String,
    done       : Boolean,
    deadline   : Date,
    category   : String
});

const Todo = mongoose.model("Todo Model", todo_schema);

let store = {};

module.exports = {
    Todo,
    store
};