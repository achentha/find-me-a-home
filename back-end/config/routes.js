var express = require('express');
let app = express();

app.use(function(req, res, next) {
  console.log("got a request", req.method, req.url);
  next();
})

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var controllers = require('../controllers');

module.exports = function(app, passport) {

  // =====================================
  // HOME PAGE (with login links) ========
  // =====================================
  // app.get('/', function(req, res) {
  //     res.render('index.ejs'); // load the index.ejs file
  // });

  app.post('/login', passport.authenticate('local-login'), function(req, res) {
    console.log('\n\n\n/login:');
    req.login(req.user, function(err, res2) {
      if (err) {res.sendStatus(404); return;}
      //console.log('\n\n\nres: ', res);
      //console.log('\n\n\nreq: ', req);
      console.log(`\n\n\nreturning /users/${req.user.id}`);
      res.json({redirect_url: `/users/${req.user.id}`});
    })
  });

  app.post('/signup', passport.authenticate('local-signup'), function(req, res) {
    console.log('signing up MMM');
    req.login(req.user, function(err,res2) {
      if (err) {console.log(`err: `, err); res.sendStatus(404); return;}
      console.log(`returning /users/${req.user.id}`);
      res.json({redirect_url: `/users/${req.user.id}`});
    })
  });

  // =====================================
  // PROFILE SECTION =====================
  // =====================================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  // app.get('/profile', isLoggedIn, function(req, res) {
  //     res.render('profile.ejs', {
  //         user : req.user // get the user out of session and pass to template
  //     });
  // });

  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get('/logout', function(req, res) {
    console.log('\n\n\nlogout: ', req);
    req.logout();
    console.log('\n\n\ndone logout');
    res.json({redirect_url: '/'});
  });

  //comments routes
  app.get('/users/:user_id/pets/:pet_id/comments', controllers.comments.index);
  app.post('/users/:user_id/pets/:pet_id/comments', controllers.comments.create);
  app.get('/users/:user_id/pets/:pet_id/comments/:comment_id', controllers.comments.show);
  app.put('/users/:user_id/pets/:pet_id/comments/:comment_id', controllers.comments.update);
  app.delete('/users/:user_id/pets/:pet_id/comments/:comment_id', controllers.comments.destroy);

  //pets routes
  app.get('/users/:user_id/pets', controllers.pets.index);
  app.post('/users/:user_id/pets', controllers.pets.create);
  app.get('/users/:user_id/pets/:pet_id', controllers.pets.show);
  app.put('/users/:user_id/pets/:pet_id', controllers.pets.update);
  app.delete('/users/:user_id/pets/:pet_id', controllers.pets.destroy);
  app.get('/users/:user_id/pets/petfinderapi/:pet_api_id', controllers.pets.findByApiId);
  app.delete('/users/:user_id/pets/petfinderapi/:pet_api_id', controllers.pets.destroyByApiId);

  //users routes
  app.get('/users', controllers.users.index);
  app.post('/users', controllers.users.create);
  app.get('/users/:user_id', controllers.users.show);
  app.put('/users/:user_id', controllers.users.update);
  app.delete('/users/:user_id', controllers.users.destroy);

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
