var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017', function(err) {
  if (err) {
    console.log("mongoose connect error " + err);
  } else {
    console.log("mongoose connected");
  }
});