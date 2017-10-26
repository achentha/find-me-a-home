import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute }   from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {

  updatedUser = <any>{};

  constructor(
    private route : ActivatedRoute,
    private usersService : UsersService
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
      this.usersService.getOneUser(param.id)
      .subscribe(response => {
        console.log(response.json());
        this.updatedUser = response.json();
      });
    });
  }

  updateUser(updatedUser) {
    console.log("updating user");
    this.usersService.updateUser(updatedUser)
    .subscribe(response => {
      console.log(response.json());
      let user = response.json();
      window.location.href = "/users/" + user._id;
    });
  }

}
