import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { UsersService } from '../users.service';
import { PetsService } from '../../pets/pets.service';
import { PetfinderService } from '../../search/petfinder.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})

export class UserShowComponent implements OnInit {

	oneUser = <any>{};
  breedSearch = {};
  pet_type = '';
  pet_finder_api_id;

  foundBreeds = [];
  foundPetsOfBreed = [];
  foundPet = {};

  clearSearchFound() {
    this.foundBreeds = [];
    this.foundPetsOfBreed = [];
    this.foundPet = {};
  }

  findBreeds(pet_type) {
    this.clearSearchFound();
    this.petfinderService.getPetBreeds(pet_type)
      .subscribe(response => {
        this.foundBreeds = response.json().petfinder.breeds.breed;
          console.log(this.foundBreeds);
          this.pet_type = '';
      });
  }

  findPetsOfBreed(breedSearch) {
    this.clearSearchFound();
    this.petfinderService.getPetsOfBreed(breedSearch)
      .subscribe(response => {
        this.foundPetsOfBreed = response.json().petfinder.pets.pet;
        console.log(response.json());
        this.breedSearch = {};
      })
  }

  findPet(pet_finder_api_id) {
    this.clearSearchFound();
    this.petfinderService.getPet(pet_finder_api_id)
      .subscribe(response => {
        this.foundPet = response.json().petfinder.pet;
        console.log(this.foundPet);
        this.pet_finder_api_id = '';
      })
  }

  getPets() {
    console.log('showAllUserPets');
    this.petsService.getAllUserPets(this.oneUser)
    .subscribe(response => {
			console.log(response.json());
			this.oneUser.pets = response.json();
    });
  }

  addPet(pet) {
    console.log(`pet name: ${pet.name.$t}, breed: ${pet.breeds.breed.$t}, apiId: ${pet.id.$t}`)
    let newPet = {
      "name" : pet.name.$t,
      "breed" : pet.breeds.breed.$t,
      "pet_finder_api_id" : pet.id.$t,
    }

    console.log(`newPet: ${newPet.name}, ${newPet.breed}, ${newPet.pet_finder_api_id}`);
    this.petsService.createOneUserPet(this.oneUser, newPet)
    .subscribe(res => {
      console.log(`response ${res}`);
      this.getPets();
    });
  }

  deletePet(pet) {
    this.petsService.deleteOneUserPet(this.oneUser,
      {"pet_id": pet._id})
      .subscribe(res => {
        console.log(`response: ${res}`);
        this.getPets();
      });
  }

  constructor(
  	private route: ActivatedRoute,
  	private usersService: UsersService,
    private petsService: PetsService,
    private petfinderService: PetfinderService,
  ) { }

  ngOnInit() {
  	this.route.params.forEach( param => {
  		this.usersService.getOneUser(param.id)
  		.subscribe(response => {
  			console.log(response.json());
  			this.oneUser = response.json();
  		});
  	});
  }

}
