var express = require('express');
let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var controllers = require('../controllers');
var router = express.Router();

//comments routes
router.get('/users/:user_id/pets/:pet_id/comments', controllers.comments.index);
router.post('/users/:user_id/pets/:pet_id/comments', controllers.comments.create);
router.get('/users/:user_id/pets/:pet_id/comments/:comment_id', controllers.comments.show);
router.put('/users/:user_id/pets/:pet_id/comments/:comment_id', controllers.comments.update);
router.delete('/users/:user_id/pets/:pet_id/comments/:comment_id', controllers.comments.destroy);

//pets routes
router.get('/users/:user_id/pets', controllers.pets.index);
router.post('/users/:user_id/pets', controllers.pets.create);
router.get('/users/:user_id/pets/:pet_id', controllers.pets.show);
router.put('/users/:user_id/pets/:pet_id', controllers.pets.update);
router.delete('/users/:user_id/pets/:pet_id', controllers.pets.destroy);

//users routes
router.get('/users', controllers.users.index);
router.post('/users', controllers.users.create);
router.get('/users/:user_id', controllers.users.show);
router.put('/users/:user_id', controllers.users.update);
router.delete('/users/:user_id', controllers.users.destroy);

module.exports = router;
