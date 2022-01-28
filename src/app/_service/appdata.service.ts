import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {

  constructor( private http : HttpClient ) { }

  getCarsOptions(){
    return this.http.get(environment.Carsurl + "Cars9096be5.json");
  }

  getAutoPartsOptions(){
    return this.http.get(environment.Carsurl + "ListOfAutoParts1aaa4e5.json");
  }

  submitUser(userData){
    return this.http.post('/assets/result.json',userData);
  }
}
