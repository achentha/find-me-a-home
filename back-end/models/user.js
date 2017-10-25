var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  PetSchema = require('./pet').schema;


var UserSchema = new Schema({
	first_name: String,
	last_name: String,
	email: String,
  city: String,
  state: String,
  user_name: String,
  password: String,
  pets: [PetSchema],
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
