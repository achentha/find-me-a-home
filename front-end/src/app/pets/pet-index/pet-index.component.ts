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
  userPets = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petsService: PetsService,
    private petfinderService: PetfinderService,
  ) { }

  ngOnInit() {
        // this.route.paramMap
        //   .switchMap((params: ParamMap) => {
        //     this.petsService.getAllUserPets(params.get('id'))
        //       .subscribe(response => {
        //         console.log(`pet-index getAllUserPets: res = ${response.json()}`)
        //         this.userPets = response.json();
        //       });
        //   });
  }

}
