var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); // lets us parse browser cookies
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var budgetRouter = require('./routes/budget');
var incomeRouter = require('./routes/income');
var expenseRouter = require('./routes/expense')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/budget', budgetRouter);
app.use('/income', incomeRouter);
app.use('/expense', expenseRouter);

module.exports = app;
