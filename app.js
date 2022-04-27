const express = require("express");
const bodyParser = require('body-parser');
const setupRoutes = require("./app/routes/index");


// cors mongoose 
const cors = require("cors");

//instant express
const app = express();

app.use(cors());

// parse request of content type - application/json
app.use(express.json());

// parse request of content type - application/urlencorded
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
//simple route

app.get("/", (req, res) => {
    res.json({ message: "welcom" });

});


setupRoutes(app);


module.exports = app;
