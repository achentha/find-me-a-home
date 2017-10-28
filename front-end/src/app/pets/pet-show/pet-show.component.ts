import { Component, OnInit } from '@angular/core';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-pet-show',
  templateUrl: './pet-show.component.html',
  styleUrls: ['./pet-show.component.css']
})
export class PetShowComponent implements OnInit {

  constructor(
    private petsService: PetsService,
  ) { }

  ngOnInit() {
  }

}
