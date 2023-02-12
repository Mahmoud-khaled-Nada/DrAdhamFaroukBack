// Require .env connected
require('dotenv').config()
// Require DB connected
require('./config/db');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const port = process.env.PORT || 5000;
const app = express();


app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"))
app.use(cookieParser());

app.use('/api/v1/auth',   authRouter);
app.use('/api/v1/index', indexRouter);
app.use('/api/v1/users',  usersRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
module.exports = app;
