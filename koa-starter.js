var path = require('path');
var koa = require('koa');
var render = require('koa-ejs');
var app = koa();

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

app.use(function *(next) {
  console.log('I can do amazing things here BEFORE the view is served!');
  yield next;
});

app.use(function *(){
  //this.body = 'Hello Koaaaaa';
  yield this.render('hellokoa', {
    greet_koa: 'helooo Koaaa'
  });
});

app.on('error', function(error) {
  console.error(error);
})

app.listen(3000);

console.log('Server listening on port 3000');


/*
Check moduls:
"koa-basic-auth": "^1.1.1",
"koa-compose": "^2.3.0",
"koa-csrf": "^2.1.1",
"koa-logger": "^1.2.1",
"koa-route": "^1.1.4",
"koa-session": "^3.1.0",
"koa-static": "^1.4.5",
*/