const mongoose = require('mongoose');
const url = process.env.MONGODB;
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.set('strictQuery', true);
mongoose.connect(url, options, function(a) {
  console.log('Connected to mongoDB.');
});

const userSchema = new mongoose.Schema({
  uid:          String,
  username:     String,
  firstName:    String,
  lastName:     String,
  pic:          String,

  bio:         {type: String, maxLength: 140}
});

const User  = new mongoose.model('User', userSchema);

var schemas = {
  User:  User
};

module.exports = schemas;