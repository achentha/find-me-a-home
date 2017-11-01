import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {

	login_user = <any>{};

  constructor(
  	private usersService : UsersService
  ) { }

  ngOnInit() {

  }

  loginUser(login_user) {
    console.log(`loginUser() ${login_user}`);
    this.usersService.loginUser(login_user)
        .subscribe(response => {
      console.log(response.json());
      let user = response.json();
      window.location.href = "/users/" + user._id;
    });
  }

}
