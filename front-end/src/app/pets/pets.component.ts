import { Component, OnInit } from '@angular/core';
import { PetsService } from './pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  allDogBreeds = [];
  constructor(private petsService: PetsService) { }

  ngOnInit() {
    this.petsService.getDogBreeds()
      .subscribe(response => {
        console.log(response.json());
        this.allDogBreeds = response.json()
      });
  }

}
