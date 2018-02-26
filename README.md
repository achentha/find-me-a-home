## Find Me a Home
Welcome to the 'Find Me a Home' App. It was created to help potential pet adopter to find a pet from animal shelters. The user can sign up/log in, then have the ability to do the following:
* search for breeds of animal by enter animal type(e.g. 'dog')
* search for all animals of the specified breed and location(e.g.'German Shepherd Dog' & 'San Francisco CA')
* the search results show the animal name, breed, age, sex, etc., along with the contact information for adoption
* add animals to his/her list of interest
* add comments for each animal
* dog is the only animal type supported in this first release

## Technologies Used
* MEAN stack
* Angular2/TypeScript for front-end
* Express/Node JS for back-end
* Mongo/Mongoose for DB
* Passport for user login/signup authentication
* Bcrypt for password encryption

## User Instructions
### 1. Sign Up
* From the home page, click on the 'Sign Up' link on the top right
<img src="images/Home.png">
* This bring you to the page with the Sign Up form
<img src="images/SignUp.png">
* Once you sign up, you will be logged in

### 2. Log in
* For the existing user, click on the 'Log in' link on the top right
<img src="images/Login.png">

### 3. After Sign Up/Log in, the user arrives at User page
#### 3.1 Search all dog breeds
* At this page, the user can search for all the dog breeds.
* Enter 'dog' in the 'Pet Type' input box
* Press 'Search Breeds' button
* This yields the list of all the 'Found Breeds'
<img src="images/BreedSearch.png">

#### 3.2 Search all available dogs for a specify breed
* Select one of 'Found Breeds' and enter it it the 'breed' input
* Enter the zip code in the 'location' input
* Press the 'Search Pets by Breed' button
<img src="images/PetSearch.png">
* This yields all the available dogs of the specified breed from all the shelters in the nearby location
<img src="images/PetSearchResult.png">



Pet search. From the user page:
### Display all dog breeds
* Enter 'dog' in the 'Pet Type:' box, then click 'Search Breeds' button. It will display all available dog breeds.
### Search dogs according to a selected breed
* Enter one of the breed displayed from the above step in the 'breed' box.
* Enter the location for search. It can be the zip code, or city,state (e.g. Fremont, CA). Then click 'Search Pets by breed' button. It will display all available dogs in the nearby location.
* For each of the display dogs, click on 'Add to My List' button to add the dog in your list.

## Acknowledgement/Credit
* Thanks to petfinder API which provides the access to their API to retrieve the information on the animals/shelters
* see https://www.petfinder.com for petfinder web site
* see https://www.petfinder.com/developers/api-docs for the API documentation

## History
11/01/2017 - Initial Creation
