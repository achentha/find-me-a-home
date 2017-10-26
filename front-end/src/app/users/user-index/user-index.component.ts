import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})


export class UserIndexComponent implements OnInit {

	allUsers = [];

  deleteUser(deletedUser) {
    this.usersService.deleteUser(deletedUser)
    .subscribe(response => {
      let userIndex = this.allUsers.indexOf(deletedUser);
      this.allUsers.splice(userIndex, 1);
    });
  }

  constructor(
  	private usersService : UsersService
  ) { }

  ngOnInit() {
  	this.usersService.getAllUsers()
  		.subscribe(response => {
				console.log(response.json());
				this.allUsers = response.json()
			});
  }

}
