var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  PetSchema = require('./pet').schema;

var bcrypt   = require('bcrypt-nodejs');

var UserSchema = new Schema({
  local: {              //local authenticate
    email: String,
    password: String,
  },
	first_name: String,
	last_name: String,
  city: String,
  state: String,
  // user_name: String,
  pets: [PetSchema],
});

// methods ======================
// generating a hash
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

var User = mongoose.model('User', UserSchema);

module.exports = User;
