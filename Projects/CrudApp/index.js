const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")

dotenv.config()

app.use(express.json())

mongoose.connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        UseUnifiedTopology: true
    })
    .then(console.log("Connected to Mongoose"))
    .catch((err) => console.log(err))

    app.use("/auth", authRoute)

app.listen("5000",() => {
    console.log("backend running")
})