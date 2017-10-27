import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { UsersService } from '../users.service';
import { PetfinderService } from '../../search/petfinder.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})

export class UserShowComponent implements OnInit {

	oneUser = <any>{};
  search = {breed: '', location: ''};
  foundPets = [];

  findPets(search) {
    console.log(`search for breed ${search.breed}, at ${search.location}`)
    this.petfinderService.getDogBreeds()
      .subscribe(response => {
        this.foundPets = response.json().petfinder.breeds.breed;
          console.log(this.foundPets);
        // this.foundPets = response.petfinder.breeds.breed.json();
      });
  }

  constructor(
  	private route : ActivatedRoute,
  	private usersService : UsersService,
    private petfinderService: PetfinderService,
  ) { }

  ngOnInit() {
  	this.route.params.forEach( param => {
  		this.usersService.getOneUser(param.id)
  		.subscribe(response => {
  			console.log(response.json());
  			this.oneUser = response.json();
  		});
  	});
  }

}
