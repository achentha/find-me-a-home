import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {

	login_user = <any>{};

  constructor(
  	private usersService : UsersService,
    private router: Router,
  ) { }

  ngOnInit() {

  }

  loginUser(login_user) {
    console.log('loginUser(): login_user', login_user);
    this.usersService.loginUser(login_user)
        .subscribe(response => {
      console.log('loginUser(): response', response);
      let user = response.json();
      console.log('redirect_url', user["redirect_url"]);
      this.router.navigateByUrl(user["redirect_url"]);
    });
  }

}
