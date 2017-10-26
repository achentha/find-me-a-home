import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class PetsService {

  baseUrl = 'http://api.petfinder.com';
  key = 'd207a8d97b0beecac3fcc231eee212a0';  //petfinder key
  getDogBreeds() {
    let params = new URLSearchParams();

    params.append('key', this.key);
    params.append('animal', 'dog');
    params.append('format', 'json');
    return this.http.get(`${this.baseUrl}/breed.list`,
      {search: params});
  }


  constructor(private http: Http) { }

}
