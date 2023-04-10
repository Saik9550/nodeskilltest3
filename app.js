//use npm start

// install express server using npm install express
//package-lock json will be created once we install express and it contains all express dependencies.

//now we need to import express module by require

require("dotenv").config()
const express = require("express")
const db = require("./configs/mongoose")


// to store session

const port = process.env.PORT || 6000

const app=express();




// we are going to set our view engine to ejs (install ejs first)
app.set("view engine", "ejs")
app.set("views", "./views")

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// we are going to use express router
app.use("/", require("./routes"))

app.listen(port, function (err) {
  if (err) {
    console.log("error in listening the server: ", err)
    return
  }
  console.log(`UP and Running on port ${port}`)
})
