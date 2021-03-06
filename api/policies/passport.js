var http = require('http');
var passport = require('passport');
var methods = ['login', 'logIn', 'logout', 'logOut', 'isAuthenticated', 'isUnauthenticated'];

module.exports = function (req, res, next) {

  // Initialize Passport
  passport.initialize()(req, res, function () {
   // Use the built-in sessions
   passport.session()(req, res, function () {
     // Make the user available throughout the frontend
     res.locals.user = req.user;
     if (req.isSocket) {
        for (var i = 0; i < methods.length; i++) {
          req[methods[i]] = http.IncomingMessage.prototype[methods[i]].bind(req);
        }
      }

     next();
   });
  });

};
