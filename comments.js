// create web server



var io = require('socket.io')(http);
// 5. create body parser object
var bodyParser = require('body-parser');
// 6. create mongoose object
var mongoose = require('mongoose');
// 7. create session object
var session = require('express-session');
// 8. create cookie parser object
var cookieParser = require('cookie-parser');
// 9. create connect mongo object
var MongoStore = require('connect-mongo')(session);
// 10. create flash object
var flash = require('connect-flash');
// 11. create passport object
var passport = require('passport');
// 12. create passport local object
var LocalStrategy = require('passport-local').Strategy;
// 13. load express validator
var expressValidator = require('express-validator');
// 14. load bcrypt
var bcrypt = require('bcryptjs');
// 15. load multer
var multer = require('multer');
// 16. load path
var path = require('path');
// 17. load fs
var fs = require('fs');
// 18. load async
var async = require('async');
// 19. load crypto
var crypto = require('crypto');
// 20. load nodemailer
var nodemailer = require('nodemailer');
// 21. load moment
var moment = require('moment');
// 22. load connect flash
var flash = require('connect-flash');
// 23. load config
var config = require('./config/database');

// 24. connect to database
mongoose.connect(config.database);
var db = mongoose.connection;

// 25. check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

// 26. check for db errors
db.on('error', function(err){
  console.log(err);
});

// 27. load models
var User = require('./models/user');
var Comment = require('./models/comment');

// 28. load passport config
require('./config/passport')(passport);

// 29. load express session
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { maxAge: 180 * 60 * 1000 }
}));

// 30. load cookie parser
app.use(cookieParser());

// 31. load body