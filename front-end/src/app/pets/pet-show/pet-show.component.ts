import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { PetsService } from '../pets.service';
import { PetfinderService } from '../../search/petfinder.service';

@Component({
  selector: 'app-pet-show',
  templateUrl: './pet-show.component.html',
  styleUrls: ['./pet-show.component.css']
})
export class PetShowComponent implements OnInit {

  apiPet = {};
  backendPet = {};
  userId = 0;

  addPet(apiPet) {
    console.log(`pet name: ${apiPet.name.$t}, breed: ${apiPet.breeds.breed.$t}, apiId: ${apiPet.id.$t}`)
    let newPet = {
      "name" : apiPet.name.$t,
      "breed" : apiPet.breeds.breed.$t,
      "pet_finder_api_id" : apiPet.id.$t,
    }

    console.log(`newPet: ${newPet.name}, ${newPet.breed}, ${newPet.pet_finder_api_id}`);
    this.petsService.createOneUserPet(this.userId, newPet)
    .subscribe(res => {
      console.log(`response ${res}`);
      // this.getPets();
      // this.router.navigate(['showUserPets']);
    });
  }

  deletePet(apiPet) {
    this.route.params.forEach((param) => {
    this.petsService.deletePetViaApiId(this.userId, apiPet)
      .subscribe(res => {
        console.log(`response: ${res}`);
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

      this.petfinderService.getPet(param.pet_api_id)
        .subscribe(response => {
          console.log(`pet-show: getPet w/ Resp: ${response}`);
          this.apiPet = response.json().petfinder;
          //cache backend db info for easy access later
          // this.apiPet['name'] = pet.name;
          // this.apiPet['_id'] = pet._id;
          this.petsService.findPetViaApiId(this.userId, this.apiPet)
          .subscribe(response => {
            console.log(response.json());
            this.backendPet = response.json();
          });
        });
    });
  }

}
