const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyparser = require('body-parser')
const path = require('path')
const app = express();
const port = process.env.port || 3000
app.use(bodyparser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(port, () => {
 console.log(`Listening at http://localhost:port`)});