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
  foundUserPetList = [];

  clearSearchFound() {
    this.foundBreeds = [];
    this.foundPetsOfBreed = [];
    this.foundPet = {};
    this.foundUserPetList = [];
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
    console.log(`getPets() for user: ${this.oneUser.first_name} ${this.oneUser.last_name}, id: ${this.oneUser._id}`);
    this.clearSearchFound();

    //update all user pets from backend db
    this.petsService.getAllUserPets(this.oneUser._id)
    .subscribe(response => {
			console.log(response.json());
			this.oneUser.pets = response.json();

      //query petfinder api for each pet
      this.oneUser.pets.forEach((pet) => {
        console.log(`pet id: ${pet._id}, pet apiId: ${pet.pet_finder_api_id}`);

        this.petfinderService.getPet(pet.pet_finder_api_id)
          .subscribe(response => {
            this.foundPet = response.json().petfinder.pet;
            this.foundUserPetList.push(this.foundPet);

            this.foundUserPetList.forEach(pet => {
              console.log(`${pet.name.$t} ${pet.id.$t}`);
            });
          });
      });
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
    this.petsService.createOneUserPet(this.oneUser._id, newPet)
    .subscribe(res => {
      console.log(`response ${res}`);
      this.getPets();
    });
  }

  deletePet(pet) {
    this.petsService.deleteOneUserPet(this.oneUser, pet)
      .subscribe(res => {
        console.log(`response: ${res}`);
        this.getPets();
      });
  }

  deletePetViaApiId(apiPet) {
    this.petsService.deletePetViaApiId(this.oneUser._id, apiPet)
      .subscribe(res => {
        console.log(`response: ${res}`);
        this.getPets();
      })
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
