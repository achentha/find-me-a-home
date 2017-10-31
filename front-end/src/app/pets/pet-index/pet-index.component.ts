import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { PetsService } from '../pets.service';
import { PetfinderService } from '../../search/petfinder.service';

@Component({
  selector: 'app-pet-index',
  templateUrl: './pet-index.component.html',
  styleUrls: ['./pet-index.component.css']
})
export class PetIndexComponent implements OnInit {
  apiPet = {};
  backendPets = [];
  apiPets = [];
  userId = 0;

  getAllUserPets() {
    //update all user pets from backend db
    this.petsService.getAllUserPets(this.userId)
    .subscribe(response => {
      console.log(response.json());
      this.backendPets = response.json();

      //query petfinder api for each pet
      this.apiPets = [];
      this.backendPets.forEach((pet) => {
        console.log(`pet id: ${pet._id}, pet apiId: ${pet.pet_finder_api_id}`);

        this.petfinderService.getPet(pet.pet_finder_api_id)
          .subscribe(response => {
            console.log(`pet-index: getPet w/ Resp: ${response}`);
            this.apiPet = response.json().petfinder;
            //cache backend db info for easy access later
            this.apiPet['name'] = pet.name;
            this.apiPet['_id'] = pet._id;

            this.apiPets.push(this.apiPet);
          });
      });
    });
  }

  deleteOneUserPet(apiPet) {
    this.route.params.forEach((param) => {
    this.petsService.deleteOneUserPet(this.userId, apiPet._id)
      .subscribe(res => {
        console.log(`response: ${res}`);
        this.getAllUserPets();
      })
    })
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petsService: PetsService,
    private petfinderService: PetfinderService,
  ) { }

  ngOnInit() {
    this.route.params.forEach((param) => {
      this.userId = param.id;
      this.getAllUserPets();
    });
  }

}
