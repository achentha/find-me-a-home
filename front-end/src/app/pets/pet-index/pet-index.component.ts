import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import 'rxjs/add/operator/switchMap';
import { PetsService } from '../pets.service';
// import { PetfinderService } from '../search/petfinder.service';

@Component({
  selector: 'app-pet-index',
  templateUrl: './pet-index.component.html',
  styleUrls: ['./pet-index.component.css']
})
export class PetIndexComponent implements OnInit {

  constructor(
    // private route: ActivatedRoute,
    // private router: Router,
    private petsService: PetsService,
  ) { }

  ngOnInit() {
  }

}
