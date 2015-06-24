var koa = require('koa');
var app = koa();

app.use(function *(next){
  this.body = 'Hello Koaaaaa';
  yield next;
  //console.log(this.request);
  //console.log(this.response);
});

app.use(function *() {
  console.log('I can do amazing things here AFTER the view is served!');
});

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