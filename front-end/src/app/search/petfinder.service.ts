import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import {Observable} from "rxjs/Rx";

@Injectable()
export class PetfinderService {

  // baseUrl = 'http://api.petfinder.com';
  // key = 'd207a8d97b0beecac3fcc231eee212a0';  //petfinder key

  // getDogBreeds() {
  //   let params = new URLSearchParams();
  //
  //   params.append('key', this.key);
  //   params.append('animal', 'dog');
  //   params.append('format', 'json');
  //   return this.http.get(
  //     `${this.baseUrl}/breed.list`,
  //     { search: params }
  //   );
  // }

  getDogBreeds() {
    var url = "http://api.petfinder.com/breed.list?key=d207a8d97b0beecac3fcc231eee212a0&animal=dog&callback=JSONP_CALLBACK&format=json";

            //http://api.petfinder.com/breed.list?key=d207a8d97b0beecac3fcc231eee212a0&animal=dog&format=json
    // var url = "http://api.petfinder.com/pet.find?key=d207a8d97b0beecac3fcc231eee212a0&animal=dog&breed= German Shepherd Dog&location=94539&format=jsonP&prefix=JSONP_CALLBACK"

    return this.jsonp.get(url)
            .map(function(res: Response){
              return res;
            }).catch(function(error: any){return Observable.throw(error);
            });

    // this.jsonp.get(url);
        // .success(function(data){
        //     console.log(data.found);
        // });

    // $.getJSON('http://api.petfinder.com/breed.list?format=json&key=d207a8d97b0beecac3fcc231eee212a0&callback=?')
    //   .done(function(petApiData) { alert('Data retrieved!'; })
    //   .error(function(err) { alert('Error retrieving data!');
    // });
  }

  constructor(private http: Http,
              private jsonp: Jsonp,
              ) { }

}
