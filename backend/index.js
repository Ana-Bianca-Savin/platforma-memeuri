const express = require("express")
const app = express()

app.get("/home", function(req, res) {
    res.send({
        name: "Ana",
        age: 24
    });
});

app.get("/", function(req, res) {
    res.send("hello");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});