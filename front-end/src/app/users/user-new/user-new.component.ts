import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})

export class UserNewComponent implements OnInit {

	newUser = <any>{};

  constructor(
  	private usersService : UsersService,
    private router: Router,
  ) { }

  ngOnInit() {

  }

  createUser(newUser) {
    console.log("create user");
    console.log(newUser);
    this.usersService.signupUser(newUser)
        .subscribe(
          response => {
            this.usersService.updateLogin(true);
            console.log(response.json());
            let jsonRes = response.json();
            console.log('redirect_url', jsonRes["redirect_url"]);
            this.router.navigateByUrl(jsonRes["redirect_url"])
          },
          err => this.usersService.updateLogin(false)
        );
  }
}
