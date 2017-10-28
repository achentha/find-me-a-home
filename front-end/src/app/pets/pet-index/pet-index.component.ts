import { Component, OnInit } from '@angular/core';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-pet-index',
  templateUrl: './pet-index.component.html',
  styleUrls: ['./pet-index.component.css']
})
export class PetIndexComponent implements OnInit {

  constructor(
    private petsService: PetsService,
  ) { }

  ngOnInit() {
  }

}
