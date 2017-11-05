var db = require("../models");

var userList = [
  {
    first_name: "George",
    last_name: "Bush",
    email: "gbush@gmail.com",
    city: "Dallas",
    state: "Texas",
    user_name: "gbush",
    password: "gbush",
    pets: [],
  },
  {
    first_name: "Barack",
    last_name: "Obama",
    email: "bobama@gmail.com",
    city: "Chicago",
    state: "Illinois",
    user_name: "bobama",
    password: "bobama",
    pets: [],
  },
  {
    first_name: "Donald",
    last_name: "Trump",
    email: "dtrump@gmail.com",
    city: "West Palm Beach",
    state: "Florida",
    user_name: "dtrump",
    password: "dtrump",
    pets: [],
  },
];

var petList = [
  {
  	"name": "ATHENA",
  	"breed": "German Shepherd Dog",
  	"pet_finder_api_id": "39676288",
  	"image_url_large": "http://photos.petfinder.com/photos/pets/39676288/1/?bust=1508297121&width=500&-x.jpg",
  	"image_url_small": "http://photos.petfinder.com/photos/pets/39676288/1/?bust=1508297121&width=95&-fpm.jpg",
  },
  {
    "name": "Jessie",
    "breed": "German Shepherd Dog",
    "pet_finder_api_id": "39471121",
    "image_url_large": "http://photos.petfinder.com/photos/pets/39471121/1/?bust=1506228450&width=500&-x.jpg",
    "image_url_small": "http://photos.petfinder.com/photos/pets/39471121/1/?bust=1506228450&width=95&-fpm.jpg",
  },
  {
    "name": "Gemma",
    "breed": "German Shepherd Dog",
    "pet_finder_api_id": "39411194",
    "image_url_large": "http://photos.petfinder.com/photos/pets/39411194/2/?bust=1505743572&width=95&-fpm.jpg",
    "image_url_small": "http://photos.petfinder.com/photos/pets/39411194/2/?bust=1505743572&width=500&-x.jpg",
  },
];

for (let i = 0; i < userList.length; i++) {
  userList[i].pets.push(petList[i]);
}

// db.User.remove({}, function(err, users){
//
//   db.User.create(userList, function(err, users){
//     if (err) { return console.log('ERROR', err); }
//     console.log("all users:", users);
//     console.log("created", users.length, "users");
//     process.exit();
//   });
//
// });

db.User.remove({}, function(err, users){
  console.log("remove all users:", users);
  if (err) {return console.log('ERROR', err);}
  process.exit();
});
