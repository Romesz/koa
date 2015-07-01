/* jshint esnext: true*/
/* global require, __dirname, console */

var path = require('path');
var koa = require('koa');
var render = require('koa-ejs');
var router = require('koa-route');
var logger = require('koa-logger');

var app = koa();

app.use(logger()); // use koa logger middleware

/*
* Render
*/
render(app, {
  root: path.join(__dirname, 'view'),
  layout: 'hellokoa',
  viewExt: 'html',
  cache: false,
  debug: true
});

app.use(router.get('/', function *() {
  var greet = 'This string is served form a Koa GET request!';
  yield this.render('hellokoa', {
    greet_koa: greet
  });
}));

app.use(router.get('*', function *() {
  this.body = '404 page does not found';
}));

/*
* Error handling
*/
app.on('error', function(error) {
  console.error(error);
});

app.listen(3000);

console.log('Server listening on port 3000');