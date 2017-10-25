var db = require('../models');
var Pet = db.Pet;
var User = db.User;

function index(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) {res.sendStatus(404); return;}
    res.json(user.pets);
  });
}

function show(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) {res.sendStatus(404); return;}

    let pet = user.pets.id(req.params.pet_id);
    if (pet)
      res.json(pet);
    else {
      console.log(`no pet_id ${req.params.pet_id} found in user
        ${user.first_name} ${user.last_name}`);
      res.sendStatus(404);
    }
  });
}

function create(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) {res.sendStatus(404); return;}
    let newPet = new Pet(req.body);
    user.pets.push(newPet);
    user.save(function(err, savedUser) {
      if (err) {res.sendStatus(404); return;}
      res.json(newPet);
    });
  });
}

function update(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) {res.sendStatus(404); return;}
    let pet = user.pets.id(req.params.pet_id);
    if (pet) {
      pet.name = req.body.name;
      pet.breed = req.body.breed;
      pet.pet_finder_api_id = req.body.pet_finder_api_id;
      pet.image_url_small = req.body.image_url_small;
      pet.image_url_large = req.body.image_url_large;
      user.save(function(err, savedUser) {
        if (err) {res.sendStatus(404); return;}
        res.json(pet);
      });
    }
    else {
      res.sendStatus(404);
    }
  });
}

function destroy(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) {res.sendStatus(404); return;}
    user.pets.id(req.params.pet_id)
      .remove(function(err, removedPet) {
      if (err) {res.sendStatus(404); return;}
      user.save(function(err, savedUser) {
        if (err) {res.sendStatus(404); return;}
        res.json(removedPet);
      })
    })
  });
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;
