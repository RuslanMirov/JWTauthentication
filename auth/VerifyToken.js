// middleware checks to access

var jwt = require('jsonwebtoken');
var config = require('../config');

function verifyToken(req, res, next) {
  // Find token in cookie
  var token = req.cookies["x-access-token"];

  if (!token)
    // If there is no token, redirect to the login page
    return res.redirect('/');
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
      //If the token is not a valid redirect to the login page
      return res.redirect('/');
    next();
  });
}

module.exports = verifyToken;