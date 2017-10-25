let mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/front_end");

module.exports.Comment = require('./comment');
module.exports.Pet = require('./pet');
module.exports.User = require('./user');
