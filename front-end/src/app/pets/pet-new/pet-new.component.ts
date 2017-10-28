import { Component, OnInit } from '@angular/core';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-pet-new',
  templateUrl: './pet-new.component.html',
  styleUrls: ['./pet-new.component.css']
})
export class PetNewComponent implements OnInit {

  constructor(
    private petsService: PetsService,
  ) { }

  ngOnInit() {
  }

}
