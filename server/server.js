// Import express so you can use it
const express = require("express");
const { Model } = require("mongoose");
const cors = require("cors");

const {store, Todo} = require("./model");
// Instantiate your app/server
const app = express();

app.use(express.json({}));
app.use(cors());

// Middleware
app.use((req, res, next) => {
    console.log("");
    console.log("Time  :", Date());
    console.log("Method:", req.method);
    console.log("Path  :", req.originalUrl);
    console.log("Body  :", req.body);
    console.log("");
    next();
})

// GET - Get all
app.get("/todo", function(req, res) {
    res.setHeader("Content-Type", "application/json");

    let find_query = {};
    console.log(req.query);

    // Find specific todos with query
    if (req.query.name !== null && req.query.name !== undefined) {
        find_query.name = req.query.name;
    }

    // Get all todos
    console.log("Getting all todos");
    // return all of the todos in the store
    Todo.find(find_query, function(err, todos) {
        if(err) {
            console.log("There was and error finding all todos: ", err);
            // sending back the error
            res.status(500).json({
                message: "Unable to get all todos",
                error  : err
            });
            return
        }
        // success! return all todos
        res.status(200).json(todos);
    })
})

// GET - Get one
app.get("/todo/:id", function(req, res) {
    res.setHeader("Content-Type", "application/json");
    console.log(`Getting one todo with id: ${req.params.id}`);
    Todo.findById(req.params.id, function(err, todo) {
        // check if there was an error
        if(err) {
            console.log(
                `There was and error finding a todo with id ${req.params.id}`,
                err
            );
            // sending back the error
            res.status(500).json({
                    message: `Unable to find todo with id: ${req.params.id}`,
                    error  : err
                });
            return
        } else if(todo === null) {
            console.log(
                `There was and error finding a todo with id ${req.params.id}`,
                err
            );
            res.status(404).json({
                message: `Unable to find todo with id: ${req.params.id}`,
                error  : err
            });
            return
        }
        // success! return todo
        res.status(200).json(todo)
    })
})

// POST - Create one
app.post("/todo", function(req, res){
    res.setHeader("Content-Type", "application/json");
    console.log("Creating new todo with body: ", req.body);

    if(!req.body.name) {
        res.status(400).json({
            message: "Missing information in the body",
        });
        console.log("There is missing information in the body");
        return
    }
    
    let creating_todo_object = {
        name       : req.body.name,
        description: req.body.description || "No description",
        done       : req.body.done,
        deadline   : req.body.deadline || new Date(),
        category   : req.body.category || "No specification"
    }

    Todo.create(creating_todo_object, function(err, todo) {
        if(err) {
            console.log("Unable to create new todo")
            res.status(500).json({
                message: "Unable to create todo",
                error: err
            });
            return
        }
        // success! return the todo after creating it
        res.status(201).json(todo);
    })
})

// PUT - Replace
app.put("/todo/:id", function(req, res) {
    res.setHeader("Content-Type", "application/json");
    console.log("Replacing old todo with body: ", req.body);

    if(!req.body.name || !req.body.description) {
        res.status(400).json({
            message: "Missing information in the body",
        });
        console.log("There is missing information in the body");
        return
    }
    
    let creating_todo_object = {
        name       : req.body.name,
        description: req.body.description,
        done       : req.body.done,
        deadline   : req.body.deadline || new Date(),
        category   : req.body.category || "No specification"
    }
    Todo.updateOne(
        { _id: req.params.id },
        { $set: creating_todo_object },
        function(err, updateOneResponse) {
            // check if there was an error
            if(err) {
                console.log(
                    `There was and error updating a todo with id ${req.params.id}`,
                    err
                );
                // sending back the error
                res.status(500).json({
                        message: `Unable to find todo with id: ${req.params.id}`,
                        error  : err
                    });
                return
            // check if the todo even exist
            } else if(updateOneResponse.n === 0) {
                console.log(
                    `There was and error finding a todo with id ${req.params.id}`,
                    err
                );
                res.status(404).json({
                    message: `Unable to find todo with id: ${req.params.id}`,
                    error  : err
                });
                return
            }
            // success! return todo that was updating
            res.status(200).json(updateOneResponse) 
        }
    )

})

// PATCH - Update one or more attribute of the object
app.patch("/todo/:id", function(req, res) {
    res.setHeader("Content-Type", "application/json");
    console.log(`Updating todo with id: ${req.params.id} with body `, req.body);

    let update_todo = {};
    if (req.body.name !== null && req.body.name !== undefined) {
        update_todo.name = req.body.name; 
    }
     
    if (req.body.description !== null && req.body.description !== undefined) {
        update_todo.description = req.body.description;
    }

    if (req.body.done !== null && req.body.done !== undefined) {
        update_todo.done = req.body.done;
    }

    if (req.body.deadline !== null && req.body.deadline !== undefined) {
        update_todo.deadline = req.body.deadline;
    }

    Todo.updateOne(
        { _id: req.params.id },
        { $set: update_todo },
        function(err, updateOneResponse) {
            // check if there was an error
            if(err) {
                console.log(
                    `There was and error updating a todo with id ${req.params.id}`,
                    err
                );
                // sending back the error
                res.status(500).json({
                        message: `Unable to find todo with id: ${req.params.id}`,
                        error  : err
                    });
                return
            // check if the todo even exist
            } else if(updateOneResponse.n === 0) {
                console.log(
                    `There was and error finding a todo with id ${req.params.id}`,
                    err
                );
                res.status(404).json({
                    message: `Unable to find todo with id: ${req.params.id}`,
                    error  : err
                });
                return
            }
            // success! return todo that was updating
            res.status(200).json(updateOneResponse) 
        }
    )    
})

// DELETE - Delete one object with given id
app.delete("/todo/:id", function(req, res) {
    res.setHeader("Content-Type", "application/json")
    console.log(`Deleting one todo with id: ${req.params.id}`);
    
   Todo.findByIdAndDelete(req.params.id, function(err, todo) {
       // check if there was an error
       if(err) {
        console.log(
            `There was and error deleting a todo with id ${req.params.id}`,
            err
        );
        // sending back the error
        res.status(500).json({
                message: `Unable to find todo with id: ${req.params.id}`,
                error  : err
            });
        return
    } else if(todo === null) {
        console.log(
            `There was and error finding a todo with id ${req.params.id}`,
            err
        );
        res.status(404).json({
            message: `Unable to find todo with id: ${req.params.id}`,
            error  : err
        });
        return
    }
    // success! return todo that was deleted
    res.status(200).json(todo)
   }) 
})

//! Handle production
if (process.env.NODE_ENV === "production") {
    //* Static folder
    app.use(express.static("public"));

    //* Handle SPA
    app.get(/.*/, (req, res) => res.sendFile("public/index.html"));
}

module.exports = app;