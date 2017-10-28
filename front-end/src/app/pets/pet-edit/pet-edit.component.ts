import { Component, OnInit } from '@angular/core';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  constructor(
    private petsService: PetsService,
  ) { }

  ngOnInit() {
  }

}
