var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  CommentSchema = require('./comment').schema;


var PetSchema = new Schema({
	name: String,
  breed: String,
  pet_finder_api_id: Number,
  comments: [CommentSchema],
});

var Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
