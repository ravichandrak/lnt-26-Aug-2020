var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var authorApiRouter= require('./routes/author-api-controller');
var bookApiRouter= require('./routes/book-api-controller');

var showRouter = require('./routes/index-controller');
port = process.env.Port || 3000;

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', showRouter);
app.use('/api/authors', authorApiRouter);
app.use('/api/books', bookApiRouter);

app.get('*', function(req, res) {
  var errortext = `
    <div style="text-align:center">
      <p><h1 style="color:red">404 !!</h1></p>
      <p><hr/></p>
      <p>This request is not handled in the API.</p>
    </div>
  `;
  res.send(errortext, 404);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`server is running successfully ${port}`);
});

module.exports = app;