import { Component, OnInit } from '@angular/core';
import { UsersService } from './users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  isLoggedIn: boolean = false;

  logout() {
    let req = this.usersService.logoutUser();
    req.subscribe(res => {
      let redirect = res.json();
      this.router.navigateByUrl(redirect["redirect_url"]);
    });
  }

  constructor (
    private usersService: UsersService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.usersService.isLoggedIn.subscribe(resp => {
      this.isLoggedIn = resp;
      console.log(`this.isLoggedIn = ${this.isLoggedIn}`);
    });
  }
}
