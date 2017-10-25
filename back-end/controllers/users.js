var db = require('../models');
var User = db.User;

function index(req, res) {
  User.find({}, function(err, users) {
    if (err) {res.sendStatus(404); return;}
    res.json(users);
  });
}

function show(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) {res.sendStatus(404); return;}
    res.json(user);
  });
}

function create(req, res) {
  User.create(req.body, function(err, createdUser) {
    if (err) {res.sendStatus(404); return;}
    res.json(createdUser);
  });
}

function update(req, res) {
  User.findByIdAndUpdate(req.params.user_id,
    {$set: req.body}, function(err, user) {
    if (err) {res.sendStatus(404); return;}
    res.json(user);
  });
}

function destroy(req, res) {
  User.findByIdAndRemove(req.params.user_id, function(err, removedUser) {
    if (err) {res.sendStatus(404); return;}
    res.json(removedUser);
  });
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;
