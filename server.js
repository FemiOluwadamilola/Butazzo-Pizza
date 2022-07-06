const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const dotenv = require('dotenv');
const index = require('./src/routes/index');
const app = express();

dotenv.config();

const DBUrl = process.env.MONGODB_URL;

mongoose.connect(DBUrl).then(() => console.log('DB connection Made successfuly....'))
.catch((err) => console.log(err.message) )

// middles
app.use(expressLayouts)
app.set("layout", "./layouts/index");
app.set("layout");
app.set('view engine','ejs')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public')));

// routes
app.use('/', index);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running..."))