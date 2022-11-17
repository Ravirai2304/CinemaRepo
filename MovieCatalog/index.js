const express = require('express');
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require('./routes/routes');
require('dotenv').config();


const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);

const databse = mongoose.connection

databse.on('error', (error) => {
	console.log(error);
})

databse.once('connected', () => {
	console.log('Database Connected');
})

//const Contact = mongoose.model("admintest", admintest);

const app = express();
app.use('/api', routes)
app.set("view engine", "ejs");

app.use(bodyParser);

app.use(express.json())






app.listen(3000, () =>{
	console.log("App is running at ${3000}");
});
