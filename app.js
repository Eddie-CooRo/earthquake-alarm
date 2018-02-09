var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

const graphql = require('graphql');
const graphqlHttp = require('express-graphql');
import models from './models';
import graphqlSchema from './graphql';
import { login, graphqlAuthenticate } from './auth';
import { jwtOptions } from './config';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'none');

// setting authenticate strategy
const params = {
  secretOrKey: jwtOptions.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};
let strategy = new Strategy(params, async (payload,done)=>{
  models.User.read(payload.id, (err,user)=>{
    if(err){
      return done(err,null);
    } else {
      if(user){
        return done(null, user); 
      } else {
        return done(new Error("User not found"),null);
      }
    }
  });
});
passport.use(strategy);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.use('/graphql', graphqlAuthenticate, (req,res,next)=>{
  let context = {
    login,
  };
  if(req.user) context.user = req.user;
  return graphqlHttp({
    schema: graphqlSchema,
    context:context,
    graphiql: process.env.NODE_ENV === 'development',
    pretty:true
   })(req,res,next)
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
