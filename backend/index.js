require("dotenv").config()

const express = require("express")
const app = express()
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/Platforma-memeuri", (err) => {
    if (err) 
        console.log(err);
}) // process.env.DATA_URL
const db = mongoose.connection
db.once("open", () => console.log("Connected to database"))

app.use(express.json())

const MEMESRouter = require("./routes/MEMES")
app.use("/MEMES", MEMESRouter)


app.get("/home", function(req, res) { //
    res.send({
        name: "Ana",
        age: 24
    });
});

app.get("/", function(req, res) { //
    res.send("hello");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});