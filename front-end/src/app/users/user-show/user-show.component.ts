import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { UsersService } from '../users.service';
import { PetfinderService } from '../../search/petfinder.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})

export class UserShowComponent implements OnInit {

	oneUser = <any>{};
  breedSearch = {};
  pet_finder_api_id;

  foundBreeds = [];
  foundPetsOfBreed = [];
  foundPet = {};


  findBreeds() {
    this.petfinderService.getPetBreeds()
      .subscribe(response => {
        this.foundBreeds = response.json().petfinder.breeds.breed;
          console.log(this.foundBreeds);
      });
  }

  findPetsOfBreed(breedSearch) {
    this.petfinderService.getPetsOfBreed(breedSearch)
      .subscribe(response => {
        this.foundPetsOfBreed = response.json().petfinder.pets.pet;
        console.log(response.json());
        this.breedSearch = {};

      })
  }

  findPet(pet_finder_api_id) {
    this.petfinderService.getPet(pet_finder_api_id)
      .subscribe(response => {
        this.foundPet = response.json().petfinder.pet;
        console.log(this.foundPet);
        this.pet_finder_api_id = '';
      })
  }

  constructor(
  	private route : ActivatedRoute,
  	private usersService : UsersService,
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
