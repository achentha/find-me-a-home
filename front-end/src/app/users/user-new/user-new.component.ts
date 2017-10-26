import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})

export class UserNewComponent implements OnInit {

	newUser = <any>{};

  constructor(
  	private usersService : UsersService
  ) { }

  ngOnInit() {

  }

  saveUser(newUser) {
  	console.log("saving user");
  	console.log(newUser);
  	this.usersService.saveUser(newUser)
  			.subscribe(response => {
			console.log(response.json());
			let user = response.json();
			window.location.href = "/users/" + user._id;
		})
  }

}
