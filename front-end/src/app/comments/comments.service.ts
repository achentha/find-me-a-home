import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CommentsService {

	baseUrl = 'http://localhost:3000';

	getAllComments(userId, petId) {
    console.log(`getAllComments for user id ${userId}, pet id ${petId}`);
		return this.http.get(`${this.baseUrl}/users/${userId}/pets/petId/comments`);
	}

	getOneComment(userId, petId, commentId) {
		console.log(`getOneComment for user Id ${userId} pet id ${petId} comment id ${commentId}`);
		return this.http.get(`${this.baseUrl}/users/${userId}/pets/${petId}/comments/${commentId}`);
	}

  createOneComment(userId, petId, comment) {
    console.log(`createOneComment for user id ${userId}, pet id ${petId}, ${comment}`);
    return this.http.post(`${this.baseUrl}/users/${userId}/pets/${petId}/comments`, {comment});
  }

	deleteOneComment(userId, petId, commentId) {
    console.log(`deleteOneComment for user id ${userId} pet id ${petId} comment id ${commentId}`);
		return this.http.delete(`${this.baseUrl}/users/${userId}/pets/${petId}/comments/${commentId}`);
	}

	updateOneComment(userId, petId, comment) {
    console.log(`updateOneComment for user id ${userId} pet id ${petId}`);
		return this.http.put(`${this.baseUrl}/users/${userId}/pets/${petId}/comments/${comment._id}`, comment);
	}

  constructor(private http: Http) { }

}
