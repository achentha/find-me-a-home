var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  CommentSchema = require('./comment').schema;


var PetSchema = new Schema({
	name: String,
  breed: String,
  // description: String,
  pet_finder_api_id: Number,
  // image_url_small: String,
  // image_url_large: String,
  comments: [CommentSchema],
});

var Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
