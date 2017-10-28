import { Component, OnInit } from '@angular/core';
import { PetfinderService } from '../search/petfinder.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pet_type = '';
  allPetBreeds = [];
  constructor(private petfinderService: PetfinderService) { }

  ngOnInit() {
    this.petfinderService.getPetBreeds(this.pet_type)
      .subscribe(response => {
        console.log(response.json());
        this.allPetBreeds = response.json()
      });
  }

}
