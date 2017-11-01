import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { PetsService } from '../pets.service';
import { PetfinderService } from '../../search/petfinder.service';
import { CommentsService } from '../../comments/comments.service';

@Component({
  selector: 'app-pet-show',
  templateUrl: './pet-show.component.html',
  styleUrls: ['./pet-show.component.css']
})
export class PetShowComponent implements OnInit {

  apiPet = <any>{};
  backendPet = {};
  userId = 0;
  petId = 0;

  addComment(apiPet) {
    // console.log(`addComment() for ${apiPet.name.$t}, pet id ${this.backendPet._id}`);
    this.petsService.findPetViaApiId(this.userId, apiPet)
      .subscribe(res => {
        console.log(`findPetViaApiId() res = ${res}`);
        this.petId = res.json()[0]._id;
        console.log(`petId ${this.petId}`);
        this.router.navigateByUrl(`/users/${this.userId}/pets/${this.petId}/comments/new`);


      });
  }

  addPet(apiPet) {
    console.log(`pet name: ${apiPet.pet.name.$t}, breed: ${apiPet.pet.breeds.breed.$t}, apiId: ${apiPet.pet.id.$t}`)
    let newPet = {
      "name" : apiPet.pet.name.$t,
      "breed" : apiPet.pet.breeds.breed.$t,
      "pet_finder_api_id" : apiPet.pet.id.$t,
    }

    console.log(`newPet: ${newPet.name}, ${newPet.breed}, ${newPet.pet_finder_api_id}`);
    this.petsService.createOneUserPet(this.userId, newPet)
    .subscribe(res => {
      console.log(`response ${res}`);
      this.backendPet = res.json();
      // this.getPets();
      // this.router.navigate(['showUserPets']);
      this.router.navigateByUrl(`/users/${this.userId}/pets`);
      // this.router.navigateByUrl(`/users/`);

    });
  }

  deletePet(apiPet) {
    this.route.params.forEach((param) => {
    this.petsService.deletePetViaApiId(this.userId, apiPet.pet)
      .subscribe(res => {
        console.log(`response: ${res}`);
        this.router.navigateByUrl(`/users/${this.userId}/pets`);
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
          console.log(this.apiPet);
          //cache backend db info for easy access later
          // this.apiPet['name'] = pet.name;
          // this.apiPet['_id'] = pet._id;
          this.petsService.findPetViaApiId(this.userId, this.apiPet.pet)
          .subscribe(response => {
            console.log(response.json());
            this.backendPet = response.json();
            console.log(this.backendPet);
          });
        });
    });
  }

}
