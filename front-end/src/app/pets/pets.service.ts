import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PetsService {

	baseUrl = 'http://localhost:3000';

	getAllUserPets(user) {
    console.log(`getAllUserPets for user id ${user._id}`);
		return this.http.get(`${this.baseUrl}/users/${user._id}/pets`);
	}

	getOneUserPet(user, pet) {
		console.log(`getOneUserPet for user id ${user._id} pet id ${pet._id}`);
		return this.http.get(`${this.baseUrl}/users/${user._id}/pets/${pet._id}`);
	}

  createOneUserPet(user, newPet) {
    console.log(`createOneUserPet for user id ${user._id}`);
    return this.http.post(`${this.baseUrl}/users/${user._id}/pets`, newPet);
  }


	deleteOneUserPet(user, pet) {
    console.log(`deleteOneUserPet for user id ${user._id} pet id ${pet.pet_id}`);
		return this.http.delete(`${this.baseUrl}/users/${user._id}/pets/${pet.pet_id}`);
	}

	saveOneUserPet(user, pet) {
    console.log(`saveOneUserPet for user id ${user._id} pet id ${pet._id}`);
		return this.http.post(`${this.baseUrl}/users/${user._id}/pets/${pet._id}`, pet);
	}

	updateOneUserPet(user, pet) {
    console.log(`updateOneUserPet for user id ${user._id} pet id ${pet._id}`);
		return this.http.put(`${this.baseUrl}/users/${user._id}/pets/${pet._id}`, pet);
	}

  constructor(private http: Http) { }

}
