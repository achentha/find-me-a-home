import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UsersService {

	// baseUrl = 'http://localhost:3000';
  baseUrl = environment.production ?
		"https://infinite-woodland-85165.herokuapp.com/" :
		"http://localhost:3000";

  isLoggedIn: Subject<boolean> = new Subject();

	getAllUsers() {
		return this.http.get(`${this.baseUrl}/users`);
	}

	getOneUser(userId) {
		console.log(userId);
		return this.http.get(`${this.baseUrl}/users/${userId}`);
	}

	deleteUser(user) {
		console.log(user._id);
		return this.http.delete(`${this.baseUrl}/users/${user._id}`);
	}

	saveUser(newUser) {
		console.log(newUser);
		return this.http.post(`${this.baseUrl}/users/`, newUser);
	}

	updateUser(updatedUser) {
		return this.http.put(`${this.baseUrl}/users/${updatedUser._id}`, updatedUser);
	}

	signupUser(newUser) {
    let req = this.http.post(`${this.baseUrl}/signup`, newUser);
    req.subscribe(resp => this.updateLogin(true),
                  err => this.updateLogin(false));
    return req;
	}

	loginUser(user) {
		let req = this.http.post(`${this.baseUrl}/login`, user);
    req.subscribe(resp => this.updateLogin(true),
                  err => this.updateLogin(false));
    return req;
	}

  logoutUser() {
    let req = this.http.get(`${this.baseUrl}/logout`);
    req.subscribe(resp => this.updateLogin(false),
                  err => this.updateLogin(false));
    return req;
  }

  updateLogin(isLoggedIn: boolean) : void {
    this.isLoggedIn.next(isLoggedIn);
  }

  constructor(private http: Http) { }

}
