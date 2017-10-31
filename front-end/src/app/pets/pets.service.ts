import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PetsService {

	baseUrl = 'http://localhost:3000';

	getAllUserPets(userId) {
    console.log(`getAllUserPets for user id ${userId}`);
		return this.http.get(`${this.baseUrl}/users/${userId}/pets`);
	}

	getOneUserPet(user, pet) {
		console.log(`getOneUserPet for user id ${user._id} pet id ${pet._id}`);
		return this.http.get(`${this.baseUrl}/users/${user._id}/pets/${pet._id}`);
	}

  createOneUserPet(userId, newPet) {
    console.log(`createOneUserPet for user id ${userId}`);
    return this.http.post(`${this.baseUrl}/users/${userId}/pets`, newPet);
  }

	deleteOneUserPet(userId, petId) {
    console.log(`deleteOneUserPet for user id ${userId} pet id ${petId}`);
		return this.http.delete(`${this.baseUrl}/users/${userId}/pets/${petId}`);
	}

	deletePetViaApiId(userId, apiPet) {
		// console.log(`deletePetViaApiId for user id ${user._id} pet api id ${apiPet.id.$t}`);
		return this.http.delete(`${this.baseUrl}/users/${userId}/pets/petfinderapi/${apiPet.id.$t}`);
	}

  findPetViaApiId(userId, apiPet) {
		console.log(`findPetViaApiId() for user id ${userId} pet api id ${apiPet.id.$t}`)
		return this.http.get(`${this.baseUrl}/users/${userId}/pets/petfinderapi/${apiPet.id.$t}`);
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
