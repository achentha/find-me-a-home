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

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    // app.get('/login', function(req, res) {
    //
    //     // render the page and pass in any flash data if it exists
    //     res.render('login.ejs', { message: req.flash('loginMessage') });
    // });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    // app.get('/signup', function(req, res) {
    //
    //     // render the page and pass in any flash data if it exists
    //     res.render('signup.ejs', { message: req.flash('signupMessage') });
    // });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

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
        req.logout();
        res.redirect('/');
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
