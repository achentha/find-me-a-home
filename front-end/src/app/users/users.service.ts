import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsersService {

	baseUrl = 'http://localhost:3000';

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

	signupUser(newUser) {
		return this.http.post(`${this.baseUrl}/signup`, newUser);
	}

	loginUser(user) {
		return this.http.post(`${this.baseUrl}/login`, user);
	}

	updateUser(updatedUser) {
		return this.http.put(`${this.baseUrl}/users/${updatedUser._id}`, updatedUser);
	}

  constructor(private http: Http) { }

}
