require("dotenv").config()

const express = require("express")
const app = express()
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URL, (err) => {
    if (err) 
        console.log(err);
})
const db = mongoose.connection
db.once("open", () => console.log("Connected to database"))

app.use(express.json())

const MEMESRouter = require("./routes/MEMES")
app.use("/MEMES", MEMESRouter)

const UsersRouter = require("./routes/Users")
app.use("/Users", UsersRouter)

app.listen(3000, function() {
    console.log("Server started on port 3000");
});