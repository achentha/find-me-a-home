var db = require('../models');
var Comment = db.Comment;
var User = db.User;
var Pet = db.Pet;

function index(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) {res.sendStatus(404); return;}
    let pet = user.pets.id(req.params.pet_id);
    if (pet)
      res.json(pet.comments);
    else {
      console.log(`Cannot find pet id ${req.params.pet_id} in
        user id ${req.params.user_id}`);
      res.sendStatus(404);
      return;
    }
  });
}

function show(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) {res.sendStatus(404); return;}
    let pet = user.pets.id(req.params.pet_id);
    if (pet) {
      let comment = pet.comments.id(req.params.comment_id);
      if (comment)
        res.json(comment);
      else
        res.sendStatus(404);
    }
    else {
      console.log(`Cannot find pet id ${req.params.pet_id} in
        user id ${req.params.user_id}`);
      res.sendStatus(404);
      return;
    }
  });
}

function create(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) {res.sendStatus(404); return;}
    let pet = user.pets.id(req.params.pet_id);
    if (pet) {
      let newComment = new Comment(req.body);
      pet.comments.push(newComment);
      user.save(function(err, savedUser) {
        if (err) {res.sendStatus(404); return;}
        res.json(newComment);
      });
    }
    else {
      console.log(`Cannot find pet id ${req.params.pet_id} in
        user id ${req.params.user_id}`);
      res.sendStatus(404);
      return;
    }
  });
}

function update(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) {res.sendStatus(404); return;}
    let pet = user.pets.id(req.params.pet_id);
    if (pet) {
      let comment = pet.comments.id(req.params.comment_id);
      if (comment) {
        comment.content = req.body.content;
        user.save(function(err, savedUser) {
          if (err) {res.sendStatus(404); return;}
          res.json(comment);
        });
      }
      else {
        console.log(`cannot find comment id ${req.params.comment_id}
          for pet id ${req.params.pet_id}`);
        res.sendStatus(404);
        return;
      }
    }
    else {
      console.log(`Cannot find pet id ${req.params.pet_id} in
        user id ${req.params.user_id}`);
      res.sendStatus(404);
      return;
    }
  });
}

function destroy(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) {res.sendStatus(404); return;}

    let pet = user.pets.id(req.params.pet_id);
    if (pet) {
      let comment = pet.comments.id(req.params.comment_id);
      if (comment) {
        comment.remove(function(err, deletedComment) {
          if (err) {res.sendStatus(404); return;}
          user.save(function(err, updatedUser) {
            if (err) {res.sendStatus(404); return;}
            res.json(deletedComment);
          });
        });
      }
      else {
        console.log(`Cannot find comment id ${req.params.comment_id} in
          pet id ${req.params.pet_id}`);
        res.sendStatus(404);
        return;
      }
    }
    else {
      console.log(`Cannot find pet id ${req.params.pet_id} in
        user id ${req.params.user_id}`);
      res.sendStatus(404);
      return;
    }
  });
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;
