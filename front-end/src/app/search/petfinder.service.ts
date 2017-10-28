import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import {Observable} from "rxjs/Rx";

@Injectable()
export class PetfinderService {

  baseUrl = 'http://api.petfinder.com';
  key = 'd207a8d97b0beecac3fcc231eee212a0';  //petfinder key

  getPetBreeds(pet_type) {
    var url = `${this.baseUrl}/breed.list?key=${this.key}&animal=${pet_type}&callback=JSONP_CALLBACK&format=json`;


    return this.jsonp.get(url)
             .map(function(res: Response) {return res;})
             .catch(function(error: any) {return Observable.throw(error);
             });
  }

  getPetsOfBreed(breedSearch) {
    var url = `${this.baseUrl}/pet.find?key=${this.key}&animal=dog&breed=${breedSearch.breed}&location=${breedSearch.location}&format=json&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
             .map(function(res: Response) {return res;})
             .catch(function(error: any) {return Observable.throw(error);});
  }

  getPet(pet_finder_api_id) {
    var url = `${this.baseUrl}/pet.get?key=${this.key}&id=${pet_finder_api_id}&format=json&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
             .map(function(res: Response) {return res;})
             .catch(function(error: any) {return Observable.throw(error);
             });
  }

  constructor(private http: Http,
              private jsonp: Jsonp,
              ) { }

}
